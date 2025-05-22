import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CategoryPage.css';

function CategoryPage() {
    const { name } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4001/posts?category=${name}`)
            .then((res) => {
                setPosts(res.data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [name]);

    console.log(posts);

    return (
        <div className="category-page">
            <h1>{name} Posts</h1>
            <ul className="category-list">
                {posts.length > 0 ? (
                    posts.map((post, index) => (
                        <li key={index} className="category-item">
                            <h2>{post.title}</h2>
                            {post?.image?.filename && (
                                <img src={`http://localhost:4001/${post.image.filename}`} height={300} alt="post" />
                            )}
                            <p>{post.content}</p>
                            <p>{post.subcontent}</p>
                        </li>
                    ))
                ) : (
                    <p>No posts found in this category.</p>
                )}
            </ul>
        </div>
    );
}

export default CategoryPage;
