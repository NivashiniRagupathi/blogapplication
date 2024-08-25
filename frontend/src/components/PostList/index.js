import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './index.css'; // Import the CSS file

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://blogapplication-r9rs.onrender.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the posts!', error);
            });
    }, []);

    return (
        <div className="post-list-container">
            <h1>Blogs</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/create" className="create-post-link">Create a new post</Link>
        </div>
    );
}

export default PostList;
