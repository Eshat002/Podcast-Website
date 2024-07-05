import "./Episodes.css";
import Headline from "../Headline/Headline";
import SubHeadline from "../SubHeadline/SubHeadline";
import React, { useState, useEffect, useCallback } from "react";
import EpisodeCard from "../EpisodeCard/EpisodeCard";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/podcast/latest-episodes/"
        );
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        const data = await response.json();
        setEpisodes(data);
      } catch (error) {
        console.log("erro", error);
        setError("Failed to fetch episodes. Please try again later.");
      }
    };
    fetchEpisodes();
  }, []);

  return (
    <div className="episodes">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 text-center">
            <div className="headline-container">
              <Headline Headline="Recent Episodes" />
            </div>
            <div className="sub-headline-container">
              <SubHeadline SubHeadline="Available on your favorite platform" />
            </div>
            <div className="row">
              {episodes.map((episode, index) => (
                <div key={episode.id} className="col-lg-6">
                  <EpisodeCard title={episode.title} epiNum={episode.id} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
