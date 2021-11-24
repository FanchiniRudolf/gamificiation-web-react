import React, {useContext} from 'react'
import {Card, Button} from 'react-bootstrap'
import {SessionContext} from '../../Hooks/sessionContext'

function MissionItem({mission}) {

  const {isTeacher} = useContext(SessionContext)
  
  return (
    <>
      <Card className="mt-2">
        <Card.Body>
        <Card.Title>{mission.title}</Card.Title>
        <Card.Text>
          {mission.description}
        </Card.Text>
        { isTeacher === "teacher" && <Button variant="primary" href={"/edit/mission/"+mission.id}>Editar</Button> }
        {' '}
        { isTeacher === "teacher" && <Button variant="danger">Borrar</Button> }
        {' '}
        { isTeacher === "teacher" && <Button variant="success" href={"/postMissionToGroup/"+mission.id}>Asignar a un grupo</Button> }

        
      </Card.Body>
      </Card>
    </>
  )
}

export default MissionItem
