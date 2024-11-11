// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { ThemeProvider } from "./Context"; // Import your ThemeProvider

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <ThemeProvider> {/* Wrap your App with ThemeProvider */}
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./Context"; // Assuming your context is in Context.js

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
