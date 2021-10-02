import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Student() {
  return (
    // <div className="StudentGroup">
    <div>
      <Container>
        <Row>
          <Col lg={12} className='mt-5'>
            <p>usar un boton o toggle y renderear condicionalmente una u otra</p>
            <h2>Misiones pendientes</h2>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg={12} className='mt-5'>
            <h2>Tabla de posiciones del grupo</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Student
