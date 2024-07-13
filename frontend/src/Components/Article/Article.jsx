import "./Article.css";
import Headline from "../Headline/Headline";
import SubHeadline from "../SubHeadline/SubHeadline";
import React, { useEffect, useState } from "react";
import useIsLocal from "../Shared/useIsLocal";
import ArticleCard from "../ArticleCard/ArticleCard";
import useImagePrefix from "../Shared/useImagePrefix";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

const Article = () => {
  const isLocal = useIsLocal();
  const ImagePrefix = useImagePrefix();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const ArticleUrl = isLocal
      ? "http://127.0.0.1:8000/api/articles/latest-articles/"
      : "http://renderdomain.com/api/articles/latest-articles/";

    const fetchArticles = async () => {
      try {
        const response = await fetch(ArticleUrl);
        if (!response.ok) {
          throw new Error("The response was not ok.");
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div id="article">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="headline-container">
              <Headline Headline="Article and News" />
            </div>
            <div
              style={{ marginBottom: "60px" }}
              className="sub-headline-container text-center"
            >
              <SubHeadline SubHeadline="News, tips, tricks and more" />
            </div>
            <div className="row">
              {articles.map((article, index) => (
                <div key={article.id} className="col-lg-6 col-md-6">
                  <ArticleCard
                    category={article.category.name}
                    title={article.title}
                    content={article.content}
                    tags={article.tags}
                    date={article.timestamp}
                    img={`${ImagePrefix}${article.image}`}
                  />
                </div>
              ))}
            </div>
            <div
              style={{ marginTop: "70px" }}
              className="button-container text-center"
            >
              <PrimaryBtn btnText="BROWSE ALL" />
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Article;
