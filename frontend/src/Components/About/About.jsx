import React from "react";
import "./About.css";
import Qoute from "../Quote/Qoute";
import ThoughtImage from "../../Img/thoughts.png";
import BulbImage from "../../Img/bulb.png";
import CurveRedImage from "../../Img/curveRed.png";
import CurveBlackImage from "../../Img/curveBlack.png";

const About = () => {
  return (
    <div id="about">
      <div className="container-fluid about-container-fluid">
        <div className="row justify-content-center position-relative">
          <img
            style={{
              width: "120px",
              height: "120px",
              position: "absolute",
              top: "-60px",
            }}
            src={CurveRedImage}
            alt="curve-red"
          />
        </div>
        <div className="headline-container row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <h2 className="headline">
              Talk. Listen. Get inspired by every minute of it.
            </h2>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="row text-center main-image-container">
          <div className="col-lg-6">
            <img src={ThoughtImage} alt="thought" />
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.{" "}
            </p>
          </div>
          <div className="col-lg-6">
            <img src={BulbImage} alt="about-image" />
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.{" "}
            </p>
          </div>
        </div>
        <div className="quote-container">
          <Qoute />
        </div>
        <div className="row justify-content-center position-relative">
          <img
            style={{
              width: "120px",
              height: "120px",
              position: "absolute",
              bottom: "-160px",
            }}
            src={CurveBlackImage}
            alt="curve-black"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
