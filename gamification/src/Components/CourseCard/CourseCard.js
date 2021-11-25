import React, {useContext} from 'react'
import { Button, Card, Col } from "react-bootstrap";
import Teacher from "./Dynamic/Teacher"
import { SessionContext } from '../../Hooks/sessionContext'

function CourseCard({course}) {

  const {isTeacher} = useContext(SessionContext)
  
  return (
    <div>
        <Card className="mt-2">
          <Card.Header>
            <Button variant="link" href={"/Group/"+course.id}>{course.name}</Button>
          </Card.Header>
          <Card.Body>
            <Card.Title>Grupo {course.id}</Card.Title>
            <div>
              { isTeacher === "teacher" && (<Teacher courseId={course.id}/>) }
            </div>
          </Card.Body>
        </Card>
    </div>
  )
}

export default CourseCard
