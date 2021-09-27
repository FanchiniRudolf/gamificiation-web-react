import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './TeacherMissions.css';
//@bobby
function TeacherMissions() {
  return (
    // <div className="StudentGroup">
    <div>
      <Container>
      <Row className="mt-5 mb-3">
          <Col lg={12}>
            <h1>Misiones</h1>
            <p>(TODO/reminder, en Navbar que diga "cursos", "grupos", "periodos", "misiones")</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TeacherMissions;
