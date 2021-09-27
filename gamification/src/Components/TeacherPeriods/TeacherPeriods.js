import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './TeacherPeriods.css';
//@bobby
function TeacherPeriods() {
  return (
    // <div className="StudentGroup">
    <div>
      <Container>
      <Row className="mt-5 mb-3">
          <Col lg={9}>
            <h1>Periodos académicos</h1>
            <p>(TODO/reminder, en Navbar que diga "cursos", "grupos", "periodos", "misiones")</p>
          </Col>
          <Col lg={3}>
            <Button variant="primary" size="md" >
              Nuevo periodo
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TeacherPeriods;
