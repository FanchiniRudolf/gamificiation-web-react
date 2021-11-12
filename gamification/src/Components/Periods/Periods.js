import React, {useContext} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getCookie } from '../../Functions/Cookies';

import {useFetch} from "../../Hooks/useFetch"
import './Periods.css';

function Periods() {

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  const { loading, info } = useFetch(API_BASE_URL + "periods",
    "GET",
    {"Authorization": getCookie("session_token")})

  let periodTable;
  if (loading === null) {
    periodTable = <div></div>
  } else if (loading === true) {
    periodTable = <p>Loading...</p>
  } else if (loading === false) {
    periodTable = <p>List goes here</p>
    // periodTable = info.map(periodInfo => )
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
            <Button variant="primary" size="md" href="/create/period">
              Crear
            </Button>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            {periodTable}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Periods;
