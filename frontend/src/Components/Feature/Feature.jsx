import React from "react";
import "./Feature.css";
import Headline from "../Headline/Headline";
import SubHeadline from "../SubHeadline/SubHeadline";
import FeatureCard from "../FeatureCard/FeatureCard";
import Scribble from "../../Img/Scribble.png";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

const Feature = () => {
  return (
    <div className="mb-4" id="feature">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 text-center">
            <div className="headline-container">
              <Headline Headline="Membership benefits" />
            </div>
            <div className="sub-headline-container">
              <SubHeadline SubHeadline="Become our sponsor and get all benefits" />
            </div>
            <div className="row">
              <div className="col-lg-4">
                <FeatureCard
                  img={Scribble}
                  title="Topic by Request"
                  text="Lorem ipsum dolor sit amet consectet pis
                        cing elit, sed do eiusmod tempor."
                />
              </div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4"></div>
            </div>
            <div className="button-container">
              <PrimaryBtn btnText="SEE PRICING" />
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
