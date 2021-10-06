import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

function StudentListItem({student}) {
  return (
    <div>
      <Container>
        <Row className="mt-2">
        <Col lg={2}>
            {student.id}
          </Col>
          <Col lg={3}>
          {student.name}
          </Col>

          <Col lg={6}>
            {student.hp} hp, {student.hp} xp, {student.gold} monedas | Promedio misiones: {(student.average).toFixed(2)}
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
