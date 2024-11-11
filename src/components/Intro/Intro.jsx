import React, { useContext } from "react";
import "./Intro.css";

 import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Anshul Namdev</span>
          <span>
          Full Stack MERN Developer with a robust skill set in web design and development.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
           <a href="https://github.com/geekyAnshul"><img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-jaune-150x150.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/anshulnamdev45"><img src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-jaune-150x150.png" alt="" /></a>
          <img src="https://s3.us-east-1.amazonaws.com/contents.newzenler.com/35234/library/464ddeb43b6eb5_md.png" alt="" />  
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector1} alt="" />*/}
       {/* <img src={Vector2} alt="" />*/}
        <img className="boyimg" src="https://o3mdm.com/wp-content/uploads/2022/12/o3m-design-new.png" alt="" /> 
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          className="emoji"
           src="https://hypebuddy.in/static/media/glassesimoji.a08bdab12e8eb56a6874.png"
          alt=""
        />

        <motion.div 
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv className="chhota" img="https://th.bing.com/th/id/OIP.QDCqjf6JfhadM5U3mhJYpQAAAA?rs=1&pid=ImgDetMain"  text1="Web" text2="Developer" />  {/* */}
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
           <FloatinDiv img="https://upload.afkmobi.com/photos/afkmobi-com/2023/07/Battle_King_Pixel_Arena.png"  text1="Best Design" text2="Award" />{/* */}
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;