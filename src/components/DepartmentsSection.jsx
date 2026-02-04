import React from "react";
import Container from "react-bootstrap/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import DepartmentCard from "./DepartmentCard";

import block1 from "../assets/images/blocks/block1.png";
import block2 from "../assets/images/blocks/block2.jpeg";
import block3 from "../assets/images/blocks/blocka3.webp";

const DepartmentsSection = () => {
  const blocks = [
    { title: "A1 – Administration Block", image: block1 },
    { title: "A2 – Academic Block", image: block2 },
    { title: "A3 – Engineering & CSE Block", image: block3 },
  ];

  return (
    <Container className="py-5">
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, color: "#E41E26" }}>
        Academic Blocks
      </Typography>

      <Grid container spacing={4}>
        {blocks.map((b, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <DepartmentCard title={b.title} image={b.image} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DepartmentsSection;
