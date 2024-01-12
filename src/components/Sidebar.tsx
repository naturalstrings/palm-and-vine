export default function Sidebar() {
  return (
    <div className="sidebar">
      
      <h1>Contact Us </h1>
            <p className="post-subtitles" style={{margin:"10px"}}>
            For general questions and inquiries please email <br/> 
            <p style={{textDecoration:"underline"}}>heirloomrecordlabel@gmail.com</p> <br/>
            for ongoing updates…
            </p>
            <h2>Sign The Mailing List</h2>
            
            <div >
                <p className="post-subtitles">First Name</p>
                <div style={{
                width: "250px",
                height: "50px",
                border: "3px solid #ddd",
                marginTop:"10px",
                }}>
                </div> 
            </div>
            <div style={{marginTop:30}}>
                <p className="post-subtitles">Last Name</p>
                <div style={{
                width: "250px",
                height: "50px",
                border: "3px solid #ddd",
                marginTop:"10px",
                }}>
                </div>
            </div> 
            <div style={{marginTop:30}}>
                <p className="post-subtitles">Email Address</p>
                <div style={{
                width: "250px",
                height: "50px",
                border: "3px solid #ddd",
                marginTop:"10px",
                }}>
                </div> 
            </div>
            <button style={{borderRadius:5,backgroundColor:"#D3D3D3", marginTop: 20, marginLeft:170}}>Sign Up</button>
            

      <p>An extra little tidbit to add more to the sidebar.</p>
    </div>
  );
}
