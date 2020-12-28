import React from "react";

import "./Preloader.css";

const Preloader = () => {
  return (
    <>
      <div id="loop" class="center"></div>
      <div id="bike-wrapper" class="center">
        <div id="bike" class="centerBike"></div>
      </div>
    </>
  );
};

export default Preloader;
