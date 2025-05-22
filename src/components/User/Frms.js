import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Frms() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/viewallusers')
            .then((res) => {
                console.log(res);
                setData(res.data.data)

            })
            .catch((err) => {
                console.log(err);

            })
    }, [])



    return (

        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
            <div className='row'>
                {
                    data.map((e) => {
                        return (

                            <div class="card" style={{ width: '18rem' }}>
                                <div class="card-body">
                                    <h5 class="card-title">{e.username}</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">{e.email}</li>
                                    <li class="list-group-item">{e.age}</li>
                                    <li class="list-group-item">{e.gender}</li>
                                    <li class="list-group-item">{e.contact}</li>
                                    <li class="list-group-item">{e.password}</li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Frms