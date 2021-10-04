import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

function StudentListItem() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3}>
            Nombre del alumno
          </Col>
          <Col lg={2}>
            A01234567
          </Col>

          <Col lg={6}>
            {0} hp, {0} xp, {0} monedas | Promedio misiones: {(0.0).toFixed(2)}
          </Col>

          <Col lg={1}>
            <Button variant="info">
              Calificar
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default StudentListItem
