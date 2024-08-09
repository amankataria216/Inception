import React, { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

//Example of named export
export const Header =()=>{
    console.log("header rendered!!")
    const [loginState,setLoginState]=useState("Login")
     useEffect(()=>{console.log("useEffect called from header")},[loginState])
     const onlineStatus = useOnlineStatus();
    return(
        <div className="flex justify-between bg-orange-100 shadow-lg mb-4">
            <div className="logo-container">
                <img className="w-20" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex m-4 p-4">

                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/instamart">Grocery</Link></li>
                    <li className="px-4">Online Staus {onlineStatus? "online":"offline"}</li>
                    <li className="px-4">Cart</li>
                    
                    <button className="btn-login" onClick={()=>{
                        loginState==="Login"?setLoginState("Logout"):setLoginState("Login")
                    }}>
                        {loginState}</button>
                    

                </ul>
            </div>
        </div>
    )
}

export default Header;