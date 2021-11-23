import React, {useState} from 'react'
import { Modal, Button } from "react-bootstrap";
import useFetch from '../../../../../Hooks/useFetch';
import { getCookie } from "../../../../../Functions/Cookies";

function UnbindMissionModal({modalShow, setModalShow, missionID, groupID}) {

  const handleUnbindModalShow = () => setModalShow(true)
  const handleUnbindModalClose = () => setModalShow(false)

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  const [body, setBody] = useState("notYet")
  const {loading, info} = useFetch(API_BASE_URL + "missions-to-groups",
    "DELETE",
    {"Authorization": getCookie("session_token")},
    body)

    
  let message
  
  const unbindMissionFromGroup = () => {
    console.log(`in modal - mission: ${missionID}, group: ${groupID}`)
    setBody({
      "mission_id": missionID,
      "group_id": groupID
    })
  }

  if (loading === null) {
    message = <div></div>
  } else if (loading === true) {
    message = "Cargando..."
  } else if (loading === false) {
    if (info.error) {
      console.log("error")
      message = <p style={{color: 'red'}}>
          Error: {info.error}
        </p>
    } else if (info) {
      message = <p style={{color: 'green'}}>
          Éxito
        </p>
      window.location.reload()
    }
  }

  return (
    <Modal size="md" centered show={modalShow} onHide={handleUnbindModalClose}>
      <Modal.Header>
        <h2>Confirmación</h2>
      </Modal.Header>
      <Modal.Body>
        <p>Esto desvinculará esta misión de este grupo. Los alumnos pertenecientes a este grupo ya no podrán verla ni podrá calificarse.</p>
        <p>¿Desea llevar a cabo esta acción?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" type="submit" onClick={unbindMissionFromGroup}>
          Quitar misión del grupo
        </Button>
        <Button variant="secondary" onClick={handleUnbindModalClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UnbindMissionModal
