import historypic from "/historypic.png"

export default function History() {
    return (
      <>
        <div className="history-wrap">
          <h1>History</h1>
          <hr></hr>
          <div className="history-main">
                <img src={historypic} alt="recording studio"></img>
                
                <h2>Our History</h2>
                
                <p>
                
                    Welcome! While Heirloom acts as traditional Record Label, this website
                    is devoted to sharing live recordings of Regional and Traditional music
                    as a response to the 2020 Covid-19 crisis that has left many artists out
                    of work. Many of the recordings here are not available anywhere else and
                    all are shared with written consent from each artists. The early
                    incarnation focuses on the Cajun/Creole/Zydeco community and artists
                    touring over many years through Ashkenaz Music and Dance Community
                    Center in Berkeley California. A portion of the proceeds of this site
                    also go to Ashkenaz while they are closed during this crisis.
                </p>
          </div>
        </div>
      </>
    );
  }
  