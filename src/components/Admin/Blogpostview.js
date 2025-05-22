import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Blogpostview.css';

function Blogpostview() {
  const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.post(`http://localhost:4001/viewblogbyid/${id}`)
      .then((res) => {
        setData(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(data);
  return (
    <div className='blgvw-bg'>
    <div className="blg-view">
    <h2>{data.title}</h2><br/><br/>
    <img src={`http://localhost:4001/${data?.image?.filename}`} height={300}/><br/><br/>
      <p>{data.content}</p>
      <p>{data.subcontent}</p>
    </div>
  </div>
  )
}

export default Blogpostview