import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#111",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        marginTop: "40px",
      }}
    >
      © {new Date().getFullYear()} Chandigarh University Virtual Tour
    </div>
  );
};

export default Footer;
