import React, { useState } from 'react'
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form';
import {setCookie, getCookie} from '../../Functions/Cookies'
import { Navigate } from "react-router-dom";
import useFetch from '../../Hooks/useFetch';


function ChangePass() {

  // const [successModalShow, setSuccessModalShow] = useState(false)
  // const handleModalShow = () => setSuccessModalShow(true)
  // const handleModalClose = () => setSuccessModalShow(false)

  const API_BASE_URL  = process.env.REACT_APP_API_BASE_URL;
  const [body, setBody] = useState("notYet")
  const {loading, info} = useFetch(API_BASE_URL+"password-recovery/change-password", "POST", {"Authorization": getCookie("session_token")}, body)

  let message
  let submitted = false

  const onSubmit = ({newPass}) => {
    try {
      submitted = true
      setBody({
        "new_password": newPass
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
    if (info.message === "Incorrect code") {
      message = <p style={{color: 'red'}}>
          Error: {info.error}
        </p>
    } else if (info.message === "Password changed successfully") {
      message = <div>
        <p>Listo!</p>
        {/* <Navigate to="/login" replace={false} /> */}
        <Button variant="success" size="lg" href="login" className="mb-5">
          De vuelta al login
        </Button>
      </div>
    }
  }

  return (
    <div>
      {/* <Modal show={successModalShow} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}


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

                {message}
                <Button variant="primary" size='lg' type="submit" onClick={handleSubmit} disabled={submitted}>
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
