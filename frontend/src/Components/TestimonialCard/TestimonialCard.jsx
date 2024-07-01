import React from "react";
import "./TestimonialCard.css";
import Inverted from "../SVG/Inverted/Inverted";
import { BiSolidQuoteLeft } from "react-icons/bi";

const TestimonialCard = ({ text, author, platform, icon, avatar }) => {
  return (
    <div id="testimonial-card">
      <BiSolidQuoteLeft color="#CD4631" size={35} />
      <p className="text-start Text">{text}</p>
      <div className="author-container">
        <div className="img-container">
          <img
            style={{ width: "30px", height: "30px", objectFit: "cover" }}
            src={avatar}
            alt="avatar"
          />
        </div>
        <div>
          {" "}
          <p>{author}</p>
        </div>

        <div className="image-container">
          <img src={icon} alt="icon" />
        </div>
        <div>
          <p>{platform}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
