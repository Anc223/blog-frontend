import React, { useState } from 'react';
import './signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [data, setData] = useState({ username: '', email: '', age: '', contact: '', password: '', confirmpassword: ''});
    const navigate = useNavigate();


    function change(e) {
        setData({ ...data, [e.target.data]: e.target.value });
    }


    const submit = (e) => {
        e.preventDefault()
        if (data.password !== data.confirmpassword) {
            alert("Password doesn't match")
        } else if (data.username === null) {
            alert("Please enter the username")
        }
        else {

            axios.post(`http://localhost:4001/adduser`, data)

                .then((res) => {
                    console.log(res);
                    if (res.data.status === 401) {
                        alert("Email already registered with us")
                    }
                    else if (res.data.status === 200) {
                        alert("Signup successfully")
                        navigate("/Login")
                    }

                })
                .catch((err) => {
                    console.log(err);

                })
        }
    }
    return (
        <div className='bg-full'>
            <div className='snup-bg'>
                <form onSubmit={submit}>
                    <div className='hd'><h1>SIGNUP</h1></div><br/>
                    <div className='snp-frm'>
                        <div className='username'>
                            <input type='textbox' placeholder='Username' size={40} name='username' value={data.username} onChange={change} required /><br /><br /></div>
                        <div className='email'>
                            <input type='textbox' placeholder='Email' size={40} name='email' value={data.email} onChange={change} required /><br /><br /></div>
                        <div className='age'>
                            <input type='textbox' placeholder='Age' size={40} name='age' value={data.age} onChange={change} required /><br /><br /></div>
                        <div className='contact'>
                            <input type='textbox' placeholder='Contact' size={40} name='contact' value={data.contact} onChange={change} required /><br /><br /></div>
                        <div className='pswd1'>
                            <input type='password' placeholder='Password' size={40} name='password' value={data.password} onChange={change} required /><br /><br /></div>
                        <div className='pswd2'>
                            <input type='password' placeholder='Confirm Password' size={40} name='confirmpassword' value={data.confirmpassword} onChange={change} required /><br /><br /></div>
                    </div>
                    <button className='snup-btn'>SIGNUP</button><br/><br/>
                    <a className='signup-navig' href='/login'>Back to Login</a>
                </form>
            </div>
        </div>
    )
}
