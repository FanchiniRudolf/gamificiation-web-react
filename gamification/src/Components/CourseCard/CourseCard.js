import React from 'react'
import { Button, Card } from "react-bootstrap";
import { getCookie } from "../../Functions/Cookies";
import Teacher from "./Dynamic/Teacher"

function CourseCard() {
  return (
    <div>
      <Card>
        <Card.Header>
          <Button variant="link">Nombre del curso</Button>
        </Card.Header>
        <Card.Body>
          <Card.Title>Número de grupo</Card.Title>
          <Card.Text>
            {1*1} Misiones en total
          </Card.Text>
          <div>
            {  getCookie("isTeacher") ?
              (<Teacher/>) :
              // (<></>)
              (<Teacher/>)
            }
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CourseCard
