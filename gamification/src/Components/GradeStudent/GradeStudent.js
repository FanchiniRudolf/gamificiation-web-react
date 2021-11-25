import React, {useState} from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form';
import { Navigate, useParams } from "react-router-dom";
import { getCookie } from '../../Functions/Cookies';
import useFetch from '../../Hooks/useFetch';

function GradeStudent() {
  
  const {groupId: groupID, missionId: missionID, enrollmentId: enrollmentID} = useParams()

  const API_BASE_URL  = process.env.REACT_APP_API_BASE_URL;
  const [body, setBody] = useState("notYet")
  const {loading, info} = useFetch(API_BASE_URL+"user-mission",
    "POST",
    {"Authorization": getCookie("session_token")},
    body)

  let message

  const navigateBack = () => {
    window.history.back()
  }
  
  
  const onGradeSubmit = () => {
    console.log(grade, coins, comments)
    console.log(missionID, enrollmentID)
    setBody({
      "enrollment_id": enrollmentID,
      "mission_id": missionID,
      "grade": grade,
      "coins": coins,
      "comments": comments
    })
  }


  if (loading === null) {
    message = <div></div>
  } else if (loading === true) {
    message = <p>Cargando...</p>
  } else if (loading === false) {
    if (info.error) {
      console.log("error", info.error)
      message = <p style={{color: 'red'}}>
          Error: {info.error}
        </p>
    } else if (info) {
      message = <div>
                  <Navigate to={-1} />
                </div>
    }
  }

  

  const [mission, setMission] = useState({grade:0, coins:0, comments:""});
  const [grade, setGrade] = useState(0);
  const [coins, setCoins] = useState(0);
  const [comments, setComments] = useState("");


  return (
    <div>
      <Container>
        <Row className="mt-5 mb-3">
          <Col lg={12}>
            <h1>Calificando misión {missionID}</h1>
          </Col>
        </Row>


        
        <Row className="mt-3">
          <Col lg={6}>
            <FinalForm onSubmit={onGradeSubmit}>
              {({handleSubmit, submitting}) => (
                <Form>
                  <Form.Group className="mb-3" controlId="grade">
                    <Form.Label><h5>Calificación</h5></Form.Label>
                    <Form.Control type="number" placeholder={grade}  onChange={(e) => {setGrade(Number(e.target.value))}}/>
                  </Form.Group>



                  <Form.Group className="mb-3" controlId="coins">
                    <Form.Label><h5>Monedas</h5></Form.Label>
                      <Form.Control type="number" placeholder={coins}  onChange={(e) => {setCoins(Number(e.target.value))}}/>
                  </Form.Group>



                  <Form.Group className="mb-3" controlId="comments">
                    <Form.Label><h5>Comentarios (opcional)</h5></Form.Label>
                    <Form.Control type="text" placeholder={comments}  onChange={(e) => {setComments(e.target.value)}}/>
                  </Form.Group>





                  {message}
                  <Button variant="success" type="submit" onClick={handleSubmit} className="mt-5">
                    Registrar
                  </Button>
                  {' '}
                  <Button variant="danger" onClick={navigateBack} className="float-end mt-5">
                    Cancelar
                  </Button>
                </Form>
              )}
            </FinalForm>





            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GradeStudent
