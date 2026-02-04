import React from "react";
import { Button, Typography } from "@mui/material";
import Container from "react-bootstrap/Container";
import drone from "../assets/images/hero/drone.jpeg";

const Preview360 = () => {
  return (
    <Container className="py-5 text-center">
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#E41E26" }}>
        360° Campus Preview
      </Typography>

      <img
        src={drone}
        alt="CU 360"
        style={{
          width: "100%",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      />

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#E41E26",
          marginTop: "20px",
          padding: "12px 28px",
          fontWeight: "bold",
          textTransform: "none",
        }}
      >
        Enter 360° Tour
      </Button>
    </Container>
  );
};

export default Preview360;
