import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Teacher() {
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
            <p>Cards con los grupos - incluyen botones de editar y borrar (?)</p>
            <p>Seleccionar un grupo lleva a componente con los detalles del grupo</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Teacher;