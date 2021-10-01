import React, {useState} from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Profile.css";
import {useParams}  from "react-router-dom";

//@dos
function StudentProfile() {


  const { id } = useParams();


  const [user] = useState({
    name: "John Doe", 
    id: id,
    profilePic:"http://dipsinternational.com/wp-content/uploads/2017/03/user-icon-fontawesome.png",
    group: 0,
    hp: 420,
    xp: 69,
    coins: 7
  }); //TODO make custom hook

  return (
    // <div className="Courses">
    <div>
      <Container>
        <Row className="text-center mt-2 mb-3">
          <Col lg={12}>
            <h2>Grupo  {user.group} </h2>
            <h2>Perfil de {user.id} </h2>
          </Col>
        </Row>
        <Row className="text-center mt-2 mb-5">
          <Col >
            <Image src={user.profilePic} alt="Profile Pic" roundedCircle /*TODO make dynamic*//> 
          </Col>
        </Row>
        <Row className="text-center mt-5 mb-3">
          <Col lg={12}>
            <h1>{user.name}</h1>
          </Col>
        </Row>
        <Row className="text-center mt-5 mb-3">
          <Col>
            <h2>{user.hp} 💗</h2>
          </Col>
          <Col >
            <h2>{user.xp} ⭐</h2>
          </Col>
          <Col >
            <h2>{user.coins} 🪙</h2>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default StudentProfile;
