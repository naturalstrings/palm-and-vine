// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import palmvinelogo from '/palmvinelogo-no-bg.png';

export default function LandingPage() {
  return (
    <>
      <div>
        <a
          href="https://www.heirloomrecordlabel.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={palmvinelogo} className="logo" alt="Heirloom logo" />
        </a>
      </div>
      <h1>Palm & Vine Recording</h1>
      <p className="subtitle">
        Regional and traditional music records worth passing down
      </p>
      <div className="card">
        <NavLink to="welcome">
          <button className="landing-btn">Enter site</button>
        </NavLink>
      </div>
    </>
  );
}
