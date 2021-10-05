import React from "react";

import {
  Navbar as BNavbar, Nav, NavDropdown, Container, Row, Col, Button} from "react-bootstrap";

function Navbar() {
  return (
    <BNavbar bg="primary" variant="dark" expand="lg">
      <Container>
        <BNavbar.Brand href="/">Gamificación Tec CEM</BNavbar.Brand>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/courses">Cursos</Nav.Link>
            <Nav.Link href="/subjects">Materias</Nav.Link> 
            <Nav.Link href="/periods">Periodos</Nav.Link>
            <Nav.Link href="/missions">Misiones</Nav.Link>
            <NavDropdown title="Más..." id="basic-nav-dropdown">
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
}

export default Navbar;
