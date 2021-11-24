import React from 'react'
import {Button} from 'react-bootstrap';

function TableEntry({entry, groupID, missionID}) {
  
  console.log(missionID)
  
  return (
    <tr className="text-center">
      <td>{entry.student.school_id}</td>
      <td>{entry.student.name}</td>
      <td>{entry.xp}</td>
      <td>{entry.coins}</td>
      <td>{entry['mission grade']}</td>
      <td>
        { entry['mission grade'] === null ? 
          <Button variant="success" href={`/Group/${groupID}/gradeMission/${missionID}/enrollment/${entry.id}`}>Calificar</Button> :
          <Button variant="primary" href={`/Group/${groupID}/editGradeMission/${missionID}/enrollment/${entry.id}`}>Editar</Button>
        }
      </td>
    </tr>
  )
}

export default TableEntry
