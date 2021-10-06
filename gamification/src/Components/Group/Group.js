import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getCookie } from "../../Functions/Cookies";

import StudentListItem from "../../Components/StudentListItem/StudentListItem"

import "./Group.css";


function Courses() {

  const dummyStudents = [
    {
      id: 'A01374448',
      name: 'Estudiante1',
      hp: 0,
      xp: 0,
      gold: 0,
      average:0.0
    },
    {
      id: 'A01374866',
      name: 'Estudiante2',
      hp: 0,
      xp: 0,
      gold: 0,
      average:0.0
    },
    {
      id: 'A01374785',
      name: 'Estudiante3',
      hp: 0,
      xp: 0,
      gold: 0,
      average:0.0
    }
  ];
  const studentsList = dummyStudents.map(student => <StudentListItem key={student.id} student={student} />)

  
  //TODO give components group id from route
  //TODO put on top reused components
  return (
    <div>
      <Container>
      { getCookie("isTeacher") &&
        <div>
          <Row className="mt-5 mb-3">
            <Col lg={5}>
            {' '} 
            </Col>
            <Col lg={7}>
              <Button variant="info">Ver grupo/alumnos</Button>{' '}
              <Button variant="info">Ver misiones</Button>{' '}
              <Button variant="info">Ver tabla de posiciones</Button>{' '}
            </Col>
            <Col lg={12}>
            <hr/> 
            </Col>
          </Row>
        </div>
      }
        
      { getCookie("isTeacher") &&
        <div>
          <Row className="mt-5 mb-3">
            <Col lg={12}>
              <h1>Pantalla 1 de 3</h1>
              <h1>Grupo {1+1}</h1>
            </Col>
          </Row>
          
          <Row className="mt-4">
            <Col lg={6}>
              <h4>{3*3} misiones</h4>
            </Col>
            
            <Col lg={6}>
              <h4>Promedio de misiones del grupo: {(99.8+0.1).toFixed(2)}</h4>
            </Col>

            {/* stretch goal: add min & max grade & logic to compute it */}
            
          </Row>
          
          <hr />
          <Row className="mt-4">
            <Col lg={12}>
              <h4>Alumnos:</h4>
            </Col>
          </Row>
          
          <Row className="mt-2">
            <Col lg={12}>
              <p>tabla con los alumnos (ordenados por matricula)</p>
              {/* <StudentListItem /> */}
              {studentsList}
            </Col>
          </Row>
          {/* divider */}
          <Row>
            <Col lg={12}>
              <hr/>
            </Col>
          </Row>
        </div>
      }


        {/* screen 2 */}
        {/* TODO: @FanchiniRudolf, make missions table and leaderboard */}
        <Row className="mt-4">
          <Col lg={12}>
            <h1>Misiones</h1>
          </Col>
        </Row>

        {/* divider */}
        <Row>
          <Col lg={12}>
            <hr/>
          </Col>
        </Row>
          

        {/* screen 3 */}        
        <Row className="mt-2">
          <Col lg={12}>
            <h1>Tabla de posiciones</h1>
            <p>Estará ordenada por puntaje, NO por matrícula</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Courses;
