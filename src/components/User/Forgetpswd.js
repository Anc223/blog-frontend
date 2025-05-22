import React, { useState } from 'react'
import './Forgetpswd.css'
import axios from 'axios';

function Forgetpswd() {
    const [name,setName]=useState({email:'', password:'', confirmpassword:''});

    function change(e){
        setName ({...name,[e.target.name]: e.target.value});
    }

    const submit=(e)=>{
        e.preventDefault();

        axios.post(`http://localhost:4001/resetpassword`,name)
        .then((res)=>{
          console.log(res);
          if(res.data.status===400 && name.password===name.confirmpassword){
            alert("Reset Succssfully")
          }
          else if(res.data.status===606){
            alert("No user found")
          }else{
            alert("Enter correct password")
          }
        })
        .catch((err)=>{
            console.log(err);
            alert("Something went wrong");
        })

        console.log(name)
    }

  return (
    <div className='frgt-page'>
        <div className='frgt-form'>
        <form onSubmit={submit}>
            <h2>Reset Password</h2><br/>
         <input type='text' placeholder='Enter Email' value={name.email} size={35} onChange={change} name='email' required/><br/><br/>
         <input type='New password' placeholder='New Password' value={name.password} size={35} onChange={change} name='password' required/><br/><br/>
         <input type='Confirm password' placeholder='Confirm Password' value={name.confirmpassword} size={35} onChange={change} name='confirmpassword' required/><br/><br/>
         <button className='frgt-btn'>Save Changes</button><br/><br/>
         <a className='frgt-navig' href='/login'>Back to Login page</a>
        </form>
        </div>
    </div>
  )
}

export default Forgetpswd