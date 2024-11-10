import react,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Signup() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth)
            navigate('/')
    })
    
    const collectData= async ()=>{
        console.warn(name,email,password);
        let result =await fetch("http://localhost:5000/register",{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        localStorage.setItem("user",JSON.stringify(result))
        navigate('/')
        // console.warn(result);
    }
  return (
    

    <div className='Signup'>
      <h1>Register</h1>
      <input className="inputbox" type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}>
      </input><br/>
      <input className="inputbox" type="email" placeholder='Enter your email id' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
      <input className="inputbox" type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/>
      <button onClick={collectData} className="button" type="button" >Submit</button>
    </div>
  )
}

export default Signup
