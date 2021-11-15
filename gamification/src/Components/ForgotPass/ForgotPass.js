import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form';
import { Navigate } from "react-router-dom";
import useFetch from '../../Hooks/useFetch';

function ForgotPass() {

  const API_BASE_URL  = process.env.REACT_APP_API_BASE_URL;
  const [body, setBody] = useState("notYet")
  const {loading, info} = useFetch(API_BASE_URL+"password-recovery/request", "POST", {}, body)

  let message
  
  const onSubmit = ({email}) => {
    try {
      setBody({
        "email": email
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
    } else if (info.message === "OTP saved successfully") {
      message = <div>
        <p>Success!</p>
        <Navigate to="/validateRecoverCode" replace={false} />
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
            <h6>Introduce tu la dirección de correo de tu cuenta para que te enviemos un código de recuperación y validar que se trata de ti.</h6>
          </Col>


          <Col lg={{offset: 4, span: 4}}> 
          <FinalForm onSubmit={onSubmit}>
            {({handleSubmit, submitting}) => (
              <Form>
                <Form.Group controlId="emailForm" className="mb-3">
                  <Form.Label>Ingresa tu correo</Form.Label>
                  <FinalFormField name='email'>
                    {({ input }) => (
                      <Form.Control {...input} type='email' placeholder='a01234567@itesm.mx' size='lg' />
                    )}
                  </FinalFormField>
                </Form.Group>

                {message}
                <Button variant="primary" size='lg' type="submit" onClick={handleSubmit}>
                  Enviarme un correo
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

export default ForgotPass
