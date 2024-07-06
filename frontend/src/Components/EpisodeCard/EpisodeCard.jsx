import React from "react";
import "./EpisodeCard.css";
import useImagePrefix from "../Shared/useImagePrefix";

const EpisodeCard = ({ title, des, epiNum, img, tags, hosts, highlight }) => {
  const imagePrefix = useImagePrefix();
  return (
    <div
      style={{
        boxShadow: highlight ? "7px 7px 0px 0px #81ADC8" : "",
      }}
      id="episode-card"
    >
      <div className="first-div">
        <div className="image-container">
          <img className="img-fluid" src={img} alt="episode-cover" />
        </div>
        <div className="detail-container">
          <h5 className="epi-num">Eps {epiNum}</h5>
          <h3
            style={{ color: highlight ? "#CD4631" : "" }}
            className="epi-title"
          >
            {title}
          </h3>
          <p className="epi-des">{des}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between sec-div mt-3 pb-1">
        <div className="tags-container">
          {tags.map((tag, index) => (
            <span key={tag.id}>{tag.name}</span>
          ))}
        </div>
        <div className="hosts-container">
          <span className="pe-3">Hosted by: </span>
          {hosts.map((host, index) => (
            <img
              key={host.id}
              src={`${imagePrefix}${host.host_image}`}
              alt="host"
              style={{ marginLeft: "-10px", objectFit: "cover" }}
              className={`${host.id === 1 ? "img-style-1" : "img-style-2"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
