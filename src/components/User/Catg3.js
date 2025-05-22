import React from 'react'
import "./Catg3.css";

function Catg3() {
    return (
        <div className='ctg3-main'>
            <div className='row'>
                <div className='col-6'>
                    <div className='ctg2-left'>
                        <h1>FOLLOW US</h1>
                    </div>
                </div>
    
                <div className='col-6'>
                    <div className='ctg2-right'>
                        <h1>Subscribe for<br /> updates & offers</h1>
                    </div>
                </div>
    
                <div className='inpt-box'>
                    <input type='email' placeholder='Enter email' size={50} /><br /><br />
                    <button className='catg-btn'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );
    
}

export default Catg3