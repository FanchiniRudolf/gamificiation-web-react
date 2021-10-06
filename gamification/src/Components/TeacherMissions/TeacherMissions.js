import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './TeacherMissions.css';
//@bobby
function TeacherMissions() {
  return (
    <div>
      <Container>
        <Row className="mt-5 mb-3">
          <Col lg={9}>
            <h1>Misiones</h1>
          </Col>
          <Col lg={3}>
            <Button variant="primary">
              Crear
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TeacherMissions;