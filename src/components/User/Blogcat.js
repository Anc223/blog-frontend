import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Blogcat(cat) {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4001/blogs')
            .then((res) => {
                setData(res.data)

            })
            .catch((err) => {
                console.log(err);

            })
    }, [])
    
    return (
        <div>
            <div className='row' >
                {
                    data.map((e) => {
                        if (e.category === cat)
                            return (
                                <div className="card" style={{ height:'25rem'}} key={e._id}>
                                <img src={`http://localhost:4001/${e?.image?.filename}`} />
                                <div className="card-body">
                                  <i><h5 className="card-title">{e.title}</h5></i>
                                  <p className="card-text">{e.subcontent}</p>
                                  <Link to={`/viewblogs/${e._id}`} className="btn btn-primary">Read more...</Link>
                                </div>
                              </div>
                            )
                    })
                }
            </div>
        </div>
    )
}

export default Blogcat