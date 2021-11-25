import React, {useState, useContext} from 'react'
import {Card, Button} from 'react-bootstrap'
import {SessionContext} from '../../Hooks/sessionContext'
import SelectPeriodModal from '../Missions/Modal/SelectPeriodModal'
import DeleteButton from '../Buttons/DeleteButton'

function MissionItem({mission}) {

  const {isTeacher} = useContext(SessionContext)

  const [selectModalShow, setSelectModalShow] = useState(false)
  
  return (
    <>
      <SelectPeriodModal missionID={mission.id} modalShow={selectModalShow} setModalShow={setSelectModalShow} />

      <Card className="mt-2">
        <Card.Body>
        <Card.Title>{mission.title}</Card.Title>
        <Card.Text>
          {mission.description}
        </Card.Text>
        { isTeacher === "teacher" && <Button variant="primary" href={"/edit/mission/"+mission.id}>Editar</Button> }
        {' '}
        { isTeacher === "teacher" && <DeleteButton type={"missions"} id ={mission.id}/> }
        {' '}
        { isTeacher === "teacher" && <Button variant="success" onClick={() => setSelectModalShow(true)} >Asignar a un grupo</Button> }

        
      </Card.Body>
      </Card>
    </>
  )
}

export default MissionItem
