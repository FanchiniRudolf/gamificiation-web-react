import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { useFetch } from "../../Hooks/useFetch"
import { getCookie } from "../../Functions/Cookies";
import TableEntry from "./TableEntry/TableEntry"

import './Subjects.css';


function Subjects() {

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  const { loading, info } = useFetch(API_BASE_URL+"courses",
    "GET", {"Authorization": getCookie("session_token")})

    let tableEntries;

    if (loading == null){
      tableEntries = <div/>
    }else if (loading === true){
      tableEntries = <p>Loading</p>
    }else if (loading === false){
      tableEntries = info.map((course, index) => <TableEntry entry={course} index={index}/>)
    }


  return (
    // <div className="StudentGroup">
    <div>
      <Container>
      <Row className="mt-5 mb-3">
          <Col lg={9}>
            <h1>Mis Materias</h1>
          </Col>
          <Col lg={3}>
            <Button variant="primary" size="md" href="/create/subject">
              Crear
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Materias que imparte el profesor</p>
            <p>Lista con opciones de editar o eliminar la entrada de la lista</p>
          </Col>
        </Row>
        <Row>
          <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Fecha de creación</th>
                  </tr>
                </thead>
                <tbody>
                  {tableEntries}
                </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default Subjects;
