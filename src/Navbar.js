import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo.png';
import './Home.css'; // Import your custom CSS file

function AppNavbar() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
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
            <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            <Nav.Link href="/collection" className="nav-link">Store</Nav.Link>
            <Nav.Link href="#gallery" className="nav-link">Collection</Nav.Link>

            <NavDropdown title="See More" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Aboutus">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/Contactus">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <div className="fixed-icons"> {/* Display all icons in a horizontal line */}
        <Nav.Link >
        <IconButton aria-label="cart">
              <StyledBadge color="secondary">
          <SearchIcon  />
          </StyledBadge>
            </IconButton>
        </Nav.Link>
        <Nav.Link>

            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            </Nav.Link>
          <Nav.Link >
          <IconButton aria-label="cart">
              <StyledBadge  color="secondary">
          <PersonIcon />
          </StyledBadge>
            </IconButton>
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
