import React, { useEffect, useState } from 'react';
import './Myblog.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Myblog() {
    const [data, setData] = useState([]);
    const userid = localStorage.getItem("userid");

    useEffect(() => {
        axios.post('http://localhost:4001/blogbyuser', { userid })
            .then((res) => {
                setData(res.data.data || []);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className='mblg-hd'>
            <div className='row'>
        {
          data.map((e) => (
            <div className="card" key={e._id}>
              <img src={`http://localhost:4001/${e?.image?.filename}`} alt={e.title} height={300} />
              <div className="card-body">
                <i><h5 className="card-title">{e.title}</h5></i>
                <p className="card-text">{e.subcontent}</p>
                <Link to={`/viewmyblogs/${e._id}`} className="btn btn-primary">Read more...</Link>
              </div>
            </div>
          ))
        }
      </div>
            <Link className='mblg-bck' to='/Addblogs'>Back</Link>
        </div>
    );
}

export default Myblog;
