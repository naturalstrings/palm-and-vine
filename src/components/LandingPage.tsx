// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import palmvinelogo from '/palmvinelogo-no-bg.png';

export default function LandingPage() {
  return (
    <div className="landing">
      <div className="logo">
        {/* <a
          href="https://www.heirloomrecordlabel.com/"
          target="_blank"
          rel="noreferrer"
        > */}
        <img src={palmvinelogo} alt="Palm and Vine Recording logo" />
        {/* </a> */}
      </div>
      <h1>Palm & Vine Recording</h1>
      <p className="subtitle">
        Regional and traditional music recordings worth passing down
      </p>
      {/* <div id="landing-btn"> */}
      <button id="landing-btn">
        <NavLink to="/news">Enter site</NavLink>
      </button>
      {/* </div> */}
    </div>
  );
}
