import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Editblog.css';
import { useParams, useNavigate } from 'react-router-dom';

function Editblog() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState({ title: '', category: '', content: '', subcontent: '', image: '' });
    const [file, setFile] = useState(null);

    useEffect(() => {
        axios.post(`http://localhost:4001/viewblogbyid/${id}`)
            .then(res => {
                const blog = res.data.data;
                setPost({
                    title: blog.title,
                    category: blog.category,
                    content: blog.content,
                    subcontent: blog.subcontent,
                    image: blog.file
                });
            })
            .catch(err => {
                console.error(err);
            });
    }, [id]);

    const changefn = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };
    console.log(post);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleupdate = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('title', post.title);
        formData.append('category', post.category);
        formData.append('content', post.content);
        formData.append('subcontent', post.subcontent);
        if (file) {
            formData.append('image', file);
        }
    
        axios.put(`http://localhost:4001/updateblog/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            alert("Blog updated successfully.");
            navigate("/Addblogs");
        })
        .catch((err) => {
            console.error(err);
            alert("Failed to update blog.");
        });
    };
    

    return (
        <div className='edtblg-main'>
            <div className='edtblog-bg'>
                <div className='adm-post'>
                    <h3>Edit Blog</h3><br />
                    <form onSubmit={handleupdate}>
                        <label>Post Title</label><br />
                        <input type='text' name='title' placeholder='enter title' value={post.title} onChange={changefn} size={95} required /><br /><br />

                        <label>Category</label><br />
                        <select name='category' value={post.category} onChange={changefn} required>
                            <option value="">-- Select a category --</option>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Pets">Pets</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Technology">Technology</option>
                        </select><br /><br />

                        <label>Content</label><br />
                        <textarea name='content' value={post.content} onChange={changefn} rows='4' cols='50' required /><br /><br />

                        <label>Subcontent</label><br />
                        <input type='text' name='subcontent' value={post.subcontent} onChange={changefn} size={95} required /><br /><br />

                        <label>Feature Image</label><br />
                        {post.image && (
                            <img src={`http://localhost:4001/upload/${post.image}`} alt="Current" height="100" />)}<br />
                        <input type="file" name="image" onChange={handleFileChange} />


                        <button className='edtbtn-1' type='submit'>Save Changes</button>
                        <button className='edtbtn-2' type='button' onClick={() => navigate(-1)}>Discard</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Editblog;
