import { NavLink } from 'react-router-dom';
export default function Contact() {
    return (
        <div style={{marginBottom:70}}>
            <h1 className="posts-titles" style={{marginRight:300}}>Contact Us </h1>
            <p className="post-subtitles" style={{marginLeft: 300,marginRight: 300}}>
            For general questions and inquiries please email <br/> 
            <NavLink to='/welcome' style={{textDecoration:"underline"}}>heirloomrecordlabel@gmail.com</NavLink> <br/>
            for ongoing updates…
            </p>
            <h2 className="posts-titles" >Sign The Mailing List</h2>
            
            <div >
                <p className="post-subtitles"   style={{float:"left", marginLeft:400}}>First Name</p>
                <div style={{
                width: "250px",
                height: "50px",
                border: "3px solid #ddd",
                marginTop:"10px",
                marginLeft:510,
                marginRight:300}}>
                </div> 
            </div>
            <div style={{marginTop:30}}>
                <p className="post-subtitles"   style={{float:"left", marginLeft:400}}>Last Name</p>
                <div style={{
                width: "250px",
                height: "50px",
                border: "3px solid #ddd",
                marginTop:"10px",
                marginLeft:510,
                marginRight:300}}>
                </div>
            </div> 
            <div style={{marginTop:30}}>
                <p className="post-subtitles"   style={{float:"left", marginLeft:360}}>Email Address</p>
                <div style={{
                width: "250px",
                height: "50px",
                border: "3px solid #ddd",
                marginTop:"10px",
                marginLeft:510,
                marginRight:300}}>
                </div> 
            </div>
            <button style={{borderRadius:5,backgroundColor:"#D3D3D3", marginTop: 20, marginLeft:170}}>Sign Up</button>
            


            
            

        
        
        
        </div>
    )
}