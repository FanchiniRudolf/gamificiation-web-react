import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form';

function ValidateCode() {
  const onSubmit = async ({validationCode}) => {
    try {
      await console.log(`código: ${validationCode}`);
    } catch (error) {
      console.log(error);
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
