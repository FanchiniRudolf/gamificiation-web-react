import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

import './TeacherMissions.css';
//@bobby
function TeacherMissions() {
  return (
    // <div className="StudentGroup">
    <div>

      <Navbar />

      <Container>
      <Row className="mt-5 mb-3">
          <Col lg={12}>
            <h1>Misiones</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TeacherMissions;
