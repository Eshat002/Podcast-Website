import React from "react";
import "./FeatureCard.css";

const FeatureCard = ({ img, title, text }) => {
  return (
    <div id="feature-card">
      <img src={img} alt="scribble" />
      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>
    </div>
  );
};

export default FeatureCard;
