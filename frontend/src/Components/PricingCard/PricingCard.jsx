import React from "react";
import "./PricingCard.css";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

const PricingCard = ({ title, price, tag }) => {
  return (
    <div
      style={{
        ...(tag && { border: "2px solid #CD4631", backgroundColor: "#F7EDE8" }),
      }}
      id="pricing-card"
    >
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="title">{title}</h3>
        {tag && <h5 className="tag">{tag}</h5>}
      </div>
      <p className="text">
        Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.
      </p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="button-container">
          <PrimaryBtn btnText="SUBSCRIBE" />
        </div>
        <div className="price-container">
          <h5>${price}</h5>
          <span>/month</span>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
