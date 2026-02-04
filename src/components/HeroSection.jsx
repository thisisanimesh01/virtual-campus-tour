import React from "react";
import { Button, Typography } from "@mui/material";
import mainHero from "../assets/images/hero/main.png";

const HeroSection = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div
        style={{
          backgroundImage: `url(${mainHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          width: "100%",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "90vh",
          background:
            "linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
        }}
      />

      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          color: "white",
          maxWidth: "550px",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Explore Chandigarh University Like Never Before
        </Typography>

        <Typography variant="h6" sx={{ mb: 4 }}>
          Take a virtual tour of blocks, hostels, facilities, and explore CU
          like never before.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E41E26",
            color: "#fff",
            fontWeight: "bold",
            padding: "12px 28px",
            fontSize: "16px",
            textTransform: "none",
          }}
        >
          Start Virtual Tour
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
