import React from 'react'
import {Button} from 'react-bootstrap';
import DeleteButton from "../../Buttons/DeleteButton"


function TableEntry({entry, index}) {

  let date =  new Date(entry.created);
  
  return (
    <tr>
        <td>{index+1}</td>
        <td>{entry.name}</td>
        <td>{entry.details}</td>
        <td>{date.getDay()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}</td>
        <td className="text-center">
            <Button variant="primary" href={'edit/subject/'+entry.id}>Editar</Button>
            {' '}
            <DeleteButton type={"courses"} id ={entry.id}/>
        </td>
    </tr>
  )
}

export default TableEntry