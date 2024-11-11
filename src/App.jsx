// import Navbar from "./components/Navbar/Navbar";
// import Intro from "./components/Intro/Intro";
// import Services from "./components/Services/Services";
// import "./App.css";
// import Experience from "./components/Experience/Experience";
// import Works from "./components/Works/Works";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonial from "./components/Testimonials/Testimonial";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
// import { useContext } from "react";
// import { themeContext } from "./Context";
// import { useState } from "react";
// function App() {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   return (
//     <div
//       className="App"
//       style={{
//         background: darkMode ? "black" : "",
//         color: darkMode ? "white" : "",
//       }}
//     >
//       <Navbar />
//       <Intro />
//       <Services />
//       <Experience />
//       <Works />
//       <Portfolio />
//       <Testimonial />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context"; // Import the theme context

function App() {
  const theme = useContext(themeContext);  // Access theme context
  const darkMode = theme.state.darkMode;   // Access darkMode from the context

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",   // Dynamic background color
        color: darkMode ? "white" : "",        // Dynamic text color
      }}
    >
      {/* Render Components */}
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

