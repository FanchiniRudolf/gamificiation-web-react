import React, {useState} from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Profile.css";
import { useFetch } from "../../Hooks/useFetch";
import {useParams}  from "react-router-dom";
import { getCookie } from "../../Functions/Cookies";

function StudentProfile() {

  let userCookie = getCookie("user")
  console.log(userCookie)

  let studentObject = {
    id: userCookie.id,
    nickname: userCookie.username,
    name: userCookie.name,
    lastName: userCookie.last_name
  }

  console.log("studentobj:", studentObject)


  const { id } = useParams();
  console.log("groupID en profile:", id)

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  const {loading, info} = useFetch(API_BASE_URL + "users_groups/student-info?group_id="+id+"&student_id="+studentObject.id,
    "GET",
    {"Authorization": getCookie("session_token")})
  console.log("info GET para Profile:", info);

  let userGroupXP, userGroupCoins

  if (loading === null) {
    userGroupXP = <div></div>
    userGroupCoins = <div></div>
  } else if (loading === true) {
    userGroupXP = <p>Cargando...</p>
    userGroupCoins = <p>Cargando...</p>
  } else if (loading === false) {
    userGroupXP = info.xp
    userGroupCoins = info.coins
  }


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
        <Row className="text-center mt-3 mb-3">
          <Col lg={12}>
            {/* <h2>Grupo  {user.group} (quitar)</h2> */}
            <h2>Mi perfil</h2>
          </Col>
        </Row>
        <Row className="text-center mt-2 mb-5">
          <Col >
            <Image src={user.profilePic} alt="Profile Pic" roundedCircle /*TODO make dynamic*//> 
          </Col>
        </Row>
        <Row className="text-center mt-5 mb-3">
          <Col lg={12}>
            <h1>{studentObject.name} {studentObject.lastName}</h1>
          </Col>
        </Row>
        <Row className="text-center mt-5 mb-3">
          <Col >
            <h2>{userGroupXP} ⭐</h2>
          </Col>
          <Col >
            <h2>{userGroupCoins} 💰</h2>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default StudentProfile;
