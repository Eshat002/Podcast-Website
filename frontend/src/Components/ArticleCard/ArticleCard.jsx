import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({ title, content, date, tags, category, img }) => {
  console.log(category);
  return (
    <div id="article-card">
      <div className="image-container">
        <img
          src={img}
          style={{ width: "100%", objectFit: "cover" }}
          alt="article-card"
        />
      </div>
      <div className="detail-container">
        <h5 className="category">{category}</h5>
        <h2 className="title">{title}</h2>
        <p className="content">{content}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="tags-container">
            {tags.map((tag, index) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
          <div className="date-container">
            <span className="date">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
