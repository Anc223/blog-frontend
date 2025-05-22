import React, { useState } from 'react'
import './Setting.css';

function Setting() {
    const [data,setData]=useState({username:'', email:'', password:''});

    function change(e){
        setData ({...data,[e.target.data]: e.target.value});
    }

    const submit = (e) => {
        e.preventDefault()
    }

  return (
    <div className='sett-page'>
        <div className='set-head'>
            <h1>Account Settings</h1>
            <form onSubmit={submit}>
            <table>
                <tr><label>Username</label>
                <td><input name='username' placeholder='Enter username' value={data.username} size={30} onChange={change} required/><br/><br/></td></tr>
                <tr><label>Email</label>
                <td><input name='email' placeholder='you@example.com' value={data.email} size={30} onChange={change} required/><br/><br/></td></tr>
                <tr><label>Password</label>
                <td><input name='password' placeholder='New password' value={data.password} size={30} onChange={change} required/><br/><br/></td></tr>
            </table>
                <button className='set-btn'>Save changes</button>
            </form>
        </div>
    </div>
  )
}

export default Setting