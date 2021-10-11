import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form';

function ForgotPass() {

  const onLoginSubmit = async ({email}) => {
    try {
      await console.log(`mail: ${email}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // TODO: @Bobby
    <div>
      <Container>
        <Row>
          <Col lg={12} className='text-center mt-5 mb-5'>
            <h1>Restablecer contraseña</h1>
          </Col>


          <Col lg={{offset: 4, span: 4}}> 
          <FinalForm onSubmit={onLoginSubmit}>
            {({handleSubmit, submitting}) => (
              <Form>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Correo de recuperación</Form.Label>
                  <FinalFormField name='email'>
                    {({ input }) => (
                      <Form.Control {...input} type='email' placeholder='a01234567@itesm.mx' size='lg' />
                    )}
                  </FinalFormField>
                </Form.Group>

                
                <Button variant="primary" size='lg' type="submit" onClick={handleSubmit}>
                  Enviar correo
                </Button>
              </Form>
            )} 
          </FinalForm> 
          </Col>

          <Col lg={{offset: 4, span: 4}} className='text-center mt-3'>
            <Button variant="link" href="login">
              Regresar
            </Button>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default ForgotPass
