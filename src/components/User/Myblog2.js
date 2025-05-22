import React, { useEffect, useState } from 'react';
import './Myblog2.css'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Myblog2() {
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
        <div className='myblgvw-bg'>
            <div className="myblg-view">
                <h2>{data.title}</h2><br /><br />
                <img src={`http://localhost:4001/${data?.image?.filename}`} height={300} /><br /><br />
                <p>{data.content}</p>
                <p>{data.subcontent}</p>
                <Link to={`/editblog/${id}`}>
                    <button className='edit-btn'>Edit Blog</button>
                </Link>
                <Link to={`/deleteblog/${id}`}>
                    <button className='edit-btn1'>Delete Blog</button>
                </Link>
            </div>
        </div>
    )
}

export default Myblog2