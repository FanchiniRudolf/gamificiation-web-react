import React, {useContext, useState} from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form';
import { Navigate } from "react-router-dom";
import { SessionContext } from '../../Hooks/sessionContext';
import {setCookie, getCookie} from '../../Functions/Cookies'
import useFetch from '../../Hooks/useFetch';

function ValidateCode() {

  const API_BASE_URL  = process.env.REACT_APP_API_BASE_URL;
  const [body, setBody] = useState("notYet")
  const {loading, info} = useFetch(API_BASE_URL+"password-recovery/validate-code", "POST", {}, body)
  const {setSession} = useContext(SessionContext)

  let message

  const onSubmit = ({validationCode}) => {
    try {
      setBody({
        "otp": validationCode
      })
    } catch (error) {
      console.log(error);
    }
  }

  if(loading === null) {
    message = <div></div>
  } else if (loading === true) {
    message = <p>Cargando...</p>
  } else if (loading === false) {
    if (info.error) {
      message = <p style={{color: 'red'}}>
          Error: {info.error}
        </p>
    } else if (info.session.token) {
      setCookie("session_token", info.session.token)
      message = <div>
        <p>Success!</p>
        <Navigate to="/setNewPassword" replace={false} />
      </div>
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <Col lg={12} className='text-center mt-5 mb-5'>
            <h1>Restablecer contraseña</h1>
          </Col>

          <Col lg={12} className='text-left mt-5 mb-4'>
            <h6>Introduce el código de recuperación que te enviamos por correo.</h6>
          </Col>


          <Col lg={{offset: 4, span: 4}}> 
          <FinalForm onSubmit={onSubmit}>
            {({handleSubmit, submitting}) => (
              <Form>
                <Form.Group controlId="validationCodeForm" className="mb-3">
                  <Form.Label>Código de recuperación:</Form.Label>
                  <FinalFormField name='validationCode'>
                    {({ input }) => (
                      <Form.Control {...input} type='text' placeholder='tu código' size='lg' />
                    )}
                  </FinalFormField>
                </Form.Group>

                {message}
                <Button variant="primary" size='lg' type="submit" onClick={handleSubmit}>
                  Validar código
                </Button>
              </Form>
            )} 
          </FinalForm> 
          </Col>

          <Col lg={{offset: 4, span: 4}} className='text-center mt-3'>
            <Button variant="link" href="login">
              Cancelar
            </Button>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default ValidateCode
