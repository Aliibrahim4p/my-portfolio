"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type ProjectImage = { src: string; alt: string };

const FRAME_HEIGHT = 300;

function MockLabel({ text }: { text: string }) {
  return (
    <Typography
      variant="caption"
      sx={{
        position: "absolute",
        bottom: 8,
        right: 12,
        zIndex: 10,
        px: 1,
        py: 0.25,
        borderRadius: 1,
        bgcolor: "rgba(255, 255, 255, 0.85)",
        color: "text.secondary",
        fontFamily: "var(--font-geist-mono), monospace",
        fontSize: "0.7rem",
      }}
    >
      {text}
    </Typography>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: FRAME_HEIGHT,
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "#F4EFEA",
      }}
    >
      {children}
    </Box>
  );
}

function ZoomHint() {
  return (
    <Box
      className="zoom-hint"
      sx={{
        position: "absolute",
        top: 8,
        left: 8,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        borderRadius: "50%",
        bgcolor: "rgba(255, 255, 255, 0.85)",
        color: "text.secondary",
        opacity: 0,
        transition: "opacity 0.15s ease",
      }}
    >
      <OpenInFullIcon sx={{ fontSize: 14 }} />
    </Box>
  );
}

function ClickableImage({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: () => void;
}) {
  return (
    <Box
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${alt} full screen`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        cursor: "pointer",
        "&:hover .zoom-hint": { opacity: 1 },
      }}
    >
      <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} sizes="(max-width: 900px) 100vw, 520px" />
      <ZoomHint />
    </Box>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: ProjectImage[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const goPrev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate]
  );
  const goNext = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate]
  );

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goPrev, goNext]);

  const { src, alt } = images[index];

  return (
    <Dialog
      open
      onClose={onClose}
      maxWidth={false}
      slotProps={{
        paper: {
          sx: {
            bgcolor: "rgba(20, 18, 16, 0.95)",
            boxShadow: "none",
            width: "92vw",
            height: "88vh",
            m: 0,
          },
        },
      }}
    >
      <IconButton
        onClick={onClose}
        aria-label="Close full-screen image"
        sx={{ position: "absolute", top: 8, right: 8, zIndex: 2, color: "#fff" }}
      >
        <CloseIcon />
      </IconButton>

      {images.length > 1 && (
        <>
          <IconButton
            onClick={goPrev}
            aria-label="Previous image"
            sx={{ position: "absolute", top: "50%", left: 8, transform: "translateY(-50%)", zIndex: 2, color: "#fff" }}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
          <IconButton
            onClick={goNext}
            aria-label="Next image"
            sx={{ position: "absolute", top: "50%", right: 8, transform: "translateY(-50%)", zIndex: 2, color: "#fff" }}
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </>
      )}

      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} sizes="92vw" />
      </Box>
    </Dialog>
  );
}

export default function ProjectImages({
  images,
  mockLabel,
}: {
  images: ProjectImage[];
  mockLabel?: string;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  const lightbox =
    lightboxIndex !== null ? (
      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    ) : null;

  if (images.length === 1) {
    const { src, alt } = images[0];
    return (
      <>
        <Frame>
          <ClickableImage src={src} alt={alt} onClick={() => setLightboxIndex(0)} />
          {mockLabel && <MockLabel text={mockLabel} />}
        </Frame>
        {lightbox}
      </>
    );
  }

  return (
    <>
      <Box
        sx={{
          position: "relative",
          "& .swiper": { height: FRAME_HEIGHT, borderRadius: 2, overflow: "hidden", border: "1px solid", borderColor: "divider" },
          "& .swiper-slide": { bgcolor: "#F4EFEA" },
          "& .swiper-button-next, & .swiper-button-prev": { color: "primary.main" },
          "& .swiper-button-next:after, & .swiper-button-prev:after": { fontSize: "1.1rem" },
          "& .swiper-pagination-bullet-active": { backgroundColor: "#9A4B2F" },
        }}
      >
        <Swiper
          modules={[Navigation, Pagination, A11y, Keyboard]}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          a11y={{ enabled: true, prevSlideMessage: "Previous screenshot", nextSlideMessage: "Next screenshot" }}
        >
          {images.map(({ src, alt }, i) => (
            <SwiperSlide key={src} style={{ backgroundColor: "#F4EFEA" }}>
              <ClickableImage src={src} alt={alt} onClick={() => setLightboxIndex(i)} />
            </SwiperSlide>
          ))}
        </Swiper>
        {mockLabel && <MockLabel text={mockLabel} />}
      </Box>
      {lightbox}
    </>
  );
}
