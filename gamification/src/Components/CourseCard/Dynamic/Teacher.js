import React from 'react'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Teacher() {

const navigate = useNavigate();

  const handleRoute = () => {
    // TODO: change hard-coded route
    navigate("/edit/group/1", {replace: true})
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
