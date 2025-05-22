import React, { useEffect, useState } from 'react'
import './Adusers.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Adusers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4001/viewusers`,data)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <div className="ad-usr">
      <h1>USERS</h1>
      <div className="row">
        {
          data.map((e) => (
            <div className="card" key={e._id}>
              <table>
                <tr>
                  <img src={`http://localhost:4001/${e?.image?.filename}`} alt={e.username} />
                  <div className="card-body">
                    <td><p>Email:{e.email}</p></td><br />
                    <td><p>Age:{e.age}</p></td><br />
                    <td><p>Contact:{e.contact}</p></td><br />
                    <td><p>Password:{e.password}</p></td>
                    <Link to={`/viewuserbyid/${e._id}`}><button className='btn-adusr'>View</button></Link>
                  </div>
                </tr>
              </table>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Adusers;
