import React, {useState} from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function GradeStudent() {

  const [mission, setMission] = useState({hp:100, xp:50, coins:20});
  const [hp, setHp] = useState(0);
  const [xp, setXp] = useState(0);
  const [coins, setCoins] = useState(0);


  return (
    <div>
      <Container>
        <Row className="mt-5 mb-3">
          <Col lg={12}>
            <h1>Calificar misión</h1>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg={12}>
            <h3>Calificando a: {`nombre y matrícula del alumno`}</h3>
          </Col>
        </Row>

        <Form>
          <Row className="mt-3">
            <Col lg={6}>
              <h3>Misión</h3>

              <Form.Select aria-label="Default select example">
                <option>Misión a calificar</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="hp">
                <Form.Label><h5>HP a sumar o restar</h5></Form.Label>
                <Form.Control type="number" placeholder={hp}  onChange={(e) => {setHp(Number(e.target.value))}}/>
                <Form.Text className="text-muted">
                  HP Final: {hp + (mission.hp)}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="xp">
                <Form.Label><h5>XP a sumar o restar</h5></Form.Label>
                <Form.Control type="number" placeholder={xp}  onChange={(e) => {setXp(Number(e.target.value))}}/>
                <Form.Text className="text-muted">
                  XP Final: {xp + (mission.xp)}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-3 mb-5">
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="coins">
              <Form.Label><h5>Monedas a sumar o restar</h5></Form.Label>
                <Form.Control type="number" placeholder={coins}  onChange={(e) => {setCoins(Number(e.target.value))}}/>
                <Form.Text className="text-muted">
                  Monedas Finales: {coins + (mission.coins)}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>


          <Row className="mt-3 mb-5">
            <Col>
              <Button variant="danger">Cancelar</Button>
            </Col>
            <Col>
              {' '}
              <Button variant="success" type="submit">Registrar</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default GradeStudent
