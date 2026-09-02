import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { EMAIL } from "../constants";

export default function Hero() {
  return (
    <Box
      id="top"
      component="section"
      sx={{ pt: { xs: 10, sm: 14 }, pb: { xs: 8, sm: 10 } }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          spacing={1.5}
          sx={{ mb: 3, alignItems: "center" }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: "success.main",
            }}
          />
          <Typography
            variant="body2"
            sx={{
              fontFamily: "var(--font-geist-mono), monospace",
              color: "text.secondary",
            }}
          >
            Hello there, I&apos;m Ali , I love solving problems and building
            things that make a difference.
          </Typography>
        </Stack>

        <Typography
          component="h1"
          variant="h1"
          sx={{
            fontSize: { xs: "2.75rem", sm: "4rem", md: "4.75rem" },
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Ali Ibrahim
        </Typography>

        <Typography
          variant="h3"
          sx={{
            mt: 2,
            fontSize: { xs: "1.35rem", sm: "1.75rem" },
            color: "primary.main",
            fontWeight: 600,
          }}
        >
          Full-Stack Software Developer
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 3,
            maxWidth: 640,
            fontSize: "1.15rem",
            color: "text.secondary",
            lineHeight: 1.7,
          }}
        >
          Im a CS student who loves to build complete systems end to end — from
          talking to whoever's actually feeling the pain, through to deployment.
          I&apos;d rather trace a bug to its root cause than patch the symptom,
          and that&apos;s the kind of problem I actually enjoy.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          useFlexGap
          sx={{ mt: 5, flexWrap: "wrap" }}
        >
          <Button
            href="#projects"
            variant="contained"
            disableElevation
            size="large"
            endIcon={<ArrowOutwardIcon fontSize="small" />}
          >
            View Projects
          </Button>
          <Button href={`mailto:${EMAIL}`} variant="outlined" size="large">
            Contact Me
          </Button>
        </Stack>

        <Stack direction="row" spacing={1} sx={{ mt: 5 }}>
          <IconButton
            component="a"
            href="https://github.com/Aliibrahim4p"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            sx={{
              border: "1px solid",
              borderColor: "divider",
              color: "text.primary",
            }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/ali-ibrahim-b46a3a267"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{
              border: "1px solid",
              borderColor: "divider",
              color: "text.primary",
            }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
