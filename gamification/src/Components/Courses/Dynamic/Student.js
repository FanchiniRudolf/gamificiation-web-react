import React, {useState} from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
  
const Student=()=>
{
    const [joinModalShow, setJoinModalShow] = useState(false);

    const handleJoinModalShow = () => setJoinModalShow(true);
    const handleJoinModalClose = () => setJoinModalShow(false);
  
    return (
      // <div className="Courses">
      <div>
        <Modal size="md" centered show={joinModalShow} onHide={handleJoinModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Unirse a un curso</Modal.Title>
          </Modal.Header>
          <Modal.Body>This is the body.</Modal.Body>
        </Modal>
  
        <Container>
          <Row className="mt-5 mb-3">
            <Col lg={9}>
              <h1>Mis cursos</h1>
            </Col>
            <Col lg={3}>
              <Button variant="primary" size="md" onClick={handleJoinModalShow}>
                Unirme a un curso
              </Button>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>Componente card curso 1</Col>
            <Col lg={6}>Componente card curso 2</Col>
          </Row>
          
          {/* trying to add course cards here before separating into their own component */}
          <Row>
          <Col lg={6}>
            <Card>
              <Card.Header>Nombre del curso</Card.Header>
              <Card.Body>
                <Card.Title>Número de grupo</Card.Title>
                <Card.Text>
                  Misiones en total
                </Card.Text>
                <Card.Text>
                  {2*2} Misiones pendientes
                </Card.Text>
                <Card.Text>
                  {3*3} Misiones que han pasado
                </Card.Text>
                <hr />
                <Button variant="primary">editar</Button>
                {' '}
                <Button variant="danger">eliminar</Button>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
  
export default Student;