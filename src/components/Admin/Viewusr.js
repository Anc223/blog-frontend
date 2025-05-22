import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Viewusr.css'

function Viewusr() {
    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.post(`http://localhost:4001/viewuserbyid/${id}`)
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    console.log(data);
    return (
        <div className='viewusr-bg'>
            <h1>USERS</h1>
            <div className="card">
                <table>
                    <tr>
                        <img src={`http://localhost:4001/${data?.image?.filename}`} alt={data.username} />
                        <div className="card-body">
                            <td><p>Email:{data.email}</p></td><br />
                            <td><p>Age:{data.age}</p></td><br />
                            <td><p>Contact:{data.contact}</p></td><br />
                            <td><p>Password:{data.password}</p></td><br/>
                            <Link to={`/deleteuser/${data._id}`}><button className='btn-viewusr'>Delete</button><br/><br/></Link>
                            <a className='navi-adhome' href='/Dashboard'>Back to Home</a>
                        </div>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Viewusr