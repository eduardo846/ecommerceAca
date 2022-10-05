import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import FavoritesSidebar from "./FavoritesSidebar";

const MyNavbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand to="/" as={Link}>
            E-commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/login" as={Link}>
                Login
              </Nav.Link>
              <Nav.Link to="/Purchases" as={Link}>
                Favorites
              </Nav.Link>
              <Nav.Link onClick={handleShow}>Favoritos(sidebar)</Nav.Link>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <FavoritesSidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default MyNavbar;
