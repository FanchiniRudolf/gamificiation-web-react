import React from 'react'
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { getCookie } from '../../../../../Functions/Cookies';
import useFetch from '../../../../../Hooks/useFetch';
import TableEntry from './TableEntry/TableEntry';

function GroupMissionInfo() {

  let studentsToGrade

  const navigateBack = () => {
    window.history.back()
  }

  const hundredAllStudents = () => {
    console.log("all got hundred yay")
    window.location.reload()
  }

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  const {groupId: groupID, missionId: missionID} = useParams()
  console.log(`params: ${groupID}, ${missionID}`)

  const {loading, info} = useFetch(API_BASE_URL + `missions-to-groups/${groupID}?mission_id=${missionID}`,
    "GET",
    {"Authorization": getCookie("session_token")})
  console.log(info)
  


  if (loading === null) {
    studentsToGrade = <div></div>
  } else if (loading === true) {
    studentsToGrade = <p>Cargando...</p>
  } else if (loading === false) {
    // array containing students - includes their enrollment ID (id), group ID & student ID
    // students are objects each, this is an array of objects
    studentsToGrade = info.students
    console.log(studentsToGrade, typeof(studentsToGrade))
    studentsToGrade = studentsToGrade.map( (student) => <TableEntry key={studentsToGrade.id} entry={student} groupID={groupID} missionID={missionID} /> )
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
            <Button variant="success" onClick={hundredAllStudents} className="float-end">
              Poner 100 a todos
            </Button>
          </Col>          
        </Row>
        
        
        <Row className="mt-3">     
          <Col lg={12}>
            <h2>Calificar esta misión:</h2>
          </Col>          
        </Row>

        <Row className="mt-3">
          <Col lg={12}>
            <Table striped bordered hover>
              <thead>
                <tr className="text-center">
                  <th>Matrícula</th>
                  <th>Nombre</th>
                  <th>XP total</th>
                  <th>Monedas totales</th>
                  <th>Calificación de la misión</th>
                </tr>
              </thead>
              <tbody>
                {studentsToGrade}
              </tbody>
            </Table>
          </Col>          
        </Row>
      </Container>
    </>
  )
}

export default GroupMissionInfo
