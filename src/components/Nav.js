import React from "react";
import {Link,useNavigate} from "react-router-dom"


const Nav=()=>{
    const auth=localStorage.getItem('user')
    const navigate=useNavigate()
    const logout=()=>{
          localStorage.clear()
          navigate("/signup")
    }
    return(<div>
        
        <ul className="nav-ul">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsEA1DVO3WXofKjnGrZqyd7ynJ6RePc1OSw&usqp=CAU" 
            alt="logo" className="logo"/>
            {
            auth?
          
            <>
            
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update/:id">Update Product</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/login" onClick={logout}>logout ({JSON.parse(auth).name})</Link></li>
            </>
            :
            <>
            <ul className="navRight">
            <li><Link to="/login">login</Link></li>
            <li><Link to="/signup">signup</Link></li>
            </ul>
            
            </>
            }
           
        </ul>
    </div>)
}

export default Nav