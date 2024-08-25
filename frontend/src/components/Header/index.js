import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Header = ({ token, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        onLogout();
        navigate('/');
    };

    return (
        <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="https://i.postimg.cc/qR6Xz07V/Screenshot-2024-08-25-073054.png"
                        height="40"
                        alt="Logo"
                        className='logo-image'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {token && <Nav.Link as={Link} to="/create" className='="nav-link'>Create Post</Nav.Link>}
                        {!token && <Nav.Link as={Link} to="/register" className='="nav-link'>Register</Nav.Link>}
                    </Nav>
                    {token ? (
                        <Button variant="outline-light" onClick={handleLogout}>
                            Logout
                        </Button>
                    ) : (
                        <Button variant="outline-light" as={Link} to="/login">
                            Login
                        </Button>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
