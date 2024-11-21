import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Logo from "../images/logo-transparent.png"

const TopNav = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <Navbar expanded={expanded} bg="primary" variant="dark" expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" height="40" />
          <strong className='Logo-txt'>4U Plumbing</strong>
        </Navbar.Brand>
        
        {/* Hamburger Menu */}
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
        
        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button variant="outline-light" href="mailto:info@fouruplumbing.com">Email Us</Button>
            <Button variant="outline-light" href="tel:+27825907453">Call Us</Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
