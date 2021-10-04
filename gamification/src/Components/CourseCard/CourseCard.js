import React from 'react'
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";

function CourseCard() {
  return (
    <div>
      <Card>
              <Card.Header>
                <Button variant="link">Nombre del curso</Button>
              </Card.Header>
              <Card.Body>
                <Card.Title>Número de grupo</Card.Title>
                <Card.Text>
                  {1*1} Misiones en total
                </Card.Text>
                <hr />
                <Button variant="primary">editar</Button>
                {' '}
                <Button variant="danger">eliminar</Button>
              </Card.Body>
            </Card>
    </div>
  )
}

export default CourseCard
