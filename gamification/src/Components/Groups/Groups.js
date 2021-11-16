import React, {useState, useContext} from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { getCookie } from "../../Functions/Cookies";
import { SessionContext } from "../../Hooks/sessionContext";

import { useFetch } from "../../Hooks/useFetch"


import CourseCard from "../CourseCard/CourseCard";
import JoinGroupModal from "./JoinGroupModal/JoinGroupModal";
import "./Groups.css";


function Groups() {

  const {isTeacher} = useContext(SessionContext)

  let urlRoute = ''
  // TODO care isTeacher is NOT a boolean
  console.log(isTeacher)
  if (isTeacher === "teacher") {
    urlRoute = "groups"
  } else if (isTeacher === "student") {
    urlRoute = "users_groups"
  }

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  const { loading, info } = useFetch(API_BASE_URL+urlRoute,
    "GET", {"Authorization": getCookie("session_token")})

  let table;
  if (loading === null) {
    table = <div></div>
  } else if (loading === true) {
    table = <p>Loading...</p>
  } else if (loading === false) {
    if (info.title === "500 Internal Server Error") {
      console.log(info)
      table = <p style={{color: 'red'}}>
          Error: {info.title}
        </p>
    
      // TODO validate if this is the right condition to catch
    } else if (info) {
      console.log(info)
      table = info.map(groupInfo =>
        <CourseCard key={groupInfo.id} course={groupInfo} />)
    }
  }

  const [joinModalShow, setJoinModalShow] = useState(false);



  return (
    <div>

      <JoinGroupModal modalShow={joinModalShow} setModalShow={setJoinModalShow} />

      <Container>
          <Row className="mt-5 mb-3">
            <Col lg={9}>
              <h1>Mis grupos</h1>
            </Col>
            <Col lg={3}>
              { isTeacher === "teacher" ?
                (
                  <Button variant="primary" href="/create/group">
                    Crear
                  </Button>
                ) : (
                  <Button variant="primary" size="md" onClick={setJoinModalShow}>
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
