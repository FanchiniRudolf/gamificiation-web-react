import React from 'react'
import { Button } from "react-bootstrap";

function Teacher() {

  const handleRoute = () => {
    // history.pushState("/edit")
    console.log('should handle route');
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
