import React, {useState} from 'react'
import {Button} from 'react-bootstrap';
import useFetch from '../../Hooks/useFetch';
import {getCookie} from '../../Functions/Cookies'
import { Navigate } from "react-router-dom";


function DeleteButton({type, id}) {

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL 

    const [body, setBody]= useState("notYet");

    const {loading, info} = useFetch(API_BASE_URL + type+'/'+String(id),
        "DELETE", {"Authorization": getCookie("session_token")}, body)


    const deleteItem = () => {
        console.log("delete time", type, id);
        setBody("");
  }

  let message;

  if (loading === null) {
    message = <Button variant="danger" onClick={deleteItem}>Eliminar</Button>
  } else if (loading === true) {
        message = <Button variant="danger" >Cargando...</Button>
  } else if (loading === true) {
  } else if (loading === false) {
    if (info.error){
       message = <div>
                <Button variant="danger" onClick={deleteItem}>Eliminar</Button>
                <p>Error: {info.error}</p>
        </div>
    }else{
        message = <Navigate to={0} replace={true} />
    }
  }



    return message;
}


export default DeleteButton;
