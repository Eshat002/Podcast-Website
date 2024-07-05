import React from "react";
import "./EpisodeCard.css";

const EpisodeCard = ({ title, epiNum }) => {
  return (
    <div id="episode-card">
      <h5 className="title">{title}</h5>
      <p className="epiNum">{epiNum}</p>
    </div>
  );
};

export default EpisodeCard;
