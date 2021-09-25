import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form';

import './Login.css';
//@bobby - WIP
function Login() {
  
  const onLoginSubmit = async ({email, password}) => {
    try {
      await console.log(`mail: ${email}, pass: ${password}`);
    } catch (error) {
      console.log(error);
    }

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
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <FinalFormField name='email'>
                    {({ input }) => (
                      <Form.Control {...input} type='email' placeholder='a01234567@itesm.mx' size='lg' />
                    )}
                  </FinalFormField>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
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
            <Button variant="link">
              ¿Olvidaste tu contraseña?
            </Button>
            <Button variant="link">
              Registrarse
            </Button>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Login;
