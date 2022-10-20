import React,{useEffect, useState} from "react";
import {  useParams,useNavigate } from "react-router-dom";

const Update=()=>{
    const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const[company,setCompany]=useState("")
    const[category,setCategory]=useState("")
    const params=useParams()
    const navigate=useNavigate()

   useEffect(()=>{
    changeProduct()
   },[])
   
   const changeProduct=async()=>{
    // console.log(params)
     const update=await fetch(`http://localhost:5000/product/${params.id}`)
     const newUpdate=await update.json()
     setName(newUpdate.name)
     setPrice(newUpdate.price)
     setCompany(newUpdate.company)
     setCategory(newUpdate.category)
   }

   const updateProduct=async()=>{
     console.log(name,price,company,category)
      let changes=await fetch(`http://localhost:5000/product/${params.id}`,{
        method:'Put',
        body:JSON.stringify({name,price,company,category}),
        headers:{
         "Content-Type":"application/json"
        }
     })
    changes=await changes.json()
    console.log(changes)
    navigate("/")
   }
 
    
   return(
    <div>
        
        <h1>Update Product</h1>
        
        <input  type="text" value={name} className="inputBox" placeholder="Enter Product name" onChange={(e)=>setName(e.target.value)}/>
        
        
        <input type="text" value={price} className="inputBox" placeholder="Enter Price" onChange={(e)=>setPrice(e.target.value)}/>
    
        
        <input type="text"value={company} className="inputBox" placeholder="Enter Company name" onChange={(e)=>setCompany(e.target.value)}/>
        
        
        <input type="text" value={category} className="inputBox" placeholder="Enter Category name" onChange={(e)=>setCategory(e.target.value)}/>
    
         
         <button type="submit" onClick={updateProduct} className="signButton">Update Product</button>
        
        </div>
   )
}

export default Update;