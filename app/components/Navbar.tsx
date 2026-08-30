"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { EMAIL } from "../constants";

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(251, 250, 248, 0.85)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        color: "text.primary",
      }}
    >
      <Toolbar sx={{ maxWidth: 1120, width: "100%", mx: "auto", px: { xs: 2, sm: 4 } }}>
        <Link
          href="#top"
          underline="none"
          color="inherit"
          sx={{ fontWeight: 700, letterSpacing: "-0.02em", fontSize: "1.05rem" }}
        >
          Ali Ibrahim
        </Link>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          spacing={3}
          sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              underline="none"
              color="text.secondary"
              sx={{
                fontSize: "0.9rem",
                fontWeight: 500,
                "&:hover": { color: "primary.main" },
              }}
            >
              {link.label}
            </Link>
          ))}
          <IconButton
            component="a"
            href="https://github.com/Aliibrahim4p"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            size="small"
            sx={{ color: "text.secondary" }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/ali-ibrahim-b46a3a267"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            size="small"
            sx={{ color: "text.secondary" }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
          <Button
            href={`mailto:${EMAIL}`}
            variant="contained"
            disableElevation
            size="small"
          >
            Get in touch
          </Button>
        </Stack>

        <IconButton
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "inline-flex", sm: "none" }, color: "text.primary" }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 3, height: "100%", bgcolor: "background.default" }}>
          <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
            <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack spacing={3} sx={{ mt: 2 }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                underline="none"
                color="text.primary"
                onClick={() => setOpen(false)}
                sx={{ fontSize: "1.1rem", fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
            <Stack direction="row" spacing={1}>
              <IconButton
                component="a"
                href="https://github.com/Aliibrahim4p"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com/in/ali-ibrahim-b46a3a267"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
            <Button
              href={`mailto:${EMAIL}`}
              variant="contained"
              disableElevation
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
}
