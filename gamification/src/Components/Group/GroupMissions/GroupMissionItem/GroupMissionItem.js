import React from 'react'
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap';

function GroupMissionItem({mission}) {
  
  // TODO add double zero when getMinutes returns 0
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
        <Card.Title>{mission.mission.title}</Card.Title>
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
      </Card.Body>
      </Card>
    </>
  )
}

export default GroupMissionItem
