import React from "react";
import "./EpisodeCard.css";

const EpisodeCard = ({ title, des, epiNum, img }) => {
  return (
    <div id="episode-card">
      <div className="first-div">
        <div className="image-container">
          <img className="img-fluid" src={img} alt="episode-cover" />
        </div>
        <div className="detail-container">
          <h5 className="epi-num">Eps {epiNum}</h5>
          <h3 className="epi-title">{title}</h3>
          <p className="epi-des">{des}</p>
        </div>
      </div>
      <div className="d-flex"></div>
    </div>
  );
};

export default EpisodeCard;
