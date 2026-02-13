import React from "react";
import { useLocation, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import logo from "../assets/images/hero/logo.png";

const Navbar = () => {
  const location = useLocation();

  const scrollToSection = (id) => {
    // Only scroll if on home page
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#E41E26" }}>
      <Toolbar>
        <Container
          fluid
          className="px-3 d-flex justify-content-between align-items-center"
        >
          {/* Logo + Title */}
          <div className="d-flex align-items-center gap-3">
            <img
              src={logo}
              alt="CU Logo"
              style={{ width: "48px", height: "48px", borderRadius: "4px" }}
            />

            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Chandigarh University – Virtual Campus Tour
            </Typography>
          </div>

          {/* Navigation Buttons */}
          <div className="d-flex gap-3">
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>

            <Button
              color="inherit"
              onClick={() => scrollToSection("blocks")}
            >
              Blocks
            </Button>

            <Button
              color="inherit"
              onClick={() => scrollToSection("facilities")}
            >
              Facilities
            </Button>

            <Button
              component={Link}
              to="/hostels"
              color="inherit"
            >
              Hostels
            </Button>

            <Button
              color="inherit"
              onClick={() => scrollToSection("gallery")}
            >
              Gallery
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#E41E26",
                fontWeight: "bold",
                textTransform: "none",
                px: 3,
              }}
            >
              Contact Us
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
