import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getCookie } from '../../Functions/Cookies';
import useFetch from '../../Hooks/useFetch';
import MissionItem from '../MissionItem/MissionItem';

import './Missions.css';
function Missions() {

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  const{loading, info} = useFetch(API_BASE_URL + "missions",
    "GET",
    {"Authorization": getCookie("session_token")})

  let missionTable;

  if (loading === null) {
    missionTable = <div></div>
  } else if (loading === true) {
    missionTable = <p>Cargando...</p>
  } else if (loading === false) {
    // missionTable = <p>WIP</p>
    missionTable = info.map((mission) => <MissionItem key={mission.id} mission={mission} />)
    console.log(info)
  }

  return (
    <div>
      <Container>
        <Row className="mt-5 mb-3">
          <Col lg={9}>
            <h1>Misiones</h1>
          </Col>
          <Col lg={3}>
            <Button variant="primary" href="/create/mission" className="float-end">
              Crear
            </Button>
          </Col>

          <Col lg={12}>
            {missionTable}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Missions;
