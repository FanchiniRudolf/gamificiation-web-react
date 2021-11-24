import React from 'react'
import {Button} from 'react-bootstrap';

function TableEntry({entry}) {
  return (
    <tr className="text-center">
      <td>{entry.student.school_id}</td>
      <td>{entry.student.name}</td>
      <td>{entry.xp}</td>
      <td>{entry.coins}</td>
      <td>{entry['mission grade']}</td>
      <td>
        { entry['mission grade'] === null ? 
          <Button variant="success">Calificar</Button> :
          <Button variant="primary">Editar</Button>
        }
      </td>
    </tr>
  )
}

export default TableEntry
