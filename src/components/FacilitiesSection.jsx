import React from "react";
import Container from "react-bootstrap/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import FacilityCard from "./FacilityCard";

import img1 from "../assets/images/gallery/img1.jpg";
import img2 from "../assets/images/gallery/img2.jpeg";
import img3 from "../assets/images/gallery/img3.webp";

const FacilitiesSection = () => {
  const facilities = [
    { title: "Central Library", image: img1 },
    { title: "Cafeteria & Food Courts", image: img2 },
    { title: "Sports Complex", image: img3 },
  ];

  return (
    <Container className="py-5">
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, color: "#E41E26" }}>
        Facilities
      </Typography>

      <Grid container spacing={4}>
        {facilities.map((f, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <FacilityCard title={f.title} image={f.image} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FacilitiesSection;
