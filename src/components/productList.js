import React, { useState,useEffect } from "react"
import { Link } from "react-router-dom"



const ProductList=()=>{
    const[productList,setList]=useState([])
    
    useEffect(()=>{
        products()
    },[])

    const products=async()=>{
    const list=await fetch('http://localhost:5000/products')
    const List=await list.json()
    setList(List)
    }
    
    const deleteItems=async(id)=>{
        const deleteItem= await fetch(`http://localhost:5000/product/${id}`,{
            method:'delete'
        })
         const result=await deleteItem.json()
         if (result){
           products()
         }
     }

    const searchItem=async(value)=>{
        if(value){
        const search=await fetch(`http://localhost:5000/search/${value}`)
        const searchProduct=await search.json()
        setList(searchProduct)
    }
    else{
        products()
    }
}
    return(
        <div className="productList">
            
            <h1>Product List</h1>
            <input type="text" onChange={(e)=>searchItem(e.target.value)} placeholder="search item" />
    
            <ul>
                <li>S no.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Company</li>
                <li>category</li>
                <li>Operations</li>
            </ul>
            {
            productList.map((item,index)=>{
              return(<ul>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.company}</li>
                <li>{item.category}</li>
                <li><button className="delete" onClick={()=>deleteItems(item._id)}>Delete</button>
                <Link to={`/update/${item._id}`}><button className="update">update</button></Link>
                </li>
                
            </ul>)
                       
            })
        
            }
           
        </div>
    )
}

export default ProductList