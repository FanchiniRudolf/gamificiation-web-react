import React from 'react'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DeleteButton from '../../Buttons/DeleteButton'

function Teacher({courseId}) {

const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/edit/group/"+courseId, {replace: true})
  }

  return (
    <div>
      <hr />
      <Button variant="primary" onClick={handleRoute}>editar</Button>
      {' '}
      <DeleteButton type={"groups"} id ={courseId}/>
    </div>
  )
}

export default Teacher
