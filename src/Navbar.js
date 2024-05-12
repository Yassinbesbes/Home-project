import React, { useState } from 'react'; // Import useState
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
  const [showSearch, setShowSearch] = useState(false); // State for search bar visibility

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

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
            <Nav.Link href="/Home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="/Store" className="nav-link">Store</Nav.Link>
            <Nav.Link href="#gallery" className="nav-link">Collection</Nav.Link>

            <NavDropdown title="See More" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Aboutus">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/Contactus">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <div className="fixed-icons"> {/* Display all icons in a horizontal line */}
          <div>
            <IconButton aria-label="cart" onClick={toggleSearch}>
              <StyledBadge color="secondary">
                <SearchIcon />
              </StyledBadge>
            </IconButton>
            {showSearch && (
              <input
                className='searchbar'
                type="text"
                placeholder="Search..."
                onChange={(e) => console.log('Search query:', e.target.value)}
              />
            )}
          </div>

          <div>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>

          <div>
            <IconButton aria-label="cart">
              <StyledBadge color="secondary">
                <PersonIcon />
              </StyledBadge>
            </IconButton>
          </div>
        </div>

      </Container>
    </Navbar>
  );
}

export default AppNavbar;
