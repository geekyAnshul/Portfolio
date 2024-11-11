import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Project1 from "../img/Project1.png"
import Project2 from "../img/Project2.png"
import Project3 from "../img/Project3.png"
import Project4 from "../img/Project4.png"

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Top Stack</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Project1} alt="" /> 
        </SwiperSlide>
        <SwiperSlide>
        <img src={Project3} alt="" /> 
          
        </SwiperSlide>
        <SwiperSlide>
        <img src={Project4} alt="" /> 
        </SwiperSlide>
        <SwiperSlide>
        <img src={Project2} alt="" /> 
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;