import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

function GradeStudent() {
  return (
    <div>
      <Container>
        <Row className="mt-5 mb-3">
          <Col lg={12}>
            <h1>Calificar misión</h1>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg={12}>
            <h3>Calificando a: {`nombre`}</h3>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <p>Form aqui</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Button variant="danger">Cancelar</Button>
          </Col>
          <Col>
            {' '}
            <Button variant="success">Registrar</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GradeStudent
