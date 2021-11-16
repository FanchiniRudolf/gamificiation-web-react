import React, {useState} from 'react'
import { Form, Button,  } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form'
import {useParams}  from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useFetch from '../../Hooks/useFetch';
import {getCookie} from '../../Functions/Cookies'



function Edit() {

  const API_BASE_URL  = process.env.REACT_APP_API_BASE_URL;
  const { type, id } = useParams();
  
  //call id 
  let urlType;
  
  if (type === "subject"){
    urlType = "courses"
  }else if (type === "group"){
    urlType = "groups"
  }else if (type === "mission"){
    urlType = "missions"
  }else if (type === "period"){
    urlType = "periods"
  }else {
    urlType = "error"
  }

  const {loading, info} = useFetch(API_BASE_URL+urlType, "GET", {"Authorization": getCookie("session_token")}, null)
  const [formDate, setFormDate] = useState(new Date());
  let data = {};


  // TODO add as params fields that will be received by form
  const onSubmit = () => {

  }

  let message;

  if (loading === null){
    message = <div></div>
  }else if(loading === true){
    message = <p>Loading</p>
  }else if (loading === false){
    console.log(info);
    data = info.filter(entry => String(entry.id) === id)[0];
    console.log(data);
    message = <FinalForm onSubmit={onSubmit}>
        {({handleSubmit, submitting}) => (
          <Form className="container-md text-center align-content-center">
          {textQuestion("Titulo", data.name, "tittle")}
          {renderElement()}
          <Button variant="primary" type="submit">
              Actualizar datos ({type})
          </Button>
          <Button variant="link">
              Cancelar
          </Button>
        </Form>
        )}
      </FinalForm>
  }


  const datePicker = (
    <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Fecha de Fin</Form.Label>
        <DatePicker /*TODO fix css*/
          selected={Date.parse(data.end_date)}
          onChange={(date) => setFormDate(date)}>
        </DatePicker>
      </Form.Group>
    )

  const textQuestion = (tittle, desc, id) => {
    return( 
          <Form.Group className="mb-3" controlId={id}>
            <Form.Label>{tittle}</Form.Label>
            <FinalFormField name={id}>
              {({input}) => (
                <Form.Control {...input} type="text" placeholder={desc} />
              )}
            </FinalFormField>
          </Form.Group>
        )
  }


   const renderElement = () => {
    switch (type) {
      // TODO: check fields against data model when API is implemented
      case "group":
        return (
          <>
            { textQuestion("Profesor que imparte", data.extra, "prof") }
            { textQuestion("Nombre Materia", data.extra, "sub") }
          </>
        )
      
      case "mission":
        return (<>
                { textQuestion("Descripción", data.desc, "desc")}
                {datePicker}
              </>)
        
      case "period":
          return datePicker;

      case "subject":
        return datePicker;

      default:
        return <p>Error</p>
    }
  }

  return message;
}

export default Edit
