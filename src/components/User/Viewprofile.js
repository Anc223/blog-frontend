import React, { useEffect, useState } from 'react';
import './Viewprofile.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Viewprofile() {
  const userId = localStorage.getItem("userid");
  const [data, setData] = useState({});

  useEffect(() => {
    if (userId) {
      axios.post(`http://localhost:4001/viewuserbyid/${userId}`)
        .then((res) => {
          console.log(data);
          setData(res.data.data);
        })
        .catch((err) => {
          console.log("Error fetching user data:", err);
        });
    }
  }, [userId]);

  return (
    <div className='view-bg'>
      <div className='view-prof'>
        <h2>View Profile</h2>
        <div className='prof-box'>
          <h4>{data.username}</h4>
          <p>Email: {data.email}</p>
          <p>Age: {data.age}</p>
          <p>Contact: {data.contact}</p>
          <Link to={`/Editprof/${userId}`}>
            <button className='prof-btn'>Edit</button><br/><br/>
          </Link>
          <Link to="/Home" className='navi-home'>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Viewprofile;
