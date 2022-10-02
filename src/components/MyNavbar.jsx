import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to="/" as={Link}>
            E-commerce
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/login" as={Link}>
              Login
            </Nav.Link>
            <Nav.Link to="/Purchases" as={Link}>
              Favorites
            </Nav.Link>
            <Nav.Link>Favoritos(sidebar)</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
