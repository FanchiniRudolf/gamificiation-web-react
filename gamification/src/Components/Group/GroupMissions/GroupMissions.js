import React, {useContext} from "react";
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import MissionItem from "../../MissionItem/MissionItem";
import { getCookie } from "../../../Functions/Cookies";
import { useFetch } from "../../../Hooks/useFetch";
import { SessionContext } from "../../../Hooks/sessionContext";
import GroupMissionItem from "./GroupMissionItem/GroupMissionItem";
import { useParams } from "react-router-dom";

function GroupMissions() {

  const {isTeacher} = useContext(SessionContext)
  const { id: groupID } = useParams()
  console.log("group ID:", groupID)


  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  const { loading, info } = useFetch(API_BASE_URL+"missions-to-groups/"+groupID,
    "GET", {"Authorization": getCookie("session_token")})
  console.log(info);
  let missions;

  if (loading === null) {
    missions = <div></div>
  } else if (loading === true) {
    missions = <p>Cargando...</p>
  } else if (loading === false) {
    missions = info.map(mission => <GroupMissionItem key={mission.mission.id} mission={mission}/>);
  }

  return (
    <>
    <Row className="mt-4">
      <Col lg={12}>
      <h1>Misiones del grupo</h1>
        </Col>
        <Col lg={12}>
          {missions}
        </Col>
      </Row>
    </>
  )
}

export default GroupMissions
