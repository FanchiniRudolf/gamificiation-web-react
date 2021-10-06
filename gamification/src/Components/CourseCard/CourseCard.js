import React from 'react'
import { Button, Card } from "react-bootstrap";
import { getCookie } from "../../Functions/Cookies";
import Teacher from "./Dynamic/Teacher"

function CourseCard() {
  return (
    <div>
      <Card>
        <Card.Header>
          <Button variant="link">Nombre del curso (dinámico)</Button>
        </Card.Header>
        <Card.Body>
          <Card.Title>Grupo {3*3}</Card.Title>
          {/* TODO: after demo add data customer requests -
              might have to determine it how to get it first */}
          {/* <Card.Text>
            {1*1} Misiones en total
          </Card.Text> */}
          <div>
            { getCookie("isTeacher") && (<Teacher/>) }
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CourseCard
