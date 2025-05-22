import React from 'react'
import './Home5.css'
import { Link } from 'react-router-dom'

function Home5() {
  return (
    <div className='hm5-main'>
        <div class="hm5-bgfull">
        <div className='hm5-bg'>
          <div class='hm5-hed'><h1>Make your ideas come<br/>to life with Blogger. </h1></div><br/>
          <Link to={'/login'}><button class='hm5-btn'>Get Started</button></Link>
          </div>
        </div>
        <div className='hm5-lst'>
        <span className="logo">
        <span className="logo-icon">B</span>LOGGER</span><p>privacy policy</p><p1>Terms of use</p1>
        </div>
        </div>
  )
}

export default Home5