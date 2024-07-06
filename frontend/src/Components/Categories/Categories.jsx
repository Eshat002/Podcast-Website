import React, { useEffect, useState } from "react";
import "./Categories.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useImagePrefix from "../Shared/useImagePrefix";
import useIsLocal from "../Shared/useIsLocal";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const isLocal = useIsLocal();
  const imagePrefix = useImagePrefix();

  useEffect(() => {
    const categoriesUrl = isLocal
      ? "http://127.0.0.1:8000/api/podcast/latest-categories/"
      : "http://renderdomain.com/api/podcast/latest-categories/";

    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await fetch(categoriesUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []); // Dependency array is empty since categoriesUrl and imagePrefixUrl are set once

  const breakpoints = {
    320: {
      slidesPerView: 2.2,
    },
    767: {
      slidesPerView: 3.7,
    },
    1024: {
      slidesPerView: 4.8,
    },
  };

  return (
    <div id="latest-categories">
      <Swiper
        spaceBetween={20}
        slidesPerView={4.8}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={breakpoints}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="x">
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src={`${imagePrefix}${category.image}`}
                alt="category-image"
              />
              <h2 className="category-name">{category.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
