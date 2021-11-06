import React, {useState, useContext} from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { getCookie } from "../../Functions/Cookies";
import { SessionContext } from "../../Hooks/sessionContext";

import { useFetch } from "../../Hooks/useFetch"


import CourseCard from "../CourseCard/CourseCard";
import "./Groups.css";


function Groups() {

  const {isTeacher} = useContext(SessionContext)

  let urlRoute = ''
  if (isTeacher) {
    urlRoute = "groups"
  } else {
    urlRoute = "users_groups"
  }

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  const { loading, info } = useFetch(API_BASE_URL+urlRoute,
    "GET", {"Authorization": getCookie("session_token")})
  console.log(info);

  let table;
  if (loading === null) {
    table = <div></div>
  } else if (loading === true) {
    table = <p>Loading...</p>
  } else if (loading === false) {
    table = info.map(groupInfo =>
      <CourseCard key={groupInfo.id} course={groupInfo} />)
  }

  const [joinModalShow, setJoinModalShow] = useState(false);

  const handleJoinModalShow = () => setJoinModalShow(true);
  const handleJoinModalClose = () => setJoinModalShow(false);


  return (
    <div>
      <Modal size="md" centered show={joinModalShow} onHide={handleJoinModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Unirse a un grupo</Modal.Title>
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
              <h1>Mis grupos</h1>
            </Col>
            <Col lg={3}>
              { isTeacher ?
                (
                  <Button variant="primary" href="/create/group/1">
                    Crear
                  </Button>
                ) : (
                  <Button variant="primary" size="md" onClick={handleJoinModalShow}>
                    Unirme a un grupo
                  </Button>
                )
              }
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              {table}
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Groups;
