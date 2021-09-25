import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Group.css';
//@bobby
function Group() {
  return (
    // <div className="Group">
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

export default Group;
