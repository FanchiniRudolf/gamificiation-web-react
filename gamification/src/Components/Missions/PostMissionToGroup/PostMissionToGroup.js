import React, {useState, useContext} from 'react'
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form';
import useFetch from '../../../Hooks/useFetch';
import { getCookie, setCookie } from "../../../Functions/Cookies";
import { Navigate, useParams } from "react-router-dom";
import { SessionContext } from "../../../Hooks/sessionContext";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker"



function PostMissionToGroup() {

  const { id: missionID } = useParams()
  console.log("missionID:", missionID)

  const [startDate, setStartDate] = useState(new Date())
  const [dueDate, setDueDate] = useState(new Date())

  const [startTime, setStartTime] = useState("10:01")
  const [dueTime, setDueTime] = useState("23:59")

  const API_BASE_URL  = process.env.REACT_APP_API_BASE_URL;
  const [body, setBody]= useState("notYet");
  let {loading, info} = useFetch(API_BASE_URL+"missions-to-groups",
    "POST",
    {"Authorization": getCookie("session_token")},
    body)

  

  let message

  const onSubmit = ({group}) => {
    console.log(missionID)
    console.log(group)
    
    let strStartDate, strDueDate
    strStartDate = `${startDate.toISOString().replace(/T.*/,'').split('-').reverse().join('-')} ${startTime}:00`
    console.log(strStartDate)

    strDueDate = `${dueDate.toISOString().replace(/T.*/,'').split('-').reverse().join('-')} ${dueTime}:59`
    console.log(strDueDate)

    setBody({
      "mission_id": missionID,
      "group_id": group,
      "start_date": strStartDate,
      "delivery_date": strDueDate
    })
  }

  if (loading === null) {
    message = <div></div>
  } else if (loading === true) {
    message = "Cargando..."
  } else if (loading === false) {
    if (info.error) {
      console.log("error")
      message = <p style={{color: 'red'}}>
          Error al iniciar sesión: {info.error}
        </p>
    } else if (info) {
      console.log(info)
      message = <div>
                  <p>Success!!</p>
                  <Navigate to="/missions" replace={false} />
                </div>
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col lg={12} className='text-left mt-5 mb-5'>
            <h2>Agregar esta misión a un grupo</h2>
            <h6>Seleccione un grupo al cual asignar esta misión, con su fecha y hora límite</h6>
          </Col>

          <Col lg={{offset: 4, span: 4}} className="mb-5"> 
          <FinalForm onSubmit={onSubmit}>
            {({handleSubmit, submitting}) => (
              <Form>
                {/* group */}
                <Form.Group controlId="group" className="mb-3">
                  <Form.Label>Grupo</Form.Label>
                  <FinalFormField name="group" component="select">
                      {({ input }) => (
                        <Form.Control {...input} as="select" custom>
                          <option>Seleccionar</option>
                          <option>3</option>
                          <option>4</option>
                        </Form.Control>
                      )}
                    </FinalFormField>
                </Form.Group>
                
                {/* start date */}
                <Form.Group className="mb-3" controlId="startDate">
                  <Form.Label>Fecha de inicio</Form.Label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}>
                  </DatePicker>
                </Form.Group>

                {/* start time */}
                <Form.Group controlId="startTime" className="mb-3">
                  <Form.Label>Hora de inicio</Form.Label>
                  <br/>
                  <TimePicker
                    value={startTime}
                    onChange={setStartTime}>
                  </TimePicker>
                </Form.Group>
                
                {/* due date */}
                <Form.Group className="mb-3" controlId="dueDate">
                  <Form.Label>Fecha límite</Form.Label>
                  <DatePicker
                    selected={dueDate}
                    onChange={(date) => setDueDate(date)}>
                  </DatePicker>
                </Form.Group>

                
                {/* due time */}
                <Form.Group controlId="dueTime" className="mb-3">
                  <Form.Label>Hora límite</Form.Label>
                  <br/>
                  <TimePicker
                    value={dueTime}
                    onChange={setDueTime}>
                  </TimePicker>
                </Form.Group>


                {message}
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Agregar al grupo
                </Button>
              </Form>
            )} 
          </FinalForm>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PostMissionToGroup
