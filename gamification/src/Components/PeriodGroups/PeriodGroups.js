import React, {useState, useContext} from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { getCookie } from "../../Functions/Cookies";
import { SessionContext } from "../../Hooks/sessionContext";
import { useFetch } from "../../Hooks/useFetch"
import { useParams } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

function PeriodGroups() {

  const {isTeacher} = useContext(SessionContext)

  const { id: periodID } = useParams()
  console.log("periodID", periodID)

  let urlRoute = ''
  // TODO care isTeacher is NOT a boolean
  console.log(isTeacher)
  if (isTeacher === "teacher") {
    // TODO ensure this works for all other periodIDs
    urlRoute = "groups?period_id=" + periodID
  }
  console.log("urlroute",urlRoute)

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



  return (
    <div>
      <Container>
          <Row className="mt-5 mb-3">
            <Col lg={9}>
              <h1>Mis grupos para este periodo</h1>
            </Col>
            <Col lg={3}>
              <Button variant="primary" href="/create/group">
                Crear
              </Button>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              {table}
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default PeriodGroups
