import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Grid } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            align="center"
            variant="h2"
            textcolor="primary"
            style={{ color: "white" }}
          >
            My Journal
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
