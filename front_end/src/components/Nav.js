import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Nav() {
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout =()=>
    {
        localStorage.clear();
        navigate('/signup')
    }
  return (
    <div>
    <ul className="nav_ul">
        {auth?<>
          <li><Link to="/">Products</Link></li>
          <li><Link to="/add">Add Products</Link></li>
          <li><Link to="/update/id">Update Products</Link></li>
          <li><Link to="/profile">Profile</Link></li>
           <li><Link to="/logout">Logout ({JSON.parse(auth).name})</Link></li></> :<>
          

   
    <li><Link onclick={logout} to="/signup">Sign up</Link ></li>
    <li><Link to="/login">Login</Link></li>
    

</>} </ul>
    </div>
  )
}

export default Nav
