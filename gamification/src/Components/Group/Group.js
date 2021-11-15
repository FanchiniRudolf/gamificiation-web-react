import React, {useContext} from "react";
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { SessionContext } from "../../Hooks/sessionContext";
import { getCookie } from "../../Functions/Cookies";

import StudentProfile from "../Profile/Profile"
import StudentListItem from "../../Components/StudentListItem/StudentListItem"
import MissionItem  from "../MissionItem/MissionItem";
import TableEntry  from "../TableEntry/TableEntry";
import {useFetch} from "../../Hooks/useFetch"
import {useParams}  from "react-router-dom";



import "./Group.css";


function Group() {

  // stores the string which can have value "teacher"
  const {isTeacher} = useContext(SessionContext)

  const { id } = useParams();
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  const { loading, info } = useFetch(API_BASE_URL+"groups/"+String(id),
    "GET", {"Authorization": getCookie("session_token")})
  console.log(info);

  let students, missions, tableEntries;

  if (loading === null){
    students = <div/>;
    missions = <div/>;
    tableEntries = <div/>;
  }else if(loading === true){
    students = <p>Loading</p>;
    missions = <p>Loading</p>;
    tableEntries = <p>Loading</p>;
  }else if(loading === false){
    students = info.students.map(student =>
       <StudentListItem key={student.id} student={student} />);
    missions = info.misiones.map(mission => <MissionItem mission={mission}/>);
    tableEntries = info.students.sort((a, b) => a.hp - b.hp)
    .map((entry, index) => <TableEntry entry={entry} index={index}/>);
  }


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
                    <h1>Grupo {id}</h1>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col lg={6}>
                    <h4>{loading ? "loading":missions.length} misiones</h4>
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
                    {students}
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
              <Row className="mt-4">
              <Col lg={12}>
              <h1>Misiones del grupo</h1>
                </Col>
                <Col lg={12}>
                  {missions}
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
                  {tableEntries}
                </tbody>
              </Table>
            </TabPanel>

          { !isTeacher &&
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
