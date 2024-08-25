import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';
import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('token');
    };

    return (
        <Router>
            <Header token={token} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={token ? <PostList token={token} /> : <Login setToken={setToken} />} />
                <Route path="/post/:id" element={token ? <PostDetail token={token} /> : <Navigate to="/login" />} />
                <Route path="/create" element={token ? <PostForm token={token} /> : <Navigate to="/login" />} />
                <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />
                <Route path="/login" element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
