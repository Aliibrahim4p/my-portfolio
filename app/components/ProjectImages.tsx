"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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

export default function ProjectImages({
  images,
  mockLabel,
}: {
  images: ProjectImage[];
  mockLabel?: string;
}) {
  if (images.length === 0) return null;

  if (images.length === 1) {
    const { src, alt } = images[0];
    return (
      <Frame>
        <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} sizes="(max-width: 900px) 100vw, 520px" />
        {mockLabel && <MockLabel text={mockLabel} />}
      </Frame>
    );
  }

  return (
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
        {images.map(({ src, alt }) => (
          <SwiperSlide key={src} style={{ backgroundColor: "#F4EFEA" }}>
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} sizes="(max-width: 900px) 100vw, 520px" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      {mockLabel && <MockLabel text={mockLabel} />}
    </Box>
  );
}
