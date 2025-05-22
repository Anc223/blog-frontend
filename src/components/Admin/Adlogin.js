import React, { useState } from 'react'
import './Adlogin.css';
import { useNavigate } from 'react-router-dom';

function Adlogin() {

    const [name,setName]=useState({username:'', password:''});
    const navigate=useNavigate();

    function change(e){
        setName ({...name,[e.target.name]: e.target.value});
    }
    
const submit=(e)=>{
    if(name.username==='admin123'&&name.password==='admin'){
        alert("Login Successfully");
        navigate('/Dashboard')
    }else{
        alert("Invalid Credentials")
    }
    e.preventDefault()
    console.log(name)
}

  return (
    <div className='adlgn-bd'>
    <div className='adlgn-con'>
    <form onSubmit={submit}>
          <div className='adlgn-header'>Welcome, Admin!</div>
          <div className='adlgn-bx'>
          <div className='adlgn-usrname'>
              <input type='textbox' placeholder='Username' size={30} value={name.username} onChange={change} name='username' required /><br /><br /></div>
          <div className='adlgn-pswd'>
              <input type='password' placeholder='Password' size={30} value={name.password} onChange={change} name='password' required /><br /><br /></div>
          </div>
             <button className='adlgn-bt' >LOGIN</button>
          </form>
      </div>
      </div>
  )
}

export default Adlogin