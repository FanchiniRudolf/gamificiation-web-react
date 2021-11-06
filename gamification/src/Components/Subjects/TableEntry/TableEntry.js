import React from 'react'
import {Button} from 'react-bootstrap';


function TableEntry({entry, index}) {

  let date =  new Date(entry.created);
  
  return (
    <tr>
        <td>{index+1}</td>
        <td>{entry.name}</td>
        <td>{entry.details}</td>
        <td>{date.getDay()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}</td>
        <td>
            <Button variant="primary" href={'edit/subject/'+entry.id}>editar</Button>
            {' '}
            <Button variant="danger">eliminar</Button></td>
    </tr>
  )
}

export default TableEntry