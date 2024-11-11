import React, { useContext } from "react";
import "./Works.css";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            My TechStack
          </span>
          <span>Frontend & Backend</span>
          <spane>
          I use a full-stack tech stack including HTML, CSS, JavaScript, and React.js 
            <br />
            for building dynamic frontends, styled with Tailwind CSS.
           
            <br />
            On the backend, I work with Node.js, Express.js, and MongoDB 
            <br />
            to handle server logic and data management efficiently.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
             <img src="https://th.bing.com/th/id/R.cd7bb6bec60f6799aa174b4e07b92ea4?rik=BHSaQZLldSrFEg&riu=http%3a%2f%2fpewlehh.com%2fimages%2freact.png&ehk=YveCdhSmivB2dp1byBMJFp7rWw3vDbrzY%2bp2FBLI3Zs%3d&risl=&pid=ImgRaw&r=0" alt="" /> 
          </div>
          <div className="w-secCircle">
             <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-9294859-7578002.png" alt="" /> 
          </div>
          <div className="w-secCircle">
             <img src="https://th.bing.com/th/id/R.2097265383dc3743c43e4c74eb68c91d?rik=bOyvplyrviRdQQ&riu=http%3a%2f%2fpasco.dev%2flanding%2fimages%2fjs-logo.png&ehk=d2dZhtuVlees6GlncfNRv1v2U5Efcf5eCDyb4HPamys%3d&risl=&pid=ImgRaw&r=0" alt="" /> 
          </div>{" "}
          <div className="w-secCircle">
             <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2152454423/settings_images/F1USRDEYRxObo2cGd3kZ_expressjs-logo.png" alt="" /> 
          </div>
          <div className="w-secCircle">
            <img src="https://logodix.com/logo/2090046.png" alt="" /> 
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;