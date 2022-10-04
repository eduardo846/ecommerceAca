import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate()
  const logout =()=>{
    localStorage.setItem("token","")
    navigate("/login")
  }
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand to="/" as={Link}>E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/login" as={Link}>
              Login
            </Nav.Link>
            <Nav.Link to="/Purchases" as={Link}>
              Favorites
            </Nav.Link>
            <Nav.Link>Favoritos(sidebar)</Nav.Link>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    //    <div>
    //      <Navbar bg="primary" variant="dark">
    //        <Container>
    //          <Navbar.Brand to="/" as={Link}>
    //            E-commerce
    //          </Navbar.Brand>
    //          <Nav className="me-auto">
    //            <Nav.Link to="/login" as={Link}>
    //              Login
    //            </Nav.Link>
    //            <Nav.Link to="/Purchases" as={Link}>
    //              Favorites
    //            </Nav.Link>
    //            <Nav.Link>Favoritos(sidebar)</Nav.Link>
    //          </Nav>
    //        </Container>
    //      </Navbar>
    //    </div>
  );
};

export default MyNavbar;
