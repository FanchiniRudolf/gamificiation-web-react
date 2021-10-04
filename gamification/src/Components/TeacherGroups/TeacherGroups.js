import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './TeacherGroups.css';
//@bobby
function TeacherGroups() {
  return (
    // <div className="StudentGroup">
    <div>
      <Container>
      <Row className="mt-5 mb-3">
          <Col lg={9}>
            <h1>Mis Grupos</h1>
          </Col>
          <Col lg={3}>
            <Button variant="primary" size="md" >
              Crear un Grupo
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Materias que imparte el profesor</p>
            <p>Lista con opciones de editar o eliminar la entrada de la lista</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TeacherGroups;
