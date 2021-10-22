import React from 'react'
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Teacher() {

const history = useHistory();

  const handleRoute = () => {
    // TODO: change hard-coded route
    history.push("/edit/group/1")
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
