import React from 'react'
import { Button } from "react-bootstrap";

function Teacher() {
  return (
    <div>
      <hr />
      <Button variant="primary">editar</Button>
      {' '}
      <Button variant="danger">eliminar</Button>
    </div>
  )
}

export default Teacher
