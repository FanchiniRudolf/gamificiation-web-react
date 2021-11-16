import React, {useState, useContext} from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form';
import {setCookie, getCookie} from '../../Functions/Cookies'
import { Navigate } from "react-router-dom";
import { SessionContext } from '../../Hooks/sessionContext'
import useFetch from '../../Hooks/useFetch';

function Signup() {

  const API_BASE_URL  = process.env.REACT_APP_API_BASE_URL;
  const [body, setBody]= useState("notYet");
  
  // Using "POST Student" API endpoint
  const {loading, info} = useFetch(API_BASE_URL+"users",
    "POST",
    {},
    body) 
  const {setSession, setTeacherStatus, setUsername} = useContext(SessionContext)

  let message

  const onSignupSubmit = ({studentEmail, studentID, studentLastName, studentName, studentPassword, studentUsername}) => {
    setBody({
      "name": studentName,
      "last_name": studentLastName,
      "email": studentEmail,
      "username": studentUsername,
      "password": studentPassword,
      "school_id": studentID
    })
  }

  if (loading === null){
    message = <div></div>
  }else if(loading === true){
    message = "Cargando..."
  }else if (loading === false){
    if (info.error){
      message = <p style={{color: 'red'}}>
          Error al iniciar sesión: {info.error}
        </p>

    } else if(info.session.token) {
      setCookie("session_token", info.session.token)
      setCookie("user", info.session.user)
      setUsername(info.session.user.username)
      setTeacherStatus(info.session.user.role.name === "teacher")
      setSession(true)
      
      message = <div>
                  <p>Success!!</p>
                  <Navigate to="/groups" replace={false} />
                </div>
    }
  }


  return (
    <div>
      <Container>
        <Row>
          <Col lg={12} className='text-left mt-5 mb-5'>
            <h1>Crear cuenta</h1>
            <h2>¡Bienvenido!</h2>
            <h6>Si eres estudiante y es tu primera vez por aquí completa este paso.</h6>
          </Col>

          <Col lg={{offset: 4, span: 4}} className="mb-5"> 
          <FinalForm onSubmit={onSignupSubmit}>
            {({handleSubmit, submitting}) => (
              <Form>
                {/* ID */}
                <Form.Group controlId="studentID" className="mb-3">
                  <Form.Label>Matrícula</Form.Label>
                  <FinalFormField name='studentID'>
                    {({ input }) => (
                      <Form.Control {...input} type='text' placeholder='a01234567' size='lg' />
                    )}
                  </FinalFormField>
                </Form.Group>
                
                {/* name */}
                <Form.Group controlId="studentName" className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <FinalFormField name='studentName'>
                    {({ input }) => (
                      <Form.Control {...input} type='text' placeholder='Juan' size='lg' />
                    )}
                  </FinalFormField>
                </Form.Group>
                
                {/* last name */}
                <Form.Group controlId="studentLastName" className="mb-3">
                  <Form.Label>Apellido</Form.Label>
                  <FinalFormField name='studentLastName'>
                    {({ input }) => (
                      <Form.Control {...input} type='text' placeholder='Pérez' size='lg' />
                    )}
                  </FinalFormField>
                </Form.Group>

                {/* email */}
                <Form.Group controlId="studentEmail" className="mb-3">
                  <Form.Label>Correo institucional</Form.Label>
                  <FinalFormField name='studentEmail'>
                    {({ input }) => (
                      <Form.Control {...input} type='email' placeholder='a01234567@tec.mx' size='lg' />
                    )}
                  </FinalFormField>
                </Form.Group>

                {/* username */}
                <Form.Group controlId="studentUsername" className="mb-3">
                  <Form.Label>Nombre de usuario</Form.Label>
                  <FinalFormField name='studentUsername'>
                    {({ input }) => (
                      <Form.Control {...input} type='text' placeholder='juan3000' size='lg' />
                    )}
                  </FinalFormField>
                </Form.Group>

                {/* password */}
                <Form.Group controlId="studentPassword" className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <FinalFormField name='studentPassword'>
                    {({ input }) => (
                      <Form.Control {...input} type='password' size='lg' />
                    )}
                  </FinalFormField>
                </Form.Group>


                {message}
                <Button variant="primary" size='lg' type="submit" onClick={handleSubmit}>
                  Registrarme
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

export default Signup
