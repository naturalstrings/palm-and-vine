export default function Login() {
    return(
        <div>
            <h2 style={{marginRight:200,fontFamily:'Playfair Display',color:"grey"}}>Log In</h2>
            <div style={{
            width: "300px",
            height: "400px",
            border: "1px solid #ddd",
            boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)"}}>
            
                <p style={{marginTop:30}}>Username/email address</p>
                <div style={{
                width: "250px",
                height: "50px",
                border: "3px solid #ddd",
                marginTop:"10px",
                marginLeft:"20px"}}>
                </div> 

                <p style={{marginTop:30}}>Password</p>
                <div style={{
                width: "250px",
                height: "50px",
                border: "3px solid #ddd",
                marginTop:"10px",
                marginLeft:"20px"}}>
                </div> 

                
                <label style={{marginTop:20}}>
                <input type="checkbox" />
                Remember Me
                </label>

                
                <div style={{
                width: "150px",
                height: "50px",
                background: "grey",
                marginLeft:70}}>
                <p style={{fontSize:20}}>Login</p>
                </div> 

                <i>Forgot Password?</i>
                
                
            
            
            
            
            </div> 
        </div>
    )
}