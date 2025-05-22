import React from 'react'
import './Home2.css'
import { Link } from 'react-router-dom'

function Home2() {
    return (

<div class="hm2-bgfull">
  <div className='hm2-bg'>
    <div class='hm2-hed'><h1>Build with the world’s <br/> most intuitive platform</h1></div><br/>
    <p>Create better websites with mobile-responsive templates, <br/> seamless drag & drop and unlimited customization.</p><br/>
    <Link to={'/login'}><button class='hm2-btn'>START NOW</button></Link>
    </div>
    </div>
    )
}

export default Home2