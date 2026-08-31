import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import VideocamIcon from "@mui/icons-material/Videocam";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SyncIcon from "@mui/icons-material/Sync";
import GroupsIcon from "@mui/icons-material/Groups";
import StorageIcon from "@mui/icons-material/Storage";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmailIcon from "@mui/icons-material/Email";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LayersIcon from "@mui/icons-material/Layers";
import ProjectImages from "./ProjectImages";

const TECH = ["Next.js", "Prisma", "PostgreSQL", "IndexedDB", "PWA"];

const IMPACT =
  "Built to replace three separate coffee-shop tools — till, stock sheet, and staff roster — with one system that runs the shop day to day, online or offline.";

const HIGHLIGHTS = [
  {
    icon: StorefrontIcon,
    title: "POS + inventory",
    description:
      "Point-of-sale checkout wired directly into live stock levels.",
  },
  {
    icon: RestaurantMenuIcon,
    title: "Recipe-based tracking",
    description:
      "Selling a drink deducts its recipe's ingredients automatically.",
  },
  {
    icon: CloudOffIcon,
    title: "Offline-first PWA",
    description:
      "Keeps taking orders offline, syncing through IndexedDB when back online.",
  },
  {
    icon: LockPersonIcon,
    title: "RBAC & auth",
    description:
      "Role-based access so cashiers, managers, and admins see only what they need.",
  },
];

const OTHER_PROJECTS = [
  {
    title: "Broadcast Recording & Monitoring System",
    description:
      "A PHP recording pipeline built for a local broadcasting company — captures live broadcasts, watches for dropped recordings, and keeps the company in the loop automatically.",
    impact:
      "Replaced a fully manual, all-day broadcast-monitoring workflow — saving the company 4+ hours daily and producing a complete server-side archive.",
    tech: ["PHP", "FFmpeg"],
    images: [] as { src: string; alt: string }[],
    highlights: [
      {
        icon: VideocamIcon,
        title: "FFmpeg-based capture",
        description:
          "Continuously records live broadcasts with FFmpeg, archived straight to the server.",
      },
      {
        icon: RestartAltIcon,
        title: "Stop/restart monitoring",
        description:
          "A monitoring layer detects dropped recordings and restarts them automatically when possible.",
      },
      {
        icon: NotificationsActiveIcon,
        title: "Company notifications",
        description:
          "Sends the company real-time alerts on recording status and issues.",
      },
      {
        icon: LayersIcon,
        title: "Handles 10+ concurrent recordings",
        description:
          "Runs 10+ simultaneous broadcast recordings without dropping frames or missing archives.",
      },
    ],
  },
  {
    title: "Contact Manager (Java Swing)",
    description:
      "A Java Swing desktop application for managing contacts and groups, built as a university course project around an MVC architecture and a custom Observer/Observable mechanism.",
    impact:
      "Goal: apply MVC and a hand-built Observer/Observable pattern to a real, complete desktop app rather than a toy exercise — shipping every core flow, from create to search to grouping.",
    tech: ["Java", "Swing", "MVC", "Observer Pattern"],
    github: "https://github.com/Aliibrahim4p/contactmanager",
    images: [
      {
        src: "/contactmanager-app.png",
        alt: "Contact Manager Java Swing app showing the contact list and group management windows",
      },
    ],
    highlights: [
      {
        icon: AccountTreeIcon,
        title: "MVC architecture",
        description:
          "Structured around the Model-View-Controller pattern for a clean separation of concerns.",
      },
      {
        icon: SyncIcon,
        title: "Custom Observer/Observable",
        description:
          "A hand-built Observer/Observable mechanism keeps the UI in sync with the data automatically.",
      },
      {
        icon: GroupsIcon,
        title: "Contacts & groups",
        description:
          "Create, edit, search, sort, and organize contacts into groups.",
      },
      {
        icon: StorageIcon,
        title: "Persistent local storage",
        description:
          "Saves and reloads contact and group data from local files across sessions.",
      },
    ],
  },
  {
    title: "Gym Management System",
    description:
      "A fully responsive gym management platform built as a first-year web development academic project, with role-based interfaces for administrators, trainers, and clients.",
    impact:
      "Goal: cover a full gym's operations — scheduling, training, e-commerce, and communication — in a single first-year project, well beyond the typical course scope.",
    tech: ["PHP", "JavaScript", "HTML/CSS", "AJAX", "PHPMailer"],
    github: "https://github.com/Aliibrahim4p/GymApplication",
    images: [
      {
        src: "/gymapp-schedule.png",
        alt: "Gym Management System class schedule table",
      },
      {
        src: "/gymap-store.png",
        alt: "Gym Management System e-commerce store page",
      },
      {
        src: "/gymapp-trainers.png",
        alt: "Gym Management System trainers carousel",
      },
    ],
    highlights: [
      {
        icon: CalendarMonthIcon,
        title: "Class & session scheduling",
        description:
          "Gym class scheduling and personal training sessions across role-based views.",
      },
      {
        icon: SupervisorAccountIcon,
        title: "Role-based interfaces",
        description:
          "Separate admin, trainer, and client experiences for scheduling, training, and account management.",
      },
      {
        icon: ShoppingCartIcon,
        title: "Integrated store",
        description:
          "An e-commerce section for supplements and equipment, with cart and checkout flows.",
      },
      {
        icon: EmailIcon,
        title: "Automated email & AJAX",
        description:
          "PHPMailer-driven email notifications with AJAX-powered asynchronous interactions throughout.",
      },
    ],
  },
];

