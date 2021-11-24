import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form';
import { Navigate, useParams } from "react-router-dom";
import { getCookie } from "../../Functions/Cookies";
import useFetch from "../../Hooks/useFetch"

function EditStudentGrade() {

  const {groupId: groupID, missionId: missionID, enrollmentId: enrollmentID} = useParams()
  console.log(`params: mission - ${missionID}, enrollment - ${enrollmentID}`)

  let message, editMessage

  const API_BASE_URL  = process.env.REACT_APP_API_BASE_URL;
  const [body, setBody] = useState("notYet")

  const {loading: putLoading, info: putInfo} = useFetch(API_BASE_URL+`user-mission?enrollment_id=${enrollmentID}&mission_id=${missionID}`,
    "PUT",
    {"Authorization": getCookie("session_token")},
    body)
  
  const {loading, info} = useFetch(API_BASE_URL + `user-mission?enrollment_id=${enrollmentID}&mission_id=${missionID}`,
    "GET",
    {"Authorization": getCookie("session_token")},
    null)
  console.log("GET info:",info)
  // console.log("grade:", info.grade)
  // console.log("comments:", info.comments)

    const [data, setData] = useState({});
    
    // useEffect(() => {
    //   if (info) {
    //     setData(info.filter(entry => parseInt(entry.id) === parseInt(id))[0])
    //   }
    // }, [info])

  const navigateBack = () => {
    window.history.back()
  }

  const onGradeSubmit = (formdata) => {
    console.log(formdata)

    let bodyData = {}

    bodyData.grade = formdata.grade ?? info.grade
    bodyData.coins = formdata.coins ?? info.coins
    bodyData.comments = formdata.comments ?? info.comments
    
    setBody(bodyData)
    console.log("body", body)
  }

  // const [mission, setMission] = useState({grade:0, coins:0, comments:""});
  const [grade, setGrade] = useState(null);
  const [coins, setCoins] = useState(null);
  const [comments, setComments] = useState(null);


  if (loading === null) {
    message = <div></div>
  } else if (loading === true) {
    message = <p>Cargando...</p>
  } else if (loading === false) {
    message = <FinalForm onSubmit={onGradeSubmit}>
    {({handleSubmit, submitting}) => (
      <Form>
        <Form.Group className="mb-3" controlId={grade}>
          <Form.Label><h5>Calificación</h5></Form.Label>
          <FinalFormField name="grade">
            {({input}) => (
              <Form.Control {...input} type="number" placeholder={info.grade} />
            )}
          </FinalFormField>
        </Form.Group>


        <Form.Group className="mb-3" controlId={coins}>
          <Form.Label><h5>Monedas</h5></Form.Label>
          <FinalFormField name="coins">
          {({input}) => (
              <Form.Control {...input} type="number" placeholder={info.coins} />
            )}
          </FinalFormField>
        </Form.Group>

        <Form.Group className="mb-3" controlId={comments}>
          <Form.Label><h5>Comentarios (opcional)</h5></Form.Label>
          <FinalFormField name="comments">
          {({input}) => (
              <Form.Control {...input} type="text" placeholder={info.comments} />
            )}
          </FinalFormField>
        </Form.Group>

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
  }


  if (putLoading === null) {
    editMessage = <div></div>
  } else if (putLoading === true) {
    editMessage = <p>Cargando...</p>
  } else if (putLoading === false) {
    if (putInfo.error) {
      editMessage = <p style={{color: 'red'}}>
          Error al editar: {putInfo.error}
        </p>
    } else {
      editMessage = <div>
      <Navigate to={-1} />
    </div>
    }
  }


  return (
    <div>
      <Container>
        <Row className="mt-5 mb-3">
          <Col lg={12}>
            <h1>Modificando calificación de misión {missionID}</h1>
          </Col>
        </Row>


        
        <Row className="mt-3">
          <Col lg={6}>
            {message}
            {editMessage}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EditStudentGrade
