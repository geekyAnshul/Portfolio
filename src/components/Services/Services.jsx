
import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import AnshulNamdev from './AnshulNamdev.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome mb-10">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span className="margin mb-10 p-52">services</span>
        <div className="mb-10">
          I specialize in MERN stack full-stack development, creating scalable and visually appealing websites.
          <br />
          I enhance user experience with cool animations and good designs, <br /> ensuring your project is both functional and engaging
        </div>
        <a className="no-underline" href={AnshulNamdev} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            className="emoji"
            emoji="https://www.pngmart.com/files/23/Care-Emoji-PNG-HD-80x80.png"
            heading={"frontend"}
            detail={`HTML5,CSS,Javascript & TailwindCSS,ReactJs`}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji="https://cdn3.emoji.gg/emojis/5791-yjoobilove.png"
            heading={"Backend"}
            detail={"NodeJS,ExpressJS & MySQL,MongoDB"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji="https://emojipedia-us.s3.amazonaws.com/content/2021/02/20/coolguy_ios_802.png"
            heading={"Web Animations"}
            detail={"GSAP,Locomotive,Lennis and Framer Motion"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Services;
