import React, {useContext, useState} from "react";
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from "axios"
import 'react-tabs/style/react-tabs.css';

import { SessionContext } from "../../Hooks/sessionContext";
import { getCookie } from "../../Functions/Cookies";
import {useFetch} from "../../Hooks/useFetch"
import {useParams}  from "react-router-dom";

import StudentProfile from "../Profile/Profile"
import StudentListItem from "../../Components/StudentListItem/StudentListItem"
import GroupMissions from "./GroupMissions/GroupMissions";
import MissionItem  from "../MissionItem/MissionItem";
import TableEntry  from "../TableEntry/TableEntry";




import "./Group.css";



function Group() {

  // stores the string which can have value "teacher"
  const {isTeacher} = useContext(SessionContext)
  const axiosHeader = { Authorization: `${getCookie("session_token")}`}
  let groupJoinCode = ""
  const [joinCode, setJoinCode] = useState("")

  const { id } = useParams();
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  const { loading, info } = useFetch(API_BASE_URL+"groups/"+String(id),
    "GET",
    {"Authorization": getCookie("session_token")})
    // info contains group ID, course ID, period ID, name of group & OTP
    // console.log(info);

  const generateClassCode = () => {
    axios.get(API_BASE_URL+"groups/acces_code/"+String(id), {headers: axiosHeader})
      .then(response => {
        groupJoinCode = response.data.otp
        setJoinCode(<h3>Se generó el código {groupJoinCode} para que los alumnos se registren por 24 horas.</h3>)
      })
      .catch(error => {
        console.log(error)
      })
  }

  let students, missions, tableEntries;

  if (loading === null){
    students = <div/>;
    tableEntries = <div/>;
  }else if(loading === true){
    students = <p>Cargando...</p>;
    tableEntries = <p>Cargando...</p>;
  }else if(loading === false){
    students = info.students.map(student =>
       <StudentListItem key={student.id} student={student} />);
    tableEntries = info.students.sort((a, b) => a.hp - b.hp)
      .map((entry, index) => <TableEntry key={entry.id} entry={entry} index={index}/>);
  }


  return (
    <div>
      <Container>
        <Tabs>
          <TabList>
            { isTeacher === "teacher" && <Tab>Grupo/alumnos</Tab> }
            <Tab>Misiones</Tab>
            <Tab>Tabla de posiciones</Tab>
            { isTeacher === "student" && <Tab>Perfil</Tab> }
          </TabList>


          {isTeacher === "teacher" &&
            <TabPanel>
              <div>
                <Row className="mt-5 mb-3">
                  <Col lg={9}>
                    <h1>Grupo {id}</h1>
                  </Col>
                  <Col lg={3}>
                    <Button variant="warning" onClick={generateClassCode} className="float-end">
                      Generar código
                    </Button>
                  </Col>
                  <Col lg={12} className="mt-1">
                    {joinCode}
                  </Col>
                </Row>

                {/* <Row className="mt-4">
                  <Col lg={6}>
                    <h4>{loading ? "loading":missions.length} misiones</h4>
                  </Col>
                  <Col lg={6} className="text-end">
                    <h4>Promedio de misiones del grupo: {(99.8+0.1).toFixed(2)}</h4>
                  </Col>
                </Row> */}
                <hr />

                <Row className="mt-4">
                  <Col lg={12}>
                    <h4>Alumnos:</h4>
                  </Col>
                </Row>

                <Row className="mt-2">
                  <Col lg={12}>
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
              <GroupMissions />
            </TabPanel>
              
            <TabPanel>
              <h1>Tabla de posiciones del grupo</h1>
              { isTeacher === "student" && <h4>Estos son los mejores estudiantes</h4> }
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Matricula</th>
                    <th>HP 💗</th>
                    <th>XP ⭐</th>
                    <th>Monedas 💰</th>
                  </tr>
                </thead>
                <tbody>
                  {tableEntries}
                </tbody>
              </Table>
            </TabPanel>

          { isTeacher === "student" &&
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
