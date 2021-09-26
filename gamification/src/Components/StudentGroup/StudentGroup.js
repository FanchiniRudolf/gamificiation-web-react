import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './StudentGroup.css';
//@bobby
function StudentGroup() {
  return (
    // <div className="StudentGroup">
    <div>
      <Container>
        <Row>
          <Col lg={6} className='mt-5'>
            <h2>Misiones pendientes</h2>
          </Col>
          <Col lg={6} className='mt-5'>
            <h2>Tabla de posiciones del grupo</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudentGroup;
