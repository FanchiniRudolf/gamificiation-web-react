import React, {useState} from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form';
import useFetch from '../../Hooks/useFetch';
import {createUUID} from '../../Functions/UUID'
import {setCookie, getCookie} from '../../Functions/Cookies'

import './Login.css';
//@bobby - WIP
function Login() {

  

  const { API_BASE_URL } = process.env; //TODO @Rudy fix undefined from apibase
  const [body, setBody]= useState("notYet");
  const {loading, info} = useFetch(API_BASE_URL+"sessions/login", "POST", {}, body) 

  console.log(API_BASE_URL)
  let message;
  
  const onLoginSubmit = ({email, password}) => {
    let uuid = getCookie('uuid') || createUUID();
    setCookie('uuid', uuid);
    console.log("inside")
    setBody({
      "email": email,
      "password": password,
      "device_uuid": uuid
    })
  }

  if (loading === null){
    message = <div></div>
  }else if(loading === true){
    message = <p>loading</p>
  }else if (loading === false){
    message = <p>Success</p>
  }
    
  
  return (
    // <div className="Login">
    <div>
      <Container>
        <Row>
          <Col lg={12} className='text-center mt-5 mb-5'>
            <h1>Iniciar sesión</h1>
          </Col>


          <Col lg={{offset: 4, span: 4}}> 
          <FinalForm onSubmit={onLoginSubmit}>
            {({handleSubmit, submitting}) => (
              <Form>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <FinalFormField name='email'>
                    {({ input }) => (
                      <Form.Control {...input} type='email' placeholder='a01234567@itesm.mx' size='lg' />
                    )}
                  </FinalFormField>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <FinalFormField name='password'>
                    {({ input }) => (
                      <Form.Control {...input} type='password' size='lg' />
                    )}
                  </FinalFormField>
                </Form.Group>
                <Button variant="primary" size='lg' type="submit" onClick={handleSubmit}>
                  Iniciar sesión
                </Button>
              </Form>
            )} 
          </FinalForm>
            
          </Col>

          <Col lg={{offset: 4, span: 4}} className='text-center mt-3'>
            <Button variant="link" href="forgotpass">
              ¿Olvidaste tu contraseña?
            </Button>
            <Button variant="link" href="signup">
              Registrarse
            </Button>
          </Col>

        </Row>
      </Container>
      {message}
    </div>
  );
}

export default Login;
