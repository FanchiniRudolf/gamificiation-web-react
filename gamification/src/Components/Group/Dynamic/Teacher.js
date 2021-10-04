import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Teacher() {
  return (
    // <div className="StudentGroup">
    <div>
      <Container>
      <Row className="mt-5 mb-3">
          <Col lg={4}>
           {' '} 
          </Col>
          <Col lg={8}>
            <Button variant="info">Ver grupo/alumnos</Button>{' '}
            <Button variant="info">Ver misiones</Button>{' '}
            <Button variant="info">Ver tabla de posiciones</Button>{' '}
          </Col>
          <Col lg={12}>
           <hr/> 
          </Col>
        </Row>
        
        <Row className="mt-5 mb-3">
          <Col lg={12}>
            <h1>Pantalla 1 de 3</h1>
            <h1>Grupo {1+1}</h1>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col lg={6}>
            <h4>{3*3} misiones</h4>
          </Col>
          
          <Col lg={6}>
            <h4>Promedio del grupo: {(99.8+0.1).toFixed(2)}</h4>
          </Col>

          {/* stretch goal: add min & max grade & logic to compute it */}
          
        </Row>
        
        <hr />
        <Row className="mt-4">
          <Col lg={12}>
            <h4>Alumnos:</h4>
          </Col>
        </Row>
        
        <Row className="mt-2">
          <Col lg={12}>
            <p>tabla con los alumnos (ordenados por matricula)</p>
          </Col>
        </Row>

        {/* screen 2 */}
        <Row>
          <Col lg={12}>
            <hr/>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg={12}>
            <h1>Pantalla 2 de 3</h1>
            <h1>Misiones del grupo</h1>
          </Col>
        </Row>

        {/* screen 3 */}
        <Row>
          <Col lg={12}>
            <hr/>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg={12}>
            <h1>Pantalla 2 de 3</h1>
            <h1>Tabla de posiciones del grupo</h1>
            <p>Estará ordenada por puntaje, NO por matrícula</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Teacher;
