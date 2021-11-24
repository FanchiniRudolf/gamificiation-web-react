import React from 'react'
import {Button} from 'react-bootstrap';

function TableEntry({entry, index}) {

  let date =  new Date(entry.created);

  // console.log(entry.id)

  return (
    <tr>
        <td>{index+1}</td>
        <td>
          <Button variant="link" href={"/periodGroups/"+entry.id}>
            {entry.name}
          </Button>
        </td>
        <td>{entry.start_date}</td>
        <td>{entry.end_date}</td>
        <td className="text-center">
            <Button variant="primary" href={"edit/period/"+entry.id}>editar</Button>
            {' '}
            <Button variant="danger">eliminar</Button>
        </td>
    </tr>
  )
}

export default TableEntry
