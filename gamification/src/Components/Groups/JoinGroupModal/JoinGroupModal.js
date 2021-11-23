import React, {useState} from 'react'
import { Modal, Form, Button } from "react-bootstrap";
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form';
import useFetch from '../../../Hooks/useFetch';
import { getCookie } from "../../../Functions/Cookies";


function JoinGroupModal({modalShow, setModalShow}) {

  const handleModalShow = () => setModalShow(true);
  const handleModalClose = () => setModalShow(false);

  const API_BASE_URL  = process.env.REACT_APP_API_BASE_URL;
  const [body, setBody]= useState("notYet");
  const {loading, info} = useFetch(API_BASE_URL + "users_groups",
    "POST",
    {"Authorization": getCookie("session_token")},
    body)

  const onSubmit = ({classCode}) => {
    console.log(classCode)
    setBody({
      "otp": classCode
    })
  }

  let responseMessage

  if (loading === null) {
    responseMessage = <div></div>
  } else if (loading === true) {
    responseMessage = <p>Cargando...</p>
  } else if (loading === false) {
    if (info.error) {
      responseMessage = <p style={{color: 'red'}}>
        Error: {info.error}
      </p>
    } else {
      responseMessage = <p style={{color: 'green'}}>
          Listo! Formas parte del grupo!
        </p>
      window.location.reload()
    }
  }

  return (
    <>
      <Modal size="md" centered show={modalShow} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Unirse a un grupo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FinalForm onSubmit={onSubmit}>
              {({handleSubmit, submitting}) => (
                <Form>
                <Form.Group className="mb-3" controlId="formClassCode">
                  <Form.Label>Ingresa el código de la clase dado por tu profesor</Form.Label>
                  <FinalFormField name='classCode'>
                    {({ input }) => (
                      <Form.Control {...input} type='text' placeholder='Código de clase' />
                    )}
                  </FinalFormField>
                </Form.Group>
                {responseMessage}
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Registrar
                </Button>
                <Button variant="link" onClick={handleModalClose}>
                  Cancelar
                </Button>
                
              </Form>
              )}
            </FinalForm> 
          </Modal.Body>
        </Modal>
    </>
  )
}

export default JoinGroupModal
