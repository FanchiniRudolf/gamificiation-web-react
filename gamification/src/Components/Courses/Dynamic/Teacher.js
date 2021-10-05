import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import CourseCard from "../../CourseCard/CourseCard"

function Teacher() {
  return (
    // <div className="StudentGroup">
    <div>
      <Container>
      <Row className="mt-5 mb-3">
          <Col lg={9}>
            <h1>Mis cursos</h1>
          </Col>
          <Col lg={3}>
            <Button variant="primary">
              Crear
            </Button>
          </Col>
        </Row>
        
        <Row>
            <Col lg={6}>
              <CourseCard />
            </Col>
            <Col lg={6}>
              <CourseCard />
            </Col>
          </Row>
      </Container>
    </div>
  );
}

export default Teacher;
