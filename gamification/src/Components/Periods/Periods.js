import React, {useContext} from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { getCookie } from '../../Functions/Cookies';

import {useFetch} from "../../Hooks/useFetch"
import './Periods.css';
import TableEntry from './TableEntry/TableEntry';

function Periods() {

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  const { loading, info } = useFetch(API_BASE_URL + "periods",
    "GET",
    {"Authorization": getCookie("session_token")})

  let periodTable;
  if (loading === null) {
    periodTable = <div></div>
  } else if (loading === true) {
    periodTable = <p>Cargando...</p>
  } else if (loading === false) {
    periodTable = info.map((period, index) => <TableEntry key={period.id} entry={period} index={index}/>)
    console.log(info)
  }

  return (
    <div>
      <Container>
      <Row className="mt-5 mb-3">
          <Col lg={9}>
            <h1>Periodos académicos</h1>
          </Col>
          <Col lg={3}>
            <Button variant="primary" size="md" href="/create/period" className="float-end">
              Crear
            </Button>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Fecha de inicio</th>
                  <th>Fecha de fin</th>
                </tr>
              </thead>
              <tbody>
                {periodTable}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Periods;
