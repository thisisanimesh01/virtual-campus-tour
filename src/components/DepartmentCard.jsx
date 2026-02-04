import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const DepartmentCard = ({ image, title }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "12px", boxShadow: 3 }}>
      <CardMedia component="img" height="180" image={image} />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DepartmentCard;
