import React, { useEffect, useState } from 'react';
import './Homenw2.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Homenw2() {
    const [data, setData] = useState([])
    useEffect(() => {
      axios.get('http://localhost:4001/blogs', data)
        .then((res) => {
          setData(res.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }, [])
  
    console.log(data);

  console.log(data);
  return (
    <div className='blg-bg'>
      <div className='row'>
        {
          data.slice(0,4).map((e) => (
            <div className="card" style={{ height:'25rem'}} key={e._id}>
              <img src={`http://localhost:4001/${e?.image?.filename}`} />
              <div className="card-body">
                <i><h5 className="card-title">{e.title}</h5></i>
                <p className="card-text">{e.subcontent}</p>
                <Link to={`/viewblogs/${e._id}`} className="btn btn-primary">Read more...</Link>
              </div>
            </div>
          ))
        }
      </div>
      <Link to={'/Blogs'}><button className='hml-btn'>View more</button></Link>
    </div>
  )
}

export default Homenw2