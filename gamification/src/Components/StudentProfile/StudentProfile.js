import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./StudentProfile.css";
//@dos
function StudentProfile() {

  return (
    // <div className="Courses">
    <div>
      <Container>
        <Row className="text-lg-center mt-2 mb-3">
          <Col lg={12}>
            <h2>Mi perfil (grupo x)</h2>
          </Col>
        </Row>
        <Row className="text-lg-center mt-5 mb-3">
          <Col lg={12}>
            <p>foto</p>
          </Col>
        </Row>
        <Row className="text-lg-center mt-5 mb-3">
          <Col lg={12}>
            <h2>Nombre</h2>
          </Col>
        </Row>
        <Row className="text-lg-center mt-5 mb-3">
          <Col lg={12}>
            <h1>X hp</h1>
          </Col>
        </Row>
        <Row className="text-lg-center mt-5 mb-3">
          <Col lg={12}>
            <h3>Y XP</h3>
          </Col>
        </Row>
        <Row className="text-lg-center mt-5 mb-3">
          <Col lg={12}>
            <h3>Z monedas</h3>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default StudentProfile;
