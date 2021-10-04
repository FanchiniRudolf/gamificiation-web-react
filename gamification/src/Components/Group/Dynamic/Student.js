import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Student() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={12} className='mt-5'>
            <h1>Misiones pendientes</h1>
            <p>Componente con lista de misiones pendientes</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg={12} className='mt-5'>
            <h1>Tabla de posiciones del grupo</h1>
            <p>Componente con tabla de posiciones</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Student;
