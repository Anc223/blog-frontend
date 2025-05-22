import React from 'react'
import './Home3.css'
import { Link } from 'react-router-dom'

function Home3() {
  return (
    <div class="hm3-bgfull">
  <div className='hm3-bg'>
    <div class='hm3-hed'><h1>Manage your brand<br/>from one place</h1></div><br/>
    <p>Sell your products or services, start a blog and<br/>make smart decisions with clear analytics.</p><br/>
    <Link to={'/login'}><button class='hm3-btn'>START NOW</button></Link>
    </div>
    </div>
  )
}

export default Home3