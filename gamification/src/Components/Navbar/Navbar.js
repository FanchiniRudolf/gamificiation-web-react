import React from "react";

import { Navbar as BNavbar, Nav, NavDropdown, Container, Row, Col, Button} from "react-bootstrap";
import { getCookie } from "../../Functions/Cookies";

function Navbar() {
  return (
    <BNavbar bg="primary" variant="dark" expand="lg">
      <Container>
        <BNavbar.Brand href="/">Gamificación Tec CEM</BNavbar.Brand>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            { getCookie("session_token") && <Nav.Link href="/groups">Grupos</Nav.Link> }
            { getCookie("session_token") && (getCookie("isTeacher") && <Nav.Link href="/subjects">Materias</Nav.Link>) }
            { getCookie("session_token") && (getCookie("isTeacher") && <Nav.Link href="/periods">Periodos</Nav.Link>) }
            { getCookie("session_token") && (getCookie("isTeacher") && <Nav.Link href="/missions">Misiones</Nav.Link>) }

            { getCookie("session_token") && <Nav.Link href="/login">Cerrar sesión</Nav.Link> }
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
}

export default Navbar;
