import React from "react";

import "./Preloader.css";

const Preloader = ({ children, loader }) => {
  if (loader) {
    return (
      <>
        <div id="loop" className="center"></div>
        <div id="bike-wrapper" className="center">
          <div id="bike" className="centerBike"></div>
        </div>
      </>
    );
  }

  return children;
};

export default Preloader;
