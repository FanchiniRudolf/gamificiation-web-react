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
            <Nav.Link href="/teachergroups">Grupos</Nav.Link /*TODO why two groups for teacher*/> 
            <Nav.Link href="/periods">Periodos</Nav.Link>
            <Nav.Link href="/missions">Misiones</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" /*TODO add logout here*/>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
}

export default Navbar;
