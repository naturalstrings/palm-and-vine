// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import palmvinelogo from '/palmvinelogo-no-bg.png';
import IframeResizer from 'iframe-resizer-react';

export default function LandingPage() {
  return (
    <div className="landing">
      <section id="first-view">
        <div className="logo">
          <img src={palmvinelogo} alt="Palm and Vine Recording logo" />
        </div>
        <h1>Palm & Vine Recording</h1>
        {/* <h2>Regional and traditional recordings worth passing down</h2> */}
        <p className="subtitle">
          Regional and traditional music recordings worth passing down
        </p>
      </section>
      <section id="walking-tour">
        <h2>Studio Walking Tour</h2>
        <div id="tour-video">
          <IframeResizer
            log
            allowFullScreen={true}
            src="https://www.youtube-nocookie.com/embed/O88gVlkgG40"
          />
        </div>
      </section>

      {/* <button id="landing-btn">
        <NavLink to="/news">Enter site</NavLink>
      </button> */}
    </div>
  );
}
