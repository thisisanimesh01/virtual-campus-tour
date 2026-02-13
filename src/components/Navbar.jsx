import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#E41E26" }}>
      <Toolbar>
        <Container className="d-flex justify-content-between align-items-center">
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "#fff", fontWeight: "bold" }}
          >
            Chandigarh University – Virtual Campus Tour
          </Typography>

          <div className="d-flex gap-3">
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>

            <Button component={Link} to="/hostels" color="inherit">
              Hostels
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
