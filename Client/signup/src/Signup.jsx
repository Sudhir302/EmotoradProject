import { useState } from "react";
import "./Signup.css";

function Signup(){
    let [userDetail, setUserDetail] = useState({
        email: "",
        password: "",
    })

    let updateDetail = (event)=>{
        setUserDetail((currData)=>{
            return{...currData,[event.target.name] : event.target.value}
        })
        console.log(userDetail)
    }


    let handleDefault = (event)=>{
        event.preventDefault();
        setUserDetail({
            email: "",
            password: "",
        })
    }
    return(
        <div id= "container" >
            <h3>Sign in</h3>
            <p>Sign in to your account</p>
            <form onSubmit={handleDefault} >
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" placeholder="Enter Email" required value={userDetail.email} onChange={updateDetail} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your password" required value={userDetail.password} onChange={updateDetail} />
                <a href="forgot">Forgot password?</a>
                <button type="submit">Sign In</button>
            </form>
            <p>Don't have account? <a href="register">Register here</a></p>
        </div>
    )
}

export default Signup;