import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStore, faUser } from '@fortawesome/free-solid-svg-icons';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo.png';
import './Navbar.css'; // Import your custom CSS file

function AppNavbar() {
  return (
    <Navbar className='Navi' bg="light" expand="lg">
      <Container fluid>
        <img
          src={logo}
          height="30"
          alt="Logo"
          className="d-none d-lg-block"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="d-lg-flex"> {/* Display only on lg and larger screens */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#our-story">Our Story</Nav.Link>
            <Nav.Link href="#our-story">Collection</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>

            <NavDropdown title="Contact Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">See More</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <div className="fixed-icons "> {/* Display all icons in a horizontal line */}
          <Nav.Link className="icon-link align-items-center">
            <FontAwesomeIcon icon={faSearch} />
          </Nav.Link>
          <Nav.Link className="icon-link">
            <FontAwesomeIcon icon={faStore} />
          </Nav.Link>
          <Nav.Link className="icon-link">
            <FontAwesomeIcon icon={faUser} />          
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
