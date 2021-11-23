import React from 'react'
import { Container, Row, Col, Button, Table } from 'react-bootstrap';

function GroupMissionInfo() {

  const navigateBack = () => {
    window.history.back()
  }

  const hundredAllStudents = () => {
    console.log("all got hundred yay")
  }
  
  return (
    <>
      <Container className="mt-3 mb-3">
        <Row>
          <Col lg={3}>
            <Button variant="link" onClick={navigateBack}>
              Atrás
            </Button>
          </Col>          
          <Col lg={6}>
          </Col>          
          <Col lg={3}>
            <Button variant="success" onClick={hundredAllStudents}>
              Poner 100 a todos
            </Button>
          </Col>          
        </Row>
        
        
        <Row className="mt-3">     
          <Col lg={12}>
            <h2>Calificar esta misión:</h2>
          </Col>          
        </Row>

        {/* students go here */}
        <Row>
          <Col lg={12}>
            <p>(Listado de estudiantes a calificar para esta misión)</p>
          </Col>          
        </Row>
      </Container>
    </>
  )
}

export default GroupMissionInfo
