import React from "react";
import "./PricingDetailCard.css";

const PricingDetailCard = ({ text1, text2, text3, text4, text5, tag }) => {
  return (
    <div
      style={{
        ...(tag && { background: "#F7EDE8", border: "2px solid #CD4631" }),
      }}
      id="pricing-detail-card"
    >
      <h5 className="title">What’s included:</h5>

      <ul>
        {" "}
        {text1 && <li className="feature fw-bold">{text1}</li>}
        <li className="feature">{text2}</li>
        <li className="feature">{text3}</li>
        <li className="feature">{text4}</li>
        <li className="feature">{text5}</li>
      </ul>
    </div>
  );
};

export default PricingDetailCard;
