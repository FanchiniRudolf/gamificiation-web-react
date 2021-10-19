import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

function NotFound() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={12} className='mt-5'>
            <h1>404</h1>
            <h2>¡Ups!</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className='mt-3'>
            <h4>No hemos encontrado esa página</h4>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className='mt-3 mb-5'>
            <Button variant="link" href="/">
              De vuelta al inicio
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NotFound
