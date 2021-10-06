import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './Missions.css';
//@bobby
function Missions() {
  return (
    <div>
      <Container>
        <Row className="mt-5 mb-3">
          <Col lg={9}>
            <h1>Misiones</h1>
          </Col>
          <Col lg={3}>
            <Button variant="primary" href="/create/mission">
              Crear
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Missions;
