import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import { FaArrowLeft } from 'react-icons/fa'; // Import arrow icon

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/posts/${id}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the post!', error);
            });
    }, [id]);

    if (!post) return <div className="loading-message">Loading...</div>;

    return (
        <div className="post-detail-container">
            <Link to="/" className="back-arrow">
                <FaArrowLeft /> {/* Arrow icon */}
            </Link>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default PostDetail;
