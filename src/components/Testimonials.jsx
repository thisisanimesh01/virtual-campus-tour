import React from "react";
import Container from "react-bootstrap/Container";
import Typography from "@mui/material/Typography";

const Testimonials = () => {
  return (
    <Container className="py-5">
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 3, color: "#E41E26" }}
      >
        Student Testimonials
      </Typography>

      <Typography variant="body1" sx={{ opacity: 0.8 }}>
        “Chandigarh University offers world-class facilities, excellent faculty,
        diverse culture, and endless opportunities. The experience here truly
        transforms you.”
      </Typography>
    </Container>
  );
};

export default Testimonials;
