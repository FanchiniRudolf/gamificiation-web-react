import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './TeacherCourses.css';
//@bobby
function TeacherCourses() {
  return (
    // <div className="StudentGroup">
    <div>
      <Container>
      <Row className="mt-5 mb-3">
          <Col lg={9}>
            <h1>Mis cursos</h1>
          </Col>
          <Col lg={3}>
            <Button variant="primary">
              Crear
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Lista con los cursos - cada curso tiene boton de editar y borrar</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TeacherCourses;
