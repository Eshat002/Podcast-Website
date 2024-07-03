import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import Inverted from "../SVG/Inverted/Inverted";
import Avatar from "../../Img/avatar.png";
import Avatar2 from "../../Img/avatar2.png";
import SpotifyIcon from "../../Img/spotify-icon.png";
import GPodImage from "../../Img/gPod.png";
import Headline from "../Headline/Headline";
import SubHeadline from "../SubHeadline/SubHeadline";
import SparkeImage from "../../Img/Sparkle.png";

const Testimonial = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };

  return (
    <div className="mb-5" id="testimonial">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10  text-center position-relative">
            <img className="sparkle" src={SparkeImage} alt="sparkle" />
            <div className="headline-container">
              <Headline Headline="What our listeners say" />
            </div>
            <div className="sub-headline-container mb-5">
              <SubHeadline SubHeadline="Their experience throughout every platform" />
            </div>
            {/* <h3 className=" ">What our listeners say</h3>
            <h5 className=" ">Their experience throughout every platform</h5> */}
            <div className="testimonial-card-container">
              <Swiper
                spaceBetween={20}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={breakpoints}
              >
                <SwiperSlide>
                  <TestimonialCard
                    text="Lorem ipsum dolor sit amet consectet 
                    piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. "
                    author="Luna lovegood"
                    platform="spotify"
                    icon={SpotifyIcon}
                    avatar={Avatar}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard
                    text="Lorem ipsum dolor sit amet consectet 
                    piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. "
                    author="Emily Blunt,"
                    platform="Google Podcast"
                    icon={GPodImage}
                    avatar={Avatar2}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard
                    text="Lorem ipsum dolor sit amet consectet 
                    piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. "
                    author="Luna lovegood"
                    platform="spotify"
                    icon={SpotifyIcon}
                    avatar={Avatar}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
