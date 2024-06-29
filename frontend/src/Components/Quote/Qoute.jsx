import React from "react";
import "./Qoute.css";
import Inverted from "../SVG/Inverted";
import Avatar from "../../Img/avatar.png";
import SpotifyIcon from "../../Img/spotify-icon.png";
import StarBlackImage from "../../Img/StarBlack.png";
import SpringImage from "../../Img/spring.png";

const Qoute = () => {
  return (
    <div id="qoute">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 position-relative">
            <img src={SpringImage} alt="spring" className="spring-red" />
          </div>
          <div className="col-lg-8 text-center">
            <div className="symbol-container">
              <Inverted />
            </div>
            <div className="headline-container">
              <h3>
                One of the best daily podcasts that covers every topic on
                Spotify.
              </h3>
            </div>
            <div className="author-container">
              <div className="img-container">
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={Avatar}
                  alt="avatar"
                />
              </div>
              <div>
                {" "}
                <p>John Smith,</p>
              </div>

              <div className="image-container">
                <img src={SpotifyIcon} alt="spotify-icon" />
              </div>
              <div>
                <p>Social Community Manager</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 position-relative">
            <img className="star-black" src={StarBlackImage} alt="star-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qoute;
