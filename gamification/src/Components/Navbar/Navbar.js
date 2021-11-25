import React, {useContext} from "react";

import { Navbar as BNavbar, Nav, NavDropdown, Container, Row, Col, Button} from "react-bootstrap";
import { getCookie, deleteAllCookies } from "../../Functions/Cookies";
import { SessionContext } from '../../Hooks/sessionContext'


function Navbar() {

  const {session, setSession, isTeacher, setTeacherStatus, username, 
    setUsername, setUserId} = useContext(SessionContext);

  const handleLogOut = () => {
    deleteAllCookies();
    setSession(false);
    setTeacherStatus(false)
    setUsername("")
    setUserId(0)
  }


  return (
    <BNavbar bg="primary" variant="dark" expand="lg">
      <Container>
        <BNavbar.Brand href="/">Ludificación Tec CEM</BNavbar.Brand>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            { session && isTeacher === "student" && <Nav.Link href="/groups">Grupos</Nav.Link> }
            { session && isTeacher === "teacher" && <Nav.Link href="/subjects">Materias</Nav.Link> }
            { session && isTeacher === "teacher" && <Nav.Link href="/periods">Periodos</Nav.Link> }
            { session && isTeacher === "teacher" && <Nav.Link href="/missions">Misiones</Nav.Link> }
          </Nav>
          <Nav>
            { session && <Nav.Link disabled>{username}</Nav.Link> }
            { session && <Nav.Link onClick={deleteAllCookies} href="/login">Cerrar sesión</Nav.Link> }
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
}

export default Navbar;
