import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form';

function ChangePass() {
  const onSubmit = async ({newPass}) => {
    try {
      await console.log(`mail: ${newPass}`);
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
            <h6>Ahora ingresa una nueva contraseña para terminar.</h6>
          </Col>


          <Col lg={{offset: 4, span: 4}}> 
          <FinalForm onSubmit={onSubmit}>
            {({handleSubmit, submitting}) => (
              <Form>
                <Form.Group controlId="newPassForm" className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <FinalFormField name='newPass'>
                    {({ input }) => (
                      <Form.Control {...input} type='password' size='lg' />
                    )}
                  </FinalFormField>
                </Form.Group>

                
                <Button variant="primary" size='lg' type="submit" onClick={handleSubmit}>
                  Cambiar mi contraseña
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

export default ChangePass
