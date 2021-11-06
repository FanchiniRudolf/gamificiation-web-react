import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

function StudentListItem({student}) {
  return (
    <div>
      <Container>
        <Row className="mt-2">
        <Col lg={2}>
            {student.student.school_id}
          </Col>
          <Col lg={3}>
            {student.student.name + " "  + student.student.last_name}
          </Col>

          <Col lg={6}>
            {student.hp} HP, {student.xp} xp, {student.coins} monedas
          </Col>

          <Col lg={1}>
            {/* TODO replace hard-coded route in href for dynamic route */}
            <Button variant="info" href="/gradestudent/1/a01745759">
              Calificar
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default StudentListItem
