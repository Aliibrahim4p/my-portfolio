import { createTheme } from "@mui/material/styles";

// Warm espresso accent — a quiet nod to the anchor project (a coffee shop
// management system) without tipping the whole site into a coffee-shop theme.
const accent = "#9A4B2F";

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: accent,
      dark: "#7A3A24",
      light: "#B56B4B",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FBFAF8",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1C1A17",
      secondary: "#5C564E",
    },
    divider: "rgba(28, 26, 23, 0.1)",
  },
  typography: {
    fontFamily: "var(--font-geist-sans), sans-serif",
    h1: {
      fontFamily: "var(--font-geist-sans), sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontFamily: "var(--font-geist-sans), sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: "var(--font-geist-sans), sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: 0,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 20,
          paddingRight: 20,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
