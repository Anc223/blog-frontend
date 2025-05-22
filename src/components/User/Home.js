import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className='hm-bgfull'>
    <div className='hm-bd'>
      <div class='hm-text'>
        <div class='hm-hed'><h1>Create your own beautiful blog</h1></div>
        <div className='hm-txtbox'>
        <Link to={"/login"}><button className='hm-btn'>START NOW</button></Link><br/><br/>
        <p>Yes, it's free. upgrade anytime.</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Home