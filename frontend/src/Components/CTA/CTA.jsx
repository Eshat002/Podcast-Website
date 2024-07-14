import React from "react";
import "./CTA.css";
import AppImage1 from "../../Img/appImage1.png";
import AppImage2 from "../../Img/appImage2.png";
import Headline from "../Headline/Headline";
import SubHeadline from "../SubHeadline/SubHeadline";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import { SiGooglepodcasts } from "react-icons/si";
import { FaSpotify } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const CTA = () => {
  return (
    <div id="cta">
      {/* <div className="container-fluid"> */}
      <div className="row">
        <div className="col-lg-4 position-relative">
          <img className="cta-image-1" src={AppImage2} alt="download" />
        </div>
        <div className="col-lg-4 text-center">
          <span
            style={{
              fontWeight: 700,
              fontSize: "14px",
              color: "#CD4631",
              border: "1px solid #CD4631",
              padding: "5px 10px",
              borderRadius: "5px",
              display: "inline-block",
              marginTop: "110px",
              marginBottom: "10px",
            }}
          >
            BETA
          </span>

          <div className="headline-container px-3">
            <Headline
              Headline="Available now
              Pod of Cast App"
            />
          </div>
          <div
            style={{ marginBottom: "60px" }}
            className="sub-headline-container"
          >
            <SubHeadline SubHeadline="We just launched our podcast app!" />
          </div>
          <div className="button-container">
            <PrimaryBtn btnText="DOWNLOAD NOW" />
          </div>
          <div className="icon-container-parent mt-4">
            <p className="title">Content also available on:</p>
            <div className="icon-container d-flex justify-content-center gap-3">
              <SiGooglepodcasts fontSize={20} />
              <FaSpotify fontSize={20} />
              <FaYoutube fontSize={22} />
            </div>
          </div>
        </div>
        <div className="col-lg-4 position-relative">
          <img className="cta-image-2" src={AppImage1} alt="download" />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CTA;
