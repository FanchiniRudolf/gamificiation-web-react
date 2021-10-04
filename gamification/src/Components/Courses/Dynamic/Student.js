import React, {useState} from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";

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
          
          {/* trying to add course cards here before separating into their own component */}
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