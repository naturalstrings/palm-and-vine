import engineerpic1 from "/engineerpic1.png"
import engineerpic2 from "/engineerpic2.png"
//import engineerpic3 from "/engineerpic3.png"

export default function Engineers() {
    return (
      
        <div id="engineers-container">
            
            
            <video autoPlay loop muted >
              <source  src="/recordPlayer.mp4" />
            </video> 
            
            <div className="engineers-content">
            <h1>Engineers</h1>
            
                    
                    <div className="engineer-item">
                            <h2>Gabrial Winter <hr/></h2>
                            
                            <img src={engineerpic1}></img>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                culpa qui officia deserunt mollit anim id est laborum,Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r
                                eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                    </div>
                    <div className="engineer-item">
                            <h2>Max Lopez <hr/></h2>
                            
                            <img src={engineerpic2}></img>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                culpa qui officia deserunt mollit anim id est laborum,Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r
                                eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                    </div>
                    {/* <div className="engineer-item">
                            <h2>Peva <hr/></h2>
                            
                            <img src={engineerpic3}></img>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                culpa qui officia deserunt mollit anim id est laborum,Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r
                                eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                    </div> */}
            </div>
              
        </div>
      
    );
  }
  