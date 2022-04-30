import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Navbar from "./Navbar"
import Container from "@mui/material/Container";




const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "background.paper" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters><Navbar/></Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
