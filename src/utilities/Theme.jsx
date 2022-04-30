import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Theme = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#810070",
        light: "#ea57d1",
        dark: "#b5179f",
      },
      secondary: {
        main: "#283674",
        light: "#575ea1",
        dark: "#001046",
      },
      warning: {
        main: "#f48c06",
        light: "#ffbd47",
        dark: "#bb5e00",
      },
      background: {
        paper: "#fffefb",
        default: "#fffefb",
      },
    },
    typography: {
      body1: {
        color: "red",
      },
      h1: {
        color: theme.palette.secondary.dark,
      },
      button: {
        color: green[500],
      },
    },
  });
  return <ThemeProvider theme={theme}></ThemeProvider>;
};

export default Theme;
