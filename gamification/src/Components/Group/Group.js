import React, {useContext} from "react";
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { SessionContext } from "../../Hooks/sessionContext";

import StudentProfile from "../Profile/Profile"
import StudentListItem from "../../Components/StudentListItem/StudentListItem"
import MissionItem  from "../MissionItem/MissionItem";
import TableEntry  from "../TableEntry/TableEntry";

import "./Group.css";


function Group() {

  // use context instead of cookie
  const {isTeacher} = useContext(SessionContext)

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

  const misiones = [
    {
      tittle: 'Mision 1',
      desc: 'Descripcion 1',
    },
    {
      tittle: 'Mision 2',
      desc: 'Descripcion 2',
    },
    {
      tittle: 'Mision 3',
      desc: 'Descripcion 3',
    }
  ];

  const tableEntries = [
    {
      name: 'John Doe',
      id: 'A01374458',
      hp: 35,
      xp: 0,
      coins: 10,
      position: 1

    },
    {
      name: 'Jane Doe',
      id: 'A01373458',
      hp: 25,
      xp: 10,
      coins: 110,
      position: 2
    },
    {
      name: 'Max Doe',
      id: 'A01384458',
      hp: 0,
      xp: 2,
      coins: 1,
      position: 3
    }
  ];
  const studentsList = dummyStudents.map(student => <StudentListItem key={student.id} student={student} />)


  //TODO give components group id from route
  //TODO put on top reused components
  return (
    <div>
      <Container>
        <Tabs>
          <TabList>
            { isTeacher && <Tab>Grupo/alumnos</Tab> }
            <Tab>Misiones</Tab>
            <Tab>Tabla de posiciones</Tab>
            { !isTeacher && <Tab>Perfil</Tab> }
          </TabList>


          {isTeacher &&
            <TabPanel>
              <div>
                <Row className="mt-5 mb-3">
                  <Col lg={12}>
                    <h1>Grupo {1+1}</h1>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col lg={6}>
                    <h4>{3*3} misiones</h4>
                  </Col>

                  <Col lg={6}>
                    <h4>Promedio de misiones del grupo: {(99.8+0.1).toFixed(2)} HP</h4>
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
            </TabPanel>
          }


            <TabPanel>
              {/* TODO: @FanchiniRudolf, make missions table and leaderboard */}
              <Row className="mt-4">
              <Col lg={12}>
              <h1>Misiones del grupo</h1>
                </Col>
                <Col lg={12}>
                  {misiones.map(mission => <MissionItem mission={mission}/>)}
                </Col>
              </Row>
            </TabPanel>
              
            <TabPanel>
              <h1>Tabla de posiciones del grupo</h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Matricula</th>
                    <th>HP 💗</th>
                    <th>XP ⭐</th>
                    <th>Coins 🪙</th>
                  </tr>
                </thead>
                <tbody>
                  {tableEntries.map(entry => <TableEntry entry={entry}/> )}
                </tbody>
              </Table>
            </TabPanel>

          { isTeacher &&
            <TabPanel>
              <StudentProfile />
            </TabPanel>
          }
        </Tabs>
      </Container>
    </div>
  );
}

export default Group;
