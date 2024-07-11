import React from "react";
import "./Pricing.css";
import Headline from "../Headline/Headline";
import SubHeadline from "../SubHeadline/SubHeadline";
import PricingCard from "../PricingCard/PricingCard";
import PricingDetailCard from "../PricingDetailCard/PricingDetailCard";

const Pricing = () => {
  return (
    <div id="pricing">
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="headline-container">
              <Headline Headline="Become our sponsor" />
            </div>
            <div
              style={{ marginBottom: "79px" }}
              className="sub-headline-container text-center"
            >
              <SubHeadline SubHeadline="Get exclusive episodes, merch and more" />
            </div>
            <div className="row">
              <div className="col-lg-4 member-col">
                <div className="pricing-card-container">
                  <PricingCard title="Member" price={9.99} />
                </div>
                <div className="pricing-detail-container mt-4 mb-4">
                  <PricingDetailCard
                    text2="Exclusive Content"
                    text3="5% Discount on Merch"
                    text4="Join the Community"
                    text5="Livestreaming Access"
                  />
                </div>
              </div>
              <div className="col-lg-4 family-col">
                <div className="pricing-card-container">
                  <PricingCard
                    title="Family"
                    price={14.99}
                    tag="MOST POPULAR"
                  />
                </div>
                <div className="pricing-detail-container mt-4 mb-4">
                  <PricingDetailCard
                    text1="Everything in Tier 1"
                    text2="Exclusive Content"
                    text3="5% Discount on Merch"
                    text4="Join the Community"
                    text5="Livestreaming Access"
                    tag="MOST POPULAR"
                  />
                </div>
              </div>
              <div className="col-lg-4 official-col">
                <div className="pricing-card-container">
                  <PricingCard title="Official" price={29.99} />
                </div>
                <div className="pricing-detail-container mt-4 mb-4">
                  <PricingDetailCard
                    text1="Everything in Tier 2"
                    text2="Exclusive Content"
                    text3="5% Discount on Merch"
                    text4="Join the Community"
                    text5="Livestreaming Access"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
