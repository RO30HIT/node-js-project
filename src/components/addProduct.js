import React,{useState} from "react"

const AddProduct=()=>{
    const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const[company,setCompany]=useState("")
    const[category,setCategory]=useState("")
    const[error,setError]=useState(false)
    
    const handleProduct=async()=>{
          console.log(name,price,company,category)
          if(!name || !price|| !company || !category){
            setError(true)
            return false;
          }
          const userId=JSON.parse(localStorage.getItem('user'))
          
          const result= await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,company,category,userId}),
            headers:{
                'Content-Type':'application/json'
            }
          })
          const newResult=await result.json()
          console.log(newResult)
    }
    
    return (
        <div>
        
        <h1>Add Product</h1>
        
        <input  type="text" value={name} className="inputBox" placeholder="Enter Product name" onChange={(e)=>setName(e.target.value)}/>
        {error&& !name &&<span className="error">Enter valid name</span>}
        
        <input type="text" value={price} className="inputBox" placeholder="Enter Price" onChange={(e)=>setPrice(e.target.value)}/>
        {error&& !price &&<span className="error">Enter valid price</span>}
        
        <input type="text"value={company} className="inputBox" placeholder="Enter Company name" onChange={(e)=>setCompany(e.target.value)}/>
        {error&& !company &&<span className="error">Enter valid company name</span>}
        
        <input type="text" value={category} className="inputBox" placeholder="Enter Category name" onChange={(e)=>setCategory(e.target.value)}/>
        {error&& !category &&<span className="error">Enter valid category</span>}
         
         <button type="submit" onClick={handleProduct} className="signButton">Add Product</button>
        
        </div>
       
    )
}

export default AddProduct;