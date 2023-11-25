import { useState } from 'react'
import heirloomLogo from '/Heirloomsmall.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.heirloomrecordlabel.com/" target="_blank">
          <img src={heirloomLogo} className="logo" alt="Heirloom logo" />
        </a>
      </div>
      <h1>Palm & Vine Recording</h1>
      <p className="subtitle">
        Regional and traditional music records worth passing down
      </p>
      <div className="card">
        <button className="landing-btn" onClick={() => setCount((count) => count + 1)}>
          Enter site ({count})
        </button>
      </div>
      <footer>
        © 2023 Palm & Vine Recording | Website created by Natural Strings
      </footer>
    </>
  )
}

export default App
