import React, {useState} from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form'
import useFetch from '../../../Hooks/useFetch';
import { getCookie } from "../../../Functions/Cookies";
import { Navigate, useNavigate } from 'react-router-dom';
import Dropdown from "../../Create/Dropdown/Dropdown"

function SelectPeriodModal({missionID, modalShow, setModalShow}) {
  
  const navigate = useNavigate()

  const handleSelectModalShow = () => setModalShow(true)
  const handleSelectModalClose = () => setModalShow(false)

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  const [body, setBody] = useState("notYet")
  const {loading, info} = useFetch(API_BASE_URL + "periods",
    "GET",
    {"Authorization": getCookie("session_token")})

  let message
  let periodID

  const onSubmit = (formData) => {
    console.log(formData)
    periodID = formData.period_id
    console.log(periodID)
    navigate("/postMissionToGroup/"+missionID+"/period/"+periodID)
  }

  const navigateToMissionAssignment = (periodID) => {
    message = <Navigate to={"/postMissionToGroup/"+missionID+"/period/"+periodID} replace={false} />
    return message
  }
  
  return (
    <Modal size="md" centered show={modalShow} onHide={handleSelectModalClose}>
      <Modal.Header>
        <h2>Seleccionar periodo</h2>
      </Modal.Header>

      <FinalForm onSubmit={onSubmit}>
        {({handleSubmit, submitting}) => (
          <Form>
            <Modal.Body>
              <Form.Group controlId="period">
                <Form.Label>Periodo académico</Form.Label>
                {' '}
                <Dropdown type="period_id" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Ir a este periodo
              </Button>
              <Button variant="secondary" onClick={handleSelectModalClose}>
                Cancelar
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </FinalForm>
    </Modal>
  )
}

export default SelectPeriodModal
