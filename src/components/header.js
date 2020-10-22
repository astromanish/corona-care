import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/header.css';
import logo from './img/logo1.jpg';


const Header = () => {
    return (
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/" className="nav-link">
        <Navbar.Brand>Corona Info</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href={`/discussion-forum`}>Community Forum</Nav.Link>
          <Nav.Link href={`/registration-guide`}>Information</Nav.Link>
          <Nav.Link href={`/academics`}>Bored?</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <NavDropdown
            title="Status"
            id="collasible-nav-dropdown"
            className="nav-link"
          >
            <NavDropdown.Item as={Link} to="/gallery">
              World
            </NavDropdown.Item>

            <NavDropdown.Item as={Link} to="/placement-stats">
              India
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item as={Link} to="/miscellanous-guide">
              Uttar Pradesh
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <NavDropdown
            title="Get in Touch"
            id="collasible-nav-dropdown"
            className="nav-link"
          >
            <NavDropdown.Item as={Link} to="/about-us">
              About Us
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/feedback">
              Feedback
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/tnc">
              Terms and Conditions
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default Header;