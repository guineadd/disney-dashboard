import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7AA6FF",
      light: "#A8C3FF",
      dark: "#355E9B",
      darkHover: "#4A7EBE",
    },
    secondary: {
      main: "#FF6EB4",
      light: "#FF9FCD",
      dark: "#B34C8A",
    },
    background: {
      default: "#2B2B2B",
      paper: "#636363",
    },
    text: {
      primary: "#FFF",
      secondary: "#CCC",
      disabled: "#888",
    },
    dataGrid: {
      headerBg: "#B34C8A",
      headerText: "#FFF",
      headerHoverBg: "#FF6EB4",
      headerHoverText: "#2B2B2B",
      rowBg: "#424242",
      rowHoverBg: "#5A5A5A",
      rowText: "#FFF",
      selectedRowBg: "#7AA6FF",
      selectedRowText: "#FFF",
      emptyRowsBg: "#693755",
    },
  },
  typography: {
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    fontWeightBold: 700,
    h1: {
      fontSize: "4rem",
      color: "#A8C3FF",
      textAlign: "center",
      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
    },
    h2: {
      fontSize: "3.5rem",
      color: "#FF6EB4",
    },
    h3: {
      fontSize: "3rem",
      color: "#7AA6FF",
    },
    h4: {
      fontSize: "2.5rem",
      color: "#FFF",
    },
    body1: {
      fontSize: "1rem",
      color: "#CCC",
    },
    button: {
      textTransform: "none",
      fontSize: "1rem",
    },
  },
  shape: {
    borderRadius: 5,
  },
  spacing: 4,
});

export default theme;
