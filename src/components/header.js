import React from 'react'
import { Link } from 'react-router-dom';
import './css/navbar.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './img/logo1.jpg';


const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Corona Info</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                    <NavDropdown title="Status" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/status">World</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/status/india">India</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/status/">Uttar Pradesh</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link><Link to="/hope">Hope</Link></Nav.Link>
                    <Nav.Link><Link to="/bored">Bored?</Link></Nav.Link>
                    <Nav.Link><Link to="/contributer">Contributers</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;