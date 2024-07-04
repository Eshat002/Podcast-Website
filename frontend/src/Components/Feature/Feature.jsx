import React from "react";
import "./Feature.css";
import Headline from "../Headline/Headline";
import SubHeadline from "../SubHeadline/SubHeadline";
import FeatureCard from "../FeatureCard/FeatureCard";
import Scribble from "../../Img/Scribble.png";
import ShinningStar from "../../Img/ShiningStars.png";
import Smiley from "../../Img/smiley.png";
import Face from "../../Img/face.png";
import Fire from "../../Img/Fire.png";
import Star from "../../Img/Star.png";
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
            <div className="row child-row-1">
              <div className="col-lg-4 mb-4">
                <FeatureCard
                  img={Scribble}
                  title="Topic by Request"
                  text="Lorem ipsum dolor sit amet consectet pis
                        cing elit, sed do eiusmod tempor."
                />
              </div>
              <div className="col-lg-4 mb-4">
                <FeatureCard
                  img={ShinningStar}
                  title="Exclusive Content"
                  text="Lorem ipsum dolor sit amet consectet pis
                        cing elit, sed do eiusmod tempor."
                />
              </div>
              <div className="col-lg-4">
                <FeatureCard
                  img={Smiley}
                  title="Join the Community"
                  text="Lorem ipsum dolor sit amet consectet pis
                        cing elit, sed do eiusmod tempor."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <FeatureCard
                  img={Face}
                  title="Livestreaming Access"
                  text="Lorem ipsum dolor sit amet consectet pis
                        cing elit, sed do eiusmod tempor."
                />
              </div>
              <div className="col-lg-4 mb-4">
                <FeatureCard
                  img={Fire}
                  title="Exclusive Episodes & Merch"
                  text="Lorem ipsum dolor sit amet consectet pis
                        cing elit, sed do eiusmod tempor."
                />
              </div>
              <div className="col-lg-4">
                <FeatureCard
                  img={Star}
                  title="And much more!"
                  text="Lorem ipsum dolor sit amet consectet pis
                        cing elit, sed do eiusmod tempor."
                />
              </div>
            </div>
            <div style={{ marginTop: "60px" }} className="button-container">
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
