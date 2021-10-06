import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {getCookie} from '../../Functions/Cookies'

function MissionItem({mission}) {
  
  return (
    <Card>
      <Card.Body>
      <Card.Title>{mission.tittle}</Card.Title>
      <Card.Text>
        {mission.desc}
      </Card.Text>
      { getCookie("isTeacher") && <Button variant="primary" href="/edit/mission/1">Editar</Button> }
      {' '}
      { getCookie("isTeacher") && <Button variant="danger">Borrar</Button> }
      
    </Card.Body>
    </Card>
  )
}

export default MissionItem
