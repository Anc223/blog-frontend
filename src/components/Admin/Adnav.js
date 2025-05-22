import React from 'react'
import './Adnav.css'
import { Link } from 'react-router-dom'

function Adnav() {
    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="ad-container-fluid">
                </div>
            </nav>
            <div className='advert-nav'>

                <Link class='adnav-link-dsh' to={"/Dashboard"}>Dashboard</Link>
                <Link class='adnav-link' to={"/viewblog"}>View Blogs</Link>
                <Link class='adnav-link' to={"/Users"}>Users</Link>
                <Link class='adnav-link' to={"/Logout"}>Logout</Link>

            </div>
        </div>
    )
}

export default Adnav