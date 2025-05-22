import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './Deleteblog.css'

function Deleteblog() {
    const [data, setData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.post(`http://localhost:4001/viewblogbyid/${id}`)
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    console.log(data);

    const handleDelete = () => {
        axios.delete(`http://localhost:4001/deleteblog/${id}`)
            .then((res) => {
                if (res.status === 200 || res.status === 204) {
                    alert("Blog deleted successfully.");
                    navigate('/Blogs');
                } else {
                    alert("Failed to delete.");
                }
            })
            .catch((err) => {
                console.error(err);
                alert("Error while deleting.");
            });
    };

    
    const handleCancel = () => {
        navigate('/myblogs');
    };


  return (
     <div className='delblog-bg'>
            <div className='delblog-box'>
                <h3>Are you sure you want to delete your blog?</h3><br/>
                <button className='delblog-btn1' onClick={handleCancel}>Cancel</button>
                <button className='delblog-btn2' onClick={()=>{handleDelete()}}>Delete</button>
            </div>
        </div>
  )
}

export default Deleteblog