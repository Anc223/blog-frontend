import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Viewblog.css';

function Viewblog() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:4001/blogs',data)
            .then((res) => {
                setData(res.data.data)

            })
            .catch((err) => {
                console.log(err);

            })
    }, [])

    console.log(data);

    return (
    <div className='adblg-bg'>
      <h1>BLOGS</h1>
      <div className='row'>
        {
          data.map((e) => (
            <div className="card" style={{ height:'25rem'}} key={e._id}>
              <img src={`http://localhost:4001/${e?.image?.filename}`} />
              <div className="card-body">
                <i><h5 className="card-title">{e.title}</h5></i>
                <p className="card-text">{e.subcontent}</p>
                <Link to={`/blogpost/${e._id}`} className="btn btn-primary">Read more...</Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    )
}


export default Viewblog