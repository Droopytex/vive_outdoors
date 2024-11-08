import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <>
      {/* Menú superior con íconos de redes sociales */}
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">
              <i className="fab fa-facebook-f"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fab fa-twitter"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fab fa-instagram"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fab fa-linkedin-in"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Menú principal */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">
          <img
            src="https://via.placeholder.com/30"
            alt="Logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Sale</Nav.Link>
            <Nav.Link href="#">Carpas</Nav.Link>
            <Nav.Link href="#">Sacos & Colchonetas</Nav.Link>
            <Nav.Link href="#">Accesorios</Nav.Link>
          </Nav>
          <Form inline className="ml-3">
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <Button variant="outline-light">Buscar</Button>
          </Form>
          <Nav.Link href="#" className="text-white">
            <i className="fas fa-shopping-cart"></i>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
