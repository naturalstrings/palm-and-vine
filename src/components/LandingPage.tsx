import { useState } from 'react';
import palmvinelogo from '/palmvinelogo-no-bg.png';

export default function LandingPage() {
  const [count, setCount] = useState(1);

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
        <button
          className="landing-btn"
          onClick={() => setCount((count) => count * 2)}
        >
          Enter site ({count})
        </button>
      </div>
    </>
  );
}
