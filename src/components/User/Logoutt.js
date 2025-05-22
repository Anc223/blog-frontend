import React, { useState } from 'react'
import './Logoutt.css'
import { useNavigate } from 'react-router-dom';

function Logoutt() {
    const navigate=useNavigate();
    const [msg,setMsg]=useState("");

    const handlelogout=()=>{
        localStorage.removeItem('userid');
        setMsg(true);
        setTimeout(()=>{
            setMsg(false);
            navigate('/login')
        },2000);
    }

  return (
    <div className='logout-bg'>
    <div className='logout-box1'>
        <h3>Are you sure you want to Logout</h3><br/>
        <button className='logout-btn1'>Cancel</button>
        <button className='logout-btn2' onClick={handlelogout}>Logout</button>
        {msg && (<p style={{color:'green'}}>Logout Successfully</p>)}
        </div>
    </div>
  )
}

export default Logoutt