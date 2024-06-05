import gearpic from "/gearpic.png"
import data from "../gear.json"

export default function Gear() {
    return (
      <>
        <div className="gear-wrap">
          <h1>Gear</h1>
          <hr></hr>
            <div className="gear-main">
                    <img src={gearpic} alt="music gear"></img>
                    
                    <h2>Our Gear</h2>
                    <ul>
                    <h4>Console</h4>
                    {data.console.map( (item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                    <h4>Microphones</h4>
                    {data.microphones.map( (item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                    <h4>Outboard Preamps</h4>
                    {data.outboardPreamps.map( (item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                    </ul>
                    
                    
            </div>
        </div>
      </>
    );
  }
  