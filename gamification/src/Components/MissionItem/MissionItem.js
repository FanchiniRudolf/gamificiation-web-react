import React, {useContext} from 'react'
import {Card, Button} from 'react-bootstrap'
import {SessionContext} from '../../Hooks/sessionContext'

function MissionItem({mission}) {

  const {isTeacher} = useContext(SessionContext)
  
  return (
    <>
      <Card>
        <Card.Body>
        <Card.Title>{mission.title}</Card.Title>
        <Card.Text>
          {mission.description}
        </Card.Text>
        { isTeacher && <Button variant="primary" href="/edit/mission/1">Editar</Button> }
        {' '}
        { isTeacher && <Button variant="danger">Borrar</Button> }
        
      </Card.Body>
      </Card>
    </>
  )
}

export default MissionItem
