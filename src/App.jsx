import React from "react";
import "./App.css";
import { Typography, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/01-Header/Header";
import Hero from "./components/02-Hero/Hero"
import About from "./components/03-About/About"
const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#b5179f",
        light: "#ea57d1",
        dark: "#810070",
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
      info: {
        main: "#273c4d",
        light: "#516679",
        dark: "#001625",
      },
      background: {
        paper: "#fffefb",
        default: "#fffefb",
      },
    },
    typography: {
      fontFamily: ["Lato", "cursive"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
        <Header />
      <main>
        <Hero/>
        <About/>
      
      </main>
    </ThemeProvider>
  );
};

export default App;
