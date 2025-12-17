import React from "react";

export const Slide1: React.FC<{ opacity: number }> = ({ opacity }) => {
  return (
    <div style={{ opacity, textAlign: "center", padding: 40 }}>
      <h1 style={{ fontSize: 72, color: "#000" }}>Welcome to Mistral AI</h1>
      <p style={{ fontSize: 36, color: "#555" }}>Innovating the Future</p>
    </div>
  );
};
