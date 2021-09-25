import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Courses.css';
//@dos
function Courses() {
  return (
    // <div className="Courses">
    <div>
      <Container>
        <Row>
          <Col className='mt-5'>
            <h1>Mis cursos</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Courses;
