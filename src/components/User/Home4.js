import React from 'react'
import './Home4.css'
import { Link } from 'react-router-dom'

function Home4() {
  return (
    <div class="hm4-bgfull">
    <div className='hm4-bg'>
      <div class='hm4-hed'><h1>Grow your online<br/>presence</h1></div><br/>
      <p>Boost traffic and increase engagement with built-in SEO<br/>tools, Facebook ads, email marketing and social posts.</p><br/>
      <Link to={'/login'}><button class='hm4-btn'>START NOW</button></Link>
      </div>
      </div>
  )
}

export default Home4