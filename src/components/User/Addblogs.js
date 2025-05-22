import React, { useState } from 'react'
import './Addblogs.css'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Addblogs() {
    const userId = localStorage.getItem("userid")
    console.log(userId);
    const {id} = useParams()

    const [post, setPost] = useState({ userid: userId, title: '', category: '', content: '', subcontent: '', image: '' });

    console.log(post);
    const changefn = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setPost({ ...post, image: files[0] });
        } else {
            setPost({ ...post, [name]: value })
        }
        console.log(post);
    };

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('userid', post.userid);
        formData.append('title', post.title);
        formData.append('category', post.category);
        formData.append('content', post.content);
        formData.append('subcontent', post.subcontent);
        formData.append('image', post.image);

        axios.post(`http://localhost:4001/addblogs`, formData)
            .then((res) => {
                console.log(res);
                if (res.data.status === 300) {
                    alert("Posted successfully")
                } else if (res.data.status === 301) {
                    alert("User not found")
                }
            })
            .catch((err) => {
                console.log(err);

            })
        console.log(post)
    }


    return (
        <div className='adblg-hd'>
            <Link to={'/myblogs'}><button className='btn-viewblg'>My Blog</button></Link>
        <div className='adblg-main'>
            <div className='adblog-bg'>
                <div className='adm-post'>
                    <h3>Add blog</h3><br />
                    <form onSubmit={submit}>
                        <label>Post Title</label><br />
                        <input type='textbox' placeholder='Enter Title' size={95} value={post.title} onChange={changefn} name='title' required /><br /><br />
                        <select name='category' id="category" value={post.category} onChange={changefn} required>
                            <option value="">-- Select a category --</option>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Pets">Pets</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Technology">Technology</option>
                        </select><br /><br />
                        <label>Content</label><br />
                        <textarea placeholder='enter content' rows='4' cols='20' value={post.content} onChange={changefn} name='content' required /><br /><br />
                        <label>Subcontent</label><br />
                        <input type='textbox' placeholder='Enter subcontent' size={95} value={post.subcontent} onChange={changefn} name='subcontent' required /><br /><br />
                        <label>Feature Image</label><br />
                        <input type='file' name='image' onChange={changefn} required /><br /><br />
                        <button className='adbtn-1'>Save and Post</button> <button className='adbtn-2'>Discard</button>
                        <a className='adblg-bck' href='/myblogs'>Back</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Addblogs