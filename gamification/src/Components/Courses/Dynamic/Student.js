import React, {useState} from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";

import CourseCard from "../../CourseCard/CourseCard"
  
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
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Código</Form.Label>
                <Form.Control type="text" placeholder="Código de clase" />
                <Form.Text className="text-muted">
                  Introduce el código de la clase para quedar registrado en esta.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Registrar
              </Button>
              <Button variant="link" onClick={handleJoinModalClose}>
                Cancelar
              </Button>
            </Form>
          </Modal.Body>
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
  
export default Student;