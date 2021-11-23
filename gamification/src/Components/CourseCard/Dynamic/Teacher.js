import React from 'react'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
      <Button variant="danger">eliminar</Button>
    </div>
  )
}

export default Teacher
