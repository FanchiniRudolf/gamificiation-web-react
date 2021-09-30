import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './TeacherGroup.css';
//@bobby
function TeacherGroup() {
  return (
    // <div className="StudentGroup">
    <div>
      <Container>
      <Row className="mt-5 mb-3">
          <Col lg={12}>
            <h1>Grupo {1+1}</h1>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col lg={6}>
            <h4>{3*3} misiones</h4>
          </Col>
          
          <Col lg={6}>
            <h4>Promedio del grupo: {(99.8+0.1).toFixed(2)}</h4>
          </Col>

          {/* stretch goal: add min & max grade & logic to compute it */}
          
        </Row>
        
        <hr />
        <Row className="mt-4">
          <Col lg={12}>
            <h4>Alumnos:</h4>
          </Col>
        </Row>
        
        <Row className="mt-2">
          <Col lg={12}>
            <p>tabla con los alumnos (ordenados por matricula)</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TeacherGroup;
