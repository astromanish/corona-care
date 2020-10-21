import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/header.css';
import logo from './img/logo1.jpg';


const Header = () => {
    return (
        <Navbar bg="white" expand="lg" sticky="top">
            <Navbar.Brand><img src={logo} alt="site logo" className="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="nav">
                <Nav className="mr-auto nav-list">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <NavDropdown title="Status" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/status/world">World</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/status/india">India</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/status/india/UP">Uttar Pradesh</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link><Link to="/experiences">Community Forum</Link></Nav.Link>
                    <Nav.Link><Link to="/hope">Information</Link></Nav.Link>
                    <Nav.Link><Link to="/bored">Bored?</Link></Nav.Link>
                    <Nav.Link><Link to="/contributer">About Us</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;