import React, {useState, useContext} from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form';
import useFetch from '../../Hooks/useFetch';
import {createUUID} from '../../Functions/UUID'
import {setCookie, getCookie} from '../../Functions/Cookies'
import { Navigate } from "react-router-dom";
import { SessionContext } from '../../Hooks/sessionContext'
import LoginModal from './Modal/LoginModal'
import './Login.css';


function Login() {

  const API_BASE_URL  = process.env.REACT_APP_API_BASE_URL;
  const [body, setBody]= useState("notYet");
  const {loading, info} = useFetch(API_BASE_URL+"sessions/login", "POST", {}, body) 
  const {setSession, setTeacherStatus, setUsername} = useContext(SessionContext)
  const [modalShow, setModalShow] = useState(true);

  let message, roleName;
  
  const onLoginSubmit = ({email, password}) => {
    let uuid = getCookie('uuid') || createUUID();
    setCookie('uuid', uuid);
    setBody({
      "email": email,
      "password": String(password),
      "device_uuid": uuid
    })
  }

  if (loading === null){
    message = <div></div>
  }else if(loading === true){
    message = <LoginModal modalShow={modalShow} setModalShow={setModalShow} />
  }else if (loading === false){
    if (info.error){
      message = <p style={{color: 'red'}}>
          Error al iniciar sesión: {info.error}
        </p>

    } else if(info.session.token) {
      setCookie("session_token", info.session.token)
      setCookie("user", info.session.user)
      setUsername(info.session.user.username)
      setTeacherStatus(info.session.user.role.name === "teacher")
      roleName = info.session.user.role.name
      console.log(roleName)
      setSession(true)

      if (roleName === "teacher") {
        message = <div>
                  <p>Success!!</p>
                  <Navigate to="/periods" replace={false} />
                </div>
      } else if (roleName === "student") {
        message = <div>
                  <p>Success!!</p>
                  <Navigate to="/groups" replace={false} />
                </div>
      }
    }
  }
    
  
  return (
    // <div className="Login">
    <div>
      <Container>
        <Row>
          <Col lg={12} className='text-center mt-5 mb-5'>
            <h1>Iniciar sesión</h1>
          </Col>


          <Col lg={{offset: 4, span: 4}}> 
          <FinalForm onSubmit={onLoginSubmit}>
            {({handleSubmit, submitting}) => (
              <Form>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <FinalFormField name='email'>
                    {({ input }) => (
                      <Form.Control {...input} type='email' placeholder='a01234567@itesm.mx' size='lg' />
                    )}
                  </FinalFormField>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <FinalFormField name='password'>
                    {({ input }) => (
                      <Form.Control {...input} type='password' size='lg' />
                    )}
                  </FinalFormField>
                </Form.Group>
                {message}
                <Button variant="primary" size='lg' type="submit" onClick={handleSubmit}>
                  Iniciar sesión
                </Button>
              </Form>
            )} 
          </FinalForm>
          </Col>

          <Col lg={{offset: 4, span: 4}} className='text-center mt-3'>
            <Button variant="link" href="forgotpass">
              ¿Olvidaste tu contraseña?
            </Button>
            <Button variant="link" href="signup">
              Registrarse
            </Button>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Login;
