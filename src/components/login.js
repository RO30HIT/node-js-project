
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    
    const navigate=useNavigate()
    const auth=localStorage.getItem('user')
    useEffect(()=>{
        if (auth){
            navigate("/")
        }
    })

    const handleLogin=async()=>{
        
        const login=await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const newLogin=await login.json()
        if (newLogin){
            const result=localStorage.setItem('user',JSON.stringify(newLogin)) 
            navigate("/")
             
        } 
}
   
    return (
        <div className="login">
         <h1>Login</h1>
         <input type="email" className="inputBox" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
         <input type="password" className="inputBox" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
         <button type="button" className="signButton" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;