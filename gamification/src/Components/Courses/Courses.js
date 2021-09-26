import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Courses.css';
//@dos
function Courses() {
  return (
    // <div className="Courses">
    <div>
      <Container>
        <Row className='mt-5 mb-3'>
          <Col lg={9}>
            <h1>Mis cursos</h1>
          </Col>
          <Col lg={3}>
            <Button variant="primary" size='md'>
              Unirme a un curso
            </Button>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            Card curso 1
          </Col>
          <Col lg={6}>
            Card curso 2
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Courses;
