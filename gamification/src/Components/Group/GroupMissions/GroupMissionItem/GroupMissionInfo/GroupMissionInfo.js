import React from 'react'
import { Container, Row, Col, Button, Table } from 'react-bootstrap';

function GroupMissionInfo() {

  const navigateBack = () => {
    window.history.back()
  }
  return (
    <>
      <Container>
        <Row>
          <Col lg={3}>
          <Button variant="link" onClick={navigateBack}>
              Atrás
            </Button>
          </Col>          
          <Col lg={6}>
          </Col>          
          <Col lg={3}>
            <Button variant="success">
              Poner 100 a todos
            </Button>
          </Col>          
        </Row>
        
        
        
        <Row>
          <Col>
          </Col>          
        </Row>
        <Row>
          <Col>
          </Col>          
        </Row>
      </Container>
    </>
  )
}

export default GroupMissionInfo
