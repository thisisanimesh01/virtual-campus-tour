import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import bh1 from "../assets/images/hostels/BH-1 Boys Hostel.webp";
import bh2 from "../assets/images/hostels/BH-2.jpg";
import gh1 from "../assets/images/hostels/GH-1 Girls Hostel.webp";
import gh2 from "../assets/images/hostels/GH-2.jpeg";

const Hostels = () => {
  const hostelData = [
    {
      title: "BH-1 Boys Hostel",
      image: bh1,
      description:
        "Modern accommodation with Wi-Fi, study rooms, indoor games, and sports facilities.",
    },
    {
      title: "BH-2 Boys Hostel",
      image: bh2,
      description:
        "Comfortable shared rooms, mess facility, common lounges and recreational areas.",
    },
    {
      title: "GH-1 Girls Hostel",
      image: gh1,
      description:
        "Safe and secure hostel with 24/7 surveillance and modern amenities.",
    },
    {
      title: "GH-2 Girls Hostel",
      image: gh2,
      description:
        "Premium hostel accommodation with fully furnished rooms and campus access.",
    },
  ];

  return (
    <>
      <Navbar />

      <Container className="py-5">
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 4, color: "#E41E26" }}
        >
          Chandigarh University Hostels
        </Typography>

        <Grid container spacing={4}>
          {hostelData.map((hostel, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card sx={{ borderRadius: "12px", boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="220"
                  image={hostel.image}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {hostel.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    {hostel.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Hostels;
