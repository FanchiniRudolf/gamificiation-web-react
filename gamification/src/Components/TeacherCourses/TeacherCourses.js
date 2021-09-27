import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

import './TeacherCourses.css';
//@bobby
function TeacherCourses() {
  return (
    // <div className="StudentGroup">
    <div>

      <Navbar />

      <Container>
      <Row className="mt-5 mb-3">
          <Col lg={9}>
            <h1>Mis cursos</h1>
            <p>(TODO/reminder, en Navbar que diga "cursos", "grupos", "periodos", "misiones")</p>
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