function ImpactNote({ text }: { text: string }) {
  return (
    <Stack
      direction="row"
      spacing={1.25}
      sx={{
        alignItems: "flex-start",
        mt: 3,
        p: 1.5,
        borderRadius: 2,
        bgcolor: "rgba(154, 75, 47, 0.07)",
      }}
    >
      <TrendingUpIcon sx={{ color: "primary.main", fontSize: 20, mt: "1px" }} />
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {text}
      </Typography>
    </Stack>
  );
}

const COFFEE_SHOP_IMAGES = [
  {
    src: "/coffee_shop_dashboard.png",
    alt: "Coffee Shop Management System daily sales dashboard mockup",
  },
  {
    src: "/coffee_shop_pos_mockup_v2.png",
    alt: "Coffee Shop Management System point-of-sale checkout screen mockup",
  },
  {
    src: "/coffee_shop_inventory_entry.png",
    alt: "Coffee Shop Management System inventory count screen mockup",
  },
];

export default function Projects() {
  return (
    <Box id="projects" component="section" sx={{ py: { xs: 8, sm: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{
            color: "primary.main",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          Selected work
        </Typography>
        <Typography
          component="h2"
          variant="h2"
          sx={{ mt: 1, fontSize: { xs: "2rem", sm: "2.5rem" } }}
        >
          Projects
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            mt: 5,
            p: { xs: 3, sm: 4 },
            borderRadius: 3,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
            gap: { xs: 3, md: 5 },
          }}
        >
          <Box sx={{ order: { xs: 2, md: 1 } }}>
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                fontFamily: "var(--font-geist-mono), monospace",
              }}
            >
              Featured project
            </Typography>
            <Typography variant="h3" sx={{ mt: 0.5, fontSize: "1.5rem" }}>
              Coffee Shop Management System
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 1.5, color: "text.secondary", lineHeight: 1.7 }}
            >
              A full-stack POS and inventory system for running a real coffee
              shop day to day — checkout, stock, staff access, and syncing all
              handled in one app.
            </Typography>

            <Stack spacing={1.75} sx={{ mt: 3 }}>
              {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
                <Stack
                  key={title}
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "flex-start" }}
                >
                  <Icon
                    sx={{ color: "primary.main", fontSize: 20, mt: "2px" }}
                  />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>

            <ImpactNote text={IMPACT} />

            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{ mt: 3, flexWrap: "wrap" }}
            >
              {TECH.map((tech) => (
                <Chip key={tech} label={tech} size="small" variant="outlined" />
              ))}
            </Stack>

            <Button
              href="https://github.com/Aliibrahim4p/dreams-coffee/"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
              sx={{ mt: 3 }}
              variant="text"
            >
              View on GitHub
            </Button>
          </Box>

          <Box sx={{ order: { xs: 1, md: 2 }, minWidth: 0 }}>
            <ProjectImages
              images={COFFEE_SHOP_IMAGES}
              mockLabel="mockup — not an actual screenshot"
            />
          </Box>
        </Paper>

        <Typography
          variant="overline"
          sx={{
            display: "block",
            mt: 7,
            color: "text.secondary",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          Other projects
        </Typography>

        <Stack spacing={3} sx={{ mt: 3 }}>
          {OTHER_PROJECTS.map((project) => {
            const hasImages = project.images.length > 0;
            const body = (
              <Box>
                <Typography variant="h3" sx={{ fontSize: "1.25rem" }}>
                  {project.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: 1, color: "text.secondary", lineHeight: 1.7 }}
                >
                  {project.description}
                </Typography>

                <Box
                  sx={{
                    mt: 3,
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                    gap: 2,
                  }}
                >
                  {project.highlights.map(
                    ({ icon: Icon, title, description }) => (
                      <Stack
                        key={title}
                        direction="row"
                        spacing={1.5}
                        sx={{ alignItems: "flex-start" }}
                      >
                        <Icon
                          sx={{
                            color: "primary.main",
                            fontSize: 20,
                            mt: "2px",
                          }}
                        />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            {description}
                          </Typography>
                        </Box>
                      </Stack>
                    ),
                  )}
                </Box>

                <ImpactNote text={project.impact} />

                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ mt: 3, flexWrap: "wrap" }}
                >
                  {project.tech.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Stack>

                {project.github && (
                  <Button
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                    sx={{ mt: 3 }}
                    variant="text"
                  >
                    View on GitHub
                  </Button>
                )}
              </Box>
            );

            return (
              <Paper
                key={project.title}
                variant="outlined"
                sx={
                  hasImages
                    ? {
                        p: { xs: 3, sm: 4 },
                        borderRadius: 3,
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
                        gap: { xs: 3, md: 5 },
                      }
                    : { p: { xs: 3, sm: 4 }, borderRadius: 3 }
                }
              >
                {hasImages ? (
                  <>
                    <Box sx={{ order: { xs: 2, md: 1 } }}>{body}</Box>
                    <Box sx={{ order: { xs: 1, md: 2 }, minWidth: 0 }}>
                      <ProjectImages images={project.images} />
                    </Box>
                  </>
                ) : (
                  body
                )}
              </Paper>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
