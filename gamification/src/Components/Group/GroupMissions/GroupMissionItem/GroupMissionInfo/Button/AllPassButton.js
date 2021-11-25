import React, {useState} from 'react'
import useFetch from '../../../../../../Hooks/useFetch';
import { useParams } from 'react-router';
import { getCookie } from '../../../../../../Functions/Cookies';
import { Button } from 'react-bootstrap';
import { Navigate } from "react-router-dom";



function AllPassButton() {

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL 

    const {groupId: groupID, missionId: missionID} = useParams()

    const [body, setBody]= useState("notYet");

    const {loading, info} = useFetch(API_BASE_URL + 'user-mission/100-to-all',
        "POST", {"Authorization": getCookie("session_token")}, body)


    const hundredAllStudents = () => {
        console.log("all got hundred yay");
        setBody({
            "group_id": groupID,
            "mission_id": missionID
        });
  }

  let message;

  if (loading === null) {
    message = <Button variant="success" onClick={hundredAllStudents} className="float-end">
              Poner 100 a todos
            </Button>
  } else if (loading === true) {
        message = <p>Cargando...</p>
  } else if (loading === false) {
    if (info.error){
       message = <div>
                <Button variant="success" onClick={hundredAllStudents} className="float-end">
                    Poner 100 a todos
                </Button>
                <p>Error: {info.error}</p>
        </div>
    }else{
        message = <Navigate to={0} replace={true} />
    }
  }



    return message;
}


export default AllPassButton;
