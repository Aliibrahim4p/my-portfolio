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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SyncIcon from "@mui/icons-material/Sync";
import GroupsIcon from "@mui/icons-material/Groups";
import StorageIcon from "@mui/icons-material/Storage";

const TECH = ["Next.js", "Prisma", "PostgreSQL", "IndexedDB", "PWA"];

const HIGHLIGHTS = [
  {
    icon: StorefrontIcon,
    title: "POS + inventory",
    description: "Point-of-sale checkout wired directly into live stock levels.",
  },
  {
    icon: RestaurantMenuIcon,
    title: "Recipe-based tracking",
    description: "Selling a drink deducts its recipe's ingredients automatically.",
  },
  {
    icon: CloudOffIcon,
    title: "Offline-first PWA",
    description: "Keeps taking orders offline, syncing through IndexedDB when back online.",
  },
  {
    icon: LockPersonIcon,
    title: "RBAC & auth",
    description: "Role-based access so cashiers, managers, and admins see only what they need.",
  },
];

const OTHER_PROJECTS = [
  {
    title: "Broadcast Recording & Monitoring System",
    description:
      "A PHP recording pipeline built for a local broadcasting company — captures live broadcasts, watches for dropped recordings, and keeps the company in the loop automatically.",
    tech: ["PHP", "FFmpeg"],
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
        icon: AccessTimeIcon,
        title: "4+ hours saved daily",
        description:
          "Replaced manual broadcast tracking, saving the company over 4 hours a day while archiving every recording on the server.",
      },
    ],
  },
  {
    title: "Contact Manager (Java Swing)",
    description:
      "A Java Swing desktop application for managing contacts and groups, built as a university course project around an MVC architecture and a custom Observer/Observable mechanism.",
    tech: ["Java", "Swing", "MVC", "Observer Pattern"],
    github: "https://github.com/Aliibrahim4p/contactmanager",
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
];

function PlaceholderGraphic() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 260,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "#F4EFEA",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      <Stack direction="row" spacing={0.75} sx={{ mb: 1.5 }}>
        <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#E0D5CC" }} />
        <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#E0D5CC" }} />
        <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#E0D5CC" }} />
      </Stack>
      <Stack direction="row" spacing={1.5} sx={{ flex: 1 }}>
        <Stack spacing={1} sx={{ width: "35%" }}>
          {[1, 2, 3, 4].map((i) => (
            <Box
              key={i}
              sx={{ height: 14, borderRadius: 1, bgcolor: i === 1 ? "primary.main" : "#E7DED5", opacity: i === 1 ? 0.85 : 1 }}
            />
          ))}
        </Stack>
        <Stack spacing={1.5} sx={{ flex: 1 }}>
          <Box sx={{ height: 44, borderRadius: 1, bgcolor: "#FFFFFF", border: "1px solid #E7DED5" }} />
          <Stack direction="row" spacing={1.5} sx={{ flex: 1 }}>
            <Box sx={{ flex: 1, borderRadius: 1, bgcolor: "#FFFFFF", border: "1px solid #E7DED5" }} />
            <Box sx={{ flex: 1, borderRadius: 1, bgcolor: "#FFFFFF", border: "1px solid #E7DED5" }} />
          </Stack>
        </Stack>
      </Stack>
      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          bottom: 10,
          right: 14,
          color: "text.secondary",
          fontFamily: "var(--font-geist-mono), monospace",
        }}
      >
        screenshots coming soon
      </Typography>
    </Box>
  );
}

export default function Projects() {
  return (
    <Box id="projects" component="section" sx={{ py: { xs: 8, sm: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ color: "primary.main", fontWeight: 700, letterSpacing: "0.08em" }}
        >
          Selected work
        </Typography>
        <Typography component="h2" variant="h2" sx={{ mt: 1, fontSize: { xs: "2rem", sm: "2.5rem" } }}>
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
              sx={{ color: "text.secondary", fontFamily: "var(--font-geist-mono), monospace" }}
            >
              Featured project
            </Typography>
            <Typography variant="h3" sx={{ mt: 0.5, fontSize: "1.5rem" }}>
              Coffee Shop Management System
            </Typography>
            <Typography variant="body1" sx={{ mt: 1.5, color: "text.secondary", lineHeight: 1.7 }}>
              A full-stack POS and inventory system for running a real coffee
              shop day to day — checkout, stock, staff access, and syncing all
              handled in one app.
            </Typography>

            <Stack spacing={1.75} sx={{ mt: 3 }}>
              {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
                <Stack key={title} direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                  <Icon sx={{ color: "primary.main", fontSize: 20, mt: "2px" }} />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {description}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>

            <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 3, flexWrap: "wrap" }}>
              {TECH.map((tech) => (
                <Chip key={tech} label={tech} size="small" variant="outlined" />
              ))}
            </Stack>

            <Button
              href="https://github.com/Aliibrahim4p"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
              sx={{ mt: 3 }}
              variant="text"
            >
              View on GitHub
            </Button>
          </Box>

          <Box sx={{ order: { xs: 1, md: 2 } }}>
            <PlaceholderGraphic />
          </Box>
        </Paper>

        <Typography
          variant="overline"
          sx={{ display: "block", mt: 7, color: "text.secondary", fontWeight: 700, letterSpacing: "0.08em" }}
        >
          Other projects
        </Typography>

        <Stack spacing={3} sx={{ mt: 3 }}>
          {OTHER_PROJECTS.map((project) => (
            <Paper
              key={project.title}
              variant="outlined"
              sx={{ p: { xs: 3, sm: 4 }, borderRadius: 3 }}
            >
              <Typography variant="h3" sx={{ fontSize: "1.25rem" }}>
                {project.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, color: "text.secondary", lineHeight: 1.7 }}>
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
                {project.highlights.map(({ icon: Icon, title, description }) => (
                  <Stack key={title} direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                    <Icon sx={{ color: "primary.main", fontSize: 20, mt: "2px" }} />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {description}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Box>

              <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 3, flexWrap: "wrap" }}>
                {project.tech.map((tech) => (
                  <Chip key={tech} label={tech} size="small" variant="outlined" />
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
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
