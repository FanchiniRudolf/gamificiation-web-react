import React, {useContext} from 'react'
import { Button, Card, Col } from "react-bootstrap";
import Teacher from "./Dynamic/Teacher"
import { SessionContext } from '../../Hooks/sessionContext'

function CourseCard({course}) {

  const {isTeacher} = useContext(SessionContext)
  
  return (
    <div>
      {/* <Col lg={6}> */}
        <Card>
          <Card.Header>
            {/* TODO replace hard-coded route in href for dynamic route */}
            <Button variant="link" href="/Group/1">{course.name}</Button>
          </Card.Header>
          <Card.Body>
            <Card.Title>Grupo {3*3}</Card.Title>
            {/* TODO: after demo add data customer requests -
                might have to determine it how to get it first */}
            {/* <Card.Text>
              {1*1} Misiones en total
            </Card.Text> */}
            <div>
              { isTeacher && (<Teacher/>) }
            </div>
          </Card.Body>
        </Card>
      {/* </Col> */}
      
    </div>
  )
}

export default CourseCard
