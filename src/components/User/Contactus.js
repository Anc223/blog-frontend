import React from 'react'
import './Contactus.css'
import imgct from './OIP (1).jpeg'

function Contactus() {
  return (
    <div className='cont-bg'>
      <div className='Cont-page'>
        <div className='row'>
          <div className='col-md-8'>
            <h1>Contact us</h1>
            <p>We’d love to hear from you! Whether you have a question, feedback don’t hesitate to reach out. We'll respond as soon as possible.<br />Thank you for being part of our blogging journey. We’re excited to connect with you.</p>
            <p1><b>Address:</b>Blogosphere HQ, 42 Content Lane, Wordville, WP 2025<br /><b>Contact:</b>4486357023<br /><b>Email:</b>blogger@gmail.com</p1>
          </div>
          <div className='col-md-4'>
            <img src={imgct} alt='Contactus' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus