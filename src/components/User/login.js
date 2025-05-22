import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [name,setName]=useState({email:'', password:''});
  const navigate = useNavigate();

  // const [msg,setMsg]=useState("");
  

  function change(e){
    setName ({...name,[e.target.name]: e.target.value});
  }

  const submit=(e)=>{

    axios.post(`http://localhost:4001/loginuser`,name)
    .then((res)=>{
      console.log(res);
      if(res.data.status===200){
        alert("Login Succssfully")
        localStorage.setItem("userid",res.data.data._id)
        console.log(res.data.data._id);
        navigate("/Home")
      }
      else if(res.data.status===404){
        alert("Incorrect password")
      }
      else if(res.data.status===402){
        alert("Please enter a valid Email")
      }
    })
    .catch((err)=>{
        console.log(err);
        
    })

    // setMsg("Login successfully!")
    e.preventDefault()
    console.log(name)
  }

  return (
    <div className='lgn-bd'>
      <div className='lgn-con'>
      <form onSubmit={submit}>
        <div><h1>Welcome to Blogger!</h1></div>
            <div className='lgn-header'>LOGIN</div>
            <div className='lgn-usrname'>
                <input type='textbox' placeholder='Email' size={30} value={name.email} onChange={change} name='email' required></input><br /><br /></div>
            <div className='lgn-pswd'>
                <input type='password' placeholder='Password' size={30} value={name.password} onChange={change} name='password' required></input><br /><br /></div>
               <button className='lgn-bt'>LOGIN</button><a className='sgnup-lnk'href='/signup'>SIGNUP</a><br/><br/>
               <a className='frgt-passwd' href='/Forgetpswd'>Forget password</a>
                {/* {msg && <p style={{color:"green"}}>{msg}</p>} */}
            </form>
        </div>
        </div>
  )
}
