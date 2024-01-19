export default function Sidebar() {
  return (
    <div className="sidebar">

      
      <h1>Contact Us </h1>
            <p className="post-subtitles" style={{marginTop:20}}>
            For general questions & inquiries <br/>
            please email: <br/> 
            </p>
            <p style={{textDecoration:"underline"}}>heirloomrecordlabel@gmail.com</p>
            <p className="post-subtitles"  style={{marginTop:20}}> for ongoing updates… </p>
            
            <h2 style={{marginBottom:10}}>Sign The Mailing List</h2>
            
            <div >
                <p className="post-subtitles">First Name</p>
                  <div style={{
                  width: "250px",
                  height: "50px",
                  border: "3px solid darkgrey",
                  marginTop:"10px",
                  margin:"auto"
                  }}>
                  </div> 
            </div>
            <div style={{marginTop:30}}>
                <p className="post-subtitles">Last Name</p>
                  <div style={{
                  width: "250px",
                  height: "50px",
                  border: "3px solid darkgrey",
                  marginTop:"10px",
                  margin:"auto"
                  }}>
                  </div>
            </div> 
            <div style={{marginTop:30}}>
                <p className="post-subtitles">Email Address</p>
                  <div style={{
                  width: "250px",
                  height: "50px",
                  border: "3px solid darkgrey",
                  marginTop:"10px",
                  margin:"auto",
                  

                  }}>
                  </div> 
            </div>
            <button style={{borderRadius:5,backgroundColor: "darkgray", marginInline:"auto", marginTop:20}}>Sign Up</button>
            <div>
              <p className="covid">
                Heirloom 2020 Covid-19 <br/>Relief Project! <br/><br/>
              <p/>
              <p className="covid-blurb" />
As a response to the unprecedented crisis facing local musicians, this site aims to raise money for artists while sharing memorable events with a community separated by the necessity of social distancing . <br/><br/>

THE ARTISTS CONTRIBUTING TO THIS PROJECT CONSENT TO THE USE OF INDIVIDUAL LIVE RECORDINGS SHARED HERE, AND ARE NOT REPRESENTED OR CONTRACTED IN ANY CAPACITY BY HEIRLOOM RECORDS OUTSIDE THE SCOPE OF THIS PROJECT. <br/><br/> All the profits of this project are split evenly amongst the contributing artists.

More info about official releases outside the immediate effort for this crisis will be made available as time goes forward.</p>
            <p/>
            </div>

      
    </div>
    
  );
}
