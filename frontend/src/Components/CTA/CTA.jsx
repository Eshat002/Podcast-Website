import React from "react";
import "./CTA.css";
import AppImage1 from "../../Img/appImage1.png";
import AppImage2 from "../../Img/appImage2.png";

const CTA = () => {
  return (
    <div id="cta">
      {/* <div className="container-fluid"> */}
      <div className="row">
        <div className="col-lg-4 position-relative">
          <img className="cta-image-1" src={AppImage2} alt="download" />
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4 position-relative">
          <img className="cta-image-2" src={AppImage1} alt="download" />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CTA;
