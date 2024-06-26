import gearpic from '/gearpic.png';
//import data from "../gear.json"
import GearFromDB from './GearFromDB';

export default function Gear() {
  return (
    <>
      <div className="gear-wrap">
        <h1>Gear</h1>
        <hr></hr>
        <div className="gear-main">
          <img src={gearpic} alt="music gear"></img>

          <h2>Our Gear</h2>
          <GearFromDB />
        </div>
      </div>
    </>
  );
}
