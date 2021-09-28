import React from "react";

import {
  Navbar as BNavbar, Nav, NavDropdown, Container, Row, Col, Button} from "react-bootstrap";

function Navbar() {
  return (
    <BNavbar bg="primary" variant="dark" expand="lg">
      <Container>
        <BNavbar.Brand href="/teachercourses">Gamificación Tec CEM</BNavbar.Brand>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/teachercourses">Cursos</Nav.Link>
            <Nav.Link href="/teachergroups">Grupos</Nav.Link>
            <Nav.Link href="/teacherperiods">Periodos</Nav.Link>
            <Nav.Link href="/teachermissions">Misiones</Nav.Link>
            <NavDropdown title="Dropdown (add logout in here)" id="basic-nav-dropdown">
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
