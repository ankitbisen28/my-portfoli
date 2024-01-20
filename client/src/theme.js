import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter,sans-serif",
    h1: {
      fontSize: "4rem",
      fontWeight: "600",
    },
  },
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#fff",
    },
    info: {
      main: "#ffc200",
    },
    grey: {
      main: "#474559",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  // ... other theme options ...
});

export default theme;