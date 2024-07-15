import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import GoogleImage from "../../Img/googlepod.png";
import YTImage from "../../Img/yt.png";
import spotifyImage from "../../Img/spotify.png";
import gPlay from "../../Img/google_play.png";
import aStore from "../../Img/app_store.png";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container-fluid">
        <div className="footer-section-1">
          <div className="row">
            <div className="col-lg-4 first-col">
              <div className="logo-container">
                <img style={{ cursor: "pointer" }} src="/logo.png" alt="logo" />
              </div>
              <div className="text-container">
                <p>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit.
                </p>
              </div>
              <div className="social-container">
                <Link to="">
                  <FaTwitter size={20} color="#CD4631" />
                </Link>
                <Link to="">
                  <FaInstagram size={20} color="#000000" />
                </Link>
                <Link to="">
                  <FaTiktok size={20} color="#000000" />
                </Link>
              </div>
            </div>
            <div className="col-lg-2">
              <ul>
                <li>
                  <Link to="">About</Link>
                </li>
                <li>
                  <Link style={{ color: "#CD4631" }} to="">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="">Features</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <ul>
                <li>
                  <Link style={{ color: "#CD4631" }} to="">
                    Episodes
                  </Link>
                </li>
                <li>
                  <Link to="">Pricing</Link>
                </li>
                <li>
                  <Link to="">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 last-col">
              <div className="platform-container">
                <p>Listen to episodes on your fav platform:</p>

                <img className="me-3 mt-2" src={GoogleImage} alt="gpod" />
                <img className="me-3 mt-2" src={spotifyImage} alt="spotify" />
                <img className="me-3 mt-2" src={YTImage} alt="yt" />
              </div>
              <div className="store-container">
                <p>App available on:</p>
                <Link className="me-3" to="">
                  <img
                    style={{ width: "30px" }}
                    src={gPlay}
                    alt="google-play"
                  />
                </Link>
                <Link to="">
                  <img style={{ width: "30px" }} src={aStore} alt="app-store" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section-2">
          <div className="row">
            <div className="col-lg-4">
              <p>
                {" "}
                ©{currentYear} All Rights Reserved.
                <span style={{ color: "#CD4631" }}> Pod of Cast</span>
              </p>
            </div>
            <div className="col-lg-6"></div>
            <div className="col-lg-2">
              <Link to="">Terms</Link>. <Link to="">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
