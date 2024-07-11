import "./Style.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header1">
          <img src="\images\Screenshot_669 1.png" />
          <h2>Discover the Best Food and Drinks</h2>
          <p>
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <button title="Explore Now!" />
        </div>
        <div className="header2">
          <img src="\images\group 289.png" alt="Pizza Image" />
          <img
            src="\images\Vector 1.png"
            alt="Vector Image"
            className="vector"
          />
          <button title="Get In Touch"></button>
        </div>
      </div>
      <div className="aboutUs">
        <div>
          <img
            src="\images\a1ef27ac038072c6f30264ab0d7bc72d.png"
            alt="About Us"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
