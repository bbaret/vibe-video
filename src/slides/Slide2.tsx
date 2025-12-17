import React from "react";

export const Slide2: React.FC<{ opacity: number }> = ({ opacity }) => {
  return (
    <div style={{ opacity, textAlign: "center", padding: 40 }}>
      <h1 style={{ fontSize: 72, color: "#000" }}>What is Mistral AI?</h1>
      <p style={{ fontSize: 36, color: "#555" }}>
        Mistral AI is a cutting-edge technology company focused on developing
        advanced AI solutions to solve complex problems.
      </p>
    </div>
  );
};
