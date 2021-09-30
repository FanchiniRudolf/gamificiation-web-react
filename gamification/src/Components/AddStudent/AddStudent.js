import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

import './AddStudent.css';

function AddStudent() {
  return (
    <div>
      <Container>
      <Row className="mt-5 mb-3">
          <Col lg={12}>
            <h1>Agregar estudiante</h1>
          </Col>
        </Row>
        
        
      </Container>
    </div>
  )
}

export default AddStudent
