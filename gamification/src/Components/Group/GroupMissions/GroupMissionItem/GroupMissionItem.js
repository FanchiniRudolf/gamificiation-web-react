import React, { useState, useContext } from 'react'
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap';
import { SessionContext } from "../../../../Hooks/sessionContext";
import { useParams } from "react-router-dom";
import { getCookie } from "../../../../Functions/Cookies";
import useFetch from '../../../../Hooks/useFetch';

function GroupMissionItem({mission}) {
  
  const {isTeacher} = useContext(SessionContext)
  const { id: groupID } = useParams()
  console.log("group ID en missions:", groupID)

  const API_BASE_URL  = process.env.REACT_APP_API_BASE_URL;
  const [body, setBody]= useState("notYet");
  const {loading, info} = useFetch(API_BASE_URL + "missions-to-groups",
    "DELETE",
    {"Authorization": getCookie("session_token")},
    body)

  const onDeleteMissionToGroup = (id) => {
    console.log(id)
    console.log(groupID)
  }
  
  // TODO add double zero when getMinutes returns 0
  // TODO prettify date
  let strStartDate = mission.start_date
  let startDateType = new Date(strStartDate)
  let startDay = startDateType.toLocaleDateString("es-MX")
  let startTime = `${String(startDateType.getHours())}:${String(startDateType.getMinutes())}`
  let formattedStartTime = `${startDay} a las ${startTime}`


  let strDeliveryDate = mission.delivery_date
  let deliveryDateType = new Date(strDeliveryDate)
  let deliveryDay = deliveryDateType.toLocaleDateString("es-MX")
  let deliveryTime = `${String(deliveryDateType.getHours())}:${String(deliveryDateType.getMinutes())}`
  let formattedDeliveryDate = `${deliveryDay} a las ${deliveryTime}`
  
  return (
    <>
      <Card>
        <Card.Body>
        <Card.Title>
          { isTeacher === "teacher" && <Button variant="link" href={"/Group/"+groupID+"/mission/"+mission.mission.id}>
            {mission.mission.title}
          </Button>}
          { isTeacher === "student" && mission.mission.title}
        </Card.Title>
          <Card.Text>
            {mission.mission.description}
          </Card.Text>
          <Card.Text>
            Fecha de inicio: { formattedStartTime }
          </Card.Text>
          <Card.Text>
            Fecha de entrega: { formattedDeliveryDate }
          </Card.Text>
          <Card.Text>
            Promedio acumulado: { mission.average }
          </Card.Text>
          { isTeacher === "teacher" && <Button variant="danger" onClick={ () => onDeleteMissionToGroup(mission.mission.id) }>Eliminar de este grupo</Button> }
      </Card.Body>
      </Card>
    </>
  )
}

export default GroupMissionItem
