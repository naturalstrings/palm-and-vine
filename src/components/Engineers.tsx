import EngineerFromDB from "./EngineerFromDB";

export default function Engineers() {
    return (
      
        <div id="engineers-container">
            <video autoPlay loop muted >
              <source  src="/recordPlayer.mp4" />
            </video> 
           
            <div className="engineers-content">
                <h1>Engineers</h1>
                <EngineerFromDB/>
            </div>
        </div>
      );
  }
  