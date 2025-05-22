import React, { useEffect, useState } from 'react';
import './Adashbrd.css';
import axios from 'axios';

function Adashbrd() {
  const [blogCount, setBlogCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:4001/totalblogs')
      .then(res => {
        setBlogCount(res.data.count);
      })
      .catch(err => {
        console.error(err);
      });

      console.log(blogCount);

    axios.get('http://localhost:4001/totalusers')
      .then(res => {
        setUserCount(res.data.count);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className='dsh-head'>
      <h1>Welcome to Dashboard!</h1><br />
      <div className='cards'>
        <div className='card red'>
          <h3>Users</h3>
          <p>{userCount}</p>
        </div>
        <div className='card red'>
          <h3>Blogs</h3>
          <p>{blogCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Adashbrd;
