import React from 'react';
import './Navig.css';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

function Navig() {
  return (
    <div className='navbar-home'>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <span className="logo">
        <span className="logo-icon">B</span>LOGGER</span>
          <Link to={"/"}>HOME</Link>
          <Link to={"/blogs"}>BLOGS</Link>
          <Link to={"/Category"}>CATEGORY</Link>
          <Link to={"/Addblogs"}>ADD BLOG</Link>
          <Link to={"/Viewprofile"}>VIEW PROFILE</Link>
          <Link to={"/logout"}><FaSignOutAlt style={{ marginRight: '5px' }} />LOGOUT</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navig