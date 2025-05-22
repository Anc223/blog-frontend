import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Deleteusr.css';
import axios from 'axios';

function Deleteusr() {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4001/viewuserbyid/${id}`)
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    console.log(data);

    const handleCancel = () => {
        navigate('/Users');
    };

    const handleDelete = () => {
        axios.delete(`http://localhost:4001/deletedata/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    alert("User deleted successfully.");
                    navigate('/Users');
                } else {
                    alert("Failed to delete.");
                }
            })
            .catch((err) => {
                console.error(err);
                alert("Error while deleting.");
            });
    };

    return (
        <div className='del-bg'>
            <div className='del-box'>
                <h3>Are you sure you want to delete?</h3><br/>
                <button className='del-btn1' onClick={handleCancel}>Cancel</button>
                <button className='del-btn2' onClick={()=>{handleDelete()}}>Delete</button>
            </div>
        </div>
    );
}

export default Deleteusr;
