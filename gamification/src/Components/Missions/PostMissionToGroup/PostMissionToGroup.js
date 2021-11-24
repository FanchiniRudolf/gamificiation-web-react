import React, {useState, useContext} from 'react'
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form';
import useFetch from '../../../Hooks/useFetch';
import { getCookie, setCookie } from "../../../Functions/Cookies";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { SessionContext } from "../../../Hooks/sessionContext";
import PeriodGroupDropdown from './PeriodGroupDropdown/PeriodGroupDropdown';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker"




function PostMissionToGroup() {

  const navigate = useNavigate()

  const { missionId: missionID, periodId: periodID } = useParams()
  // console.log("missionID:", missionID)
  // console.log("periodID:", periodID)


  const [startDate, setStartDate] = useState(new Date())
  const [dueDate, setDueDate] = useState(new Date())

  const [startTime, setStartTime] = useState("10:01")
  const [dueTime, setDueTime] = useState("23:59")

  const API_BASE_URL  = process.env.REACT_APP_API_BASE_URL;
  const [body, setBody]= useState("notYet");
  
  const {loading: postLoading, info: postInfo} = useFetch(API_BASE_URL+"missions-to-groups",
    "POST",
    {"Authorization": getCookie("session_token")},
    body)


  

  let message, postMessage

  const onSubmit = ({group}) => {
    console.log("submitting missionID:", missionID)
    console.log("submitting groupID:", group)
    
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


  if (postLoading === null) {
    postMessage = <div></div>
  } else if (postLoading === true) {
    postMessage = "Cargando..."
  } else if (postLoading === false) {
    if (postInfo.error) {
      console.log("error")
      postMessage = <p style={{color: 'red'}}>
          Error: {postInfo.error}
        </p>
    } else if (postInfo) {
      console.log(postInfo)
      postMessage = <div>
                  <p>Listo!</p>
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
          {' '}
          <PeriodGroupDropdown periodID={periodID} />
          
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


        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Agregar al grupo
        </Button>
        <Button variant="link" onClick={() => { navigate("/missions") }}>
            Cancelar
        </Button>
      </Form>
    )} 
  </FinalForm>
            {postMessage}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PostMissionToGroup
