import React from 'react'
import { Modal } from "react-bootstrap";

function LoginModal({modalShow, setModalShow}) {

  const handleLoginModalShow = () => setModalShow(true);
  const handleLoginModalClose = () => setModalShow(false);

  return (
    <Modal size="md" centered show={modalShow} onHide={handleLoginModalClose}>
        <Modal.Body>
          <img src="/img/loading.gif" alt="loading"></img>
        </Modal.Body>
      </Modal>
  )
}

export default LoginModal
