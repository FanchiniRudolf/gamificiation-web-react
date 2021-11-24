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

          <Col lg={3} className="text-center">
            {/* {student.hp} HP, {student.xp} xp, {student.coins} monedas */}
            {student.xp} xp
          </Col>

          <Col lg={4} className="text-center">
            {/* {student.hp} HP, {student.xp} xp, {student.coins} monedas */}
            {student.coins} monedas
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default StudentListItem
