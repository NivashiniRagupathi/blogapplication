import React, { useState } from 'react';
import axios from 'axios';
import './index.css'; // Import your CSS file for styling

function PostForm({ token }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/posts', {
                title,
                content
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            // Clear form or redirect user
            setTitle('');
            setContent('');
            setError('');
        } catch (error) {
            setError('There was an error creating the post!');
        }
    };

    return (
        <div className="post-form-container">
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                {error && <div className="error">{error}</div>}
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default PostForm;
