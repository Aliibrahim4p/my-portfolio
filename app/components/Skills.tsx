import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

const GROUPS = [
  {
    category: "Languages",
    skills: ["Java (SE)", "TypeScript", "PHP", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["Next.js", "React", "TypeScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Next.js API Routes", "REST APIs"],
  },
  {
    category: "Database & ORM",
    skills: ["PostgreSQL", "Prisma (ORM)", "MySql"],
  },
  {
    category: "Security & Auth",
    skills: [
      "JWT (Access / Refresh Tokens)",
      "Cookie-Based Auth",
      "Sessions",
      "RBAC",
    ],
  },
  {
    category: "Architecture & Patterns",
    skills: [
      "SOLID Principles",
      "GoF Design Patterns",
      "Layered Architecture",
      "MVC",
    ],
  },
  {
    category: "Tooling & Workflow",
    skills: [
      "Git",
      "ESLint",
      "Jest",
      "Winston",
      "CI/CD (GitHub Actions)",
      "Claude Code",
      "Redis",
    ],
  },
];

export default function Skills() {
  return (
    <Box id="skills" component="section" sx={{ py: { xs: 8, sm: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{
            color: "primary.main",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          Toolbox
        </Typography>
        <Typography
          component="h2"
          variant="h2"
          sx={{ mt: 1, fontSize: { xs: "2rem", sm: "2.5rem" } }}
        >
          Skills
        </Typography>

        <Box
          sx={{
            mt: 5,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {GROUPS.map((group) => (
            <Paper
              key={group.category}
              variant="outlined"
              sx={{ p: 3, borderRadius: 3 }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: "text.secondary",
                  fontFamily: "var(--font-geist-mono), monospace",
                  mb: 2,
                }}
              >
                {group.category}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{ flexWrap: "wrap" }}
              >
                {group.skills.map((skill) => (
                  <Chip key={skill} label={skill} size="small" />
                ))}
              </Stack>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
