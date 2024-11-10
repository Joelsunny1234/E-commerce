import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();



    const handlelogin= async()=>
    {
       let result=await fetch("http://localhost:5000/login",{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
       });
       result=await result.json();
       console.warn(result)
       if(result.name)
       {
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/')
       }
       else{
        alert("Please enter correct details")
       }
    }
  return (
    <div className='login'>
      <h1>Login</h1>
      <input className="inputbox" type="email" placeholder='Enter your email id' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
      <input className="inputbox" type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/>
      <button className="button" type="button" onClick={handlelogin}>Submit</button>
    </div>
   
  )
}

export default Login
