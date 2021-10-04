import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

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
            <h3>Calificando a: {`nombre y matrícula del alumno`}</h3>
          </Col>
        </Row>

        <Form>
          <Row className="mt-3">
            <Col lg={6}>
              <h3>Misión</h3>
              <Form.Select aria-label="Default select example">
                <option>Misión a calificar</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
          
          <Row className="mt-3">
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><h5>HP</h5></Form.Label>
                {/* TODO add a defalut/starting value */}
                <Form.Control type="number" placeholder="HP a sumar o restar" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><h5>Experiencia</h5></Form.Label>
                {/* TODO add a defalut/starting value */}
                <Form.Control type="number" placeholder="XP a sumar o restar" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-3 mb-5">
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><h5>Monedas</h5></Form.Label>
                {/* TODO add a defalut/starting value */}
                <Form.Control type="number" placeholder="Monedas a sumar o restar" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3 mb-5">
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><h5>Calificación</h5></Form.Label>
                {/* TODO add a defalut/starting value */}
                <Form.Control type="number" placeholder="La calificación numérica (0 - 100) de esta tarea" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3 mb-5">
            <Col>
              <Button variant="danger">Cancelar</Button>
            </Col>
            <Col>
              {' '}
              <Button variant="success" type="submit">Registrar</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default GradeStudent
