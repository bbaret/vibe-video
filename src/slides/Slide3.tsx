import React from "react";

export const Slide3: React.FC<{ opacity: number }> = ({ opacity }) => {
  return (
    <div style={{ opacity, textAlign: "center", padding: 40 }}>
      <h1 style={{ fontSize: 72, color: "#000" }}>Core Technologies</h1>
      <p style={{ fontSize: 36, color: "#555" }}>
        Mistral AI leverages state-of-the-art machine learning and deep learning
        techniques to build scalable and efficient AI models.
      </p>
    </div>
  );
};
