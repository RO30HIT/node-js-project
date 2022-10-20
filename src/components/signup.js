
import React,{useState, useEffect} from "react";
import {Navigate, useNavigate} from "react-router-dom"



const Signup=()=>{
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPass]=useState("")
    
    const navigate=useNavigate()

    // useEffect(()=>{
        
    //         Navigate('/')
        
    // },[])

   
    const collectData=async ()=>{
        
        console.log(name,email,password)
        const result=await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        })
        const newResult=await result.json()
        localStorage.setItem("user",JSON.stringify(newResult))
       navigate("/")
    }
     
        
    
    return(<div className="register">
        <h1>Register</h1>
        <input className="inputBox" type="text" 
        placeholder="Enter Name" 
        value={name}
        onChange={(e)=>setName(e.target.value)}/>
         
        <input className="inputBox" type="text" 
        placeholder="Enter Email"
        value={email} onChange={(e)=>setEmail(e.target.value)} />
        
        <input className="inputBox" type="password" 
        placeholder="Enter Password"
        value={password} onChange={(e)=>setPass(e.target.value)} />
        
        <button className="signButton"
        onClick={collectData}
        >Signup
        
        </button>
    
    </div>)
}
export default Signup