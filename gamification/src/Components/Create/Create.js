import React, {useState} from 'react'
import { Form, Button,  } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form'
import {useParams}  from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useFetch from '../../Hooks/useFetch';
import {getCookie} from '../../Functions/Cookies'
import { Navigate } from "react-router-dom";

function Create() {

  const { type } = useParams();
  
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
  const API_BASE_URL  = process.env.REACT_APP_API_BASE_URL;
  
  const [body, setBody]= useState("notYet");
  const {loading, info} = useFetch(API_BASE_URL+urlType, "POST", {"Authorization": getCookie("session_token")}, body)
  const [startDate, setStarDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  let message;

  if (loading === null){
    message = <div></div>
  }else if(loading === true){
    message = <p>Loading</p>
  }else if (loading === false){
    if (info.error){
      message = <p style={{color: 'red'}}>
          Error al iniciar sesión: {info.error}
        </p>
    } else{
        message = <Navigate to={-1} />
    }
  }

  function dateToString(date){
    let day = date.getDate() < 10 ? "0"+String(date.getDate()) : String(date.getDate());
    let month = date.getMonth() +1 < 10 ?  "0"+String(date.getMonth()+1) : String(date.getMonth()+1);
    let year = String(date.getFullYear());
    return day+"-"+month+"-"+year;
  }

  
  
  const onSubmit = (formData) => {
    console.log("formdata:", formData)

    let bodyData = {};

    switch (type) {
      case "group":
        bodyData.name = formData.tittle;
        bodyData.course_id = 8; //todo
        bodyData.period_id = 8;
        break;
      case "mission": 
        bodyData.type_id = 2;
        bodyData.title = formData.tittle;
        bodyData.description = formData.desc;
        bodyData.xp = parseInt(formData.xp);
        break;
      case "period":
        bodyData.name = formData.tittle;
        bodyData.start_date = dateToString(startDate)
        bodyData.end_date = dateToString(endDate)
        break;
      case "subject":
        bodyData.name = formData.tittle;
        bodyData.details = formData.desc;
        break;
      default:
        break;
    }
    setBody(bodyData);
    
  }


  const startDatePicker = (
    <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Fecha de Inicio</Form.Label>
        {/* <FinalFormField name="date"> */}
        <DatePicker /*TODO fix css*/
          selected={startDate}
          onChange={(date) => setStarDate(date)}>
        </DatePicker>
        {/* </FinalFormField> */}
      </Form.Group>
    )

  const endDatePicker = (
    <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Fecha de Fin</Form.Label>
        {/* <FinalFormField name="date"> */}
        <DatePicker /*TODO fix css*/
          selected={endDate}
          onChange={(date) => setEndDate(date)}>
        </DatePicker>
        {/* </FinalFormField> */}
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
            { textQuestion("Profesor que imparte", "Deme el profesor", "prof") }

            {/* TODO this should be a select (combo box) element
            we should GET the subjects of the teacher and
            load them in here */}
            { textQuestion("Nombre Materia", "Materia", "sub") }
          </>
        )
        
      case "mission":
        return (<>
              { textQuestion("Descripción", "Indicar la descripción", "desc")}
              { textQuestion("Experienica", "Indicar la cantidad ganada", "xp")}
              </>);
        
      case "period":
        return (<>
        
          {startDatePicker}
          {endDatePicker}
          </>);
    
      case "subject": 
        return textQuestion("Descripción", "Indicar la descripción", "desc");

      default:
        return <p>Error</p>
    }
  }

  return (
    <FinalForm onSubmit={onSubmit}>
      {({handleSubmit, submitting}) => (
        <Form className="container-md text-center align-content-center mt-4">
        {textQuestion("Titulo", "Indicar el título", "tittle")}
        {renderElement()}
        
        <Button variant="primary" type="submit" onClick={handleSubmit}>
            Crear {type}
        </Button>
        <Button variant="link">
            Cancelar
        </Button>
        {message}
      </Form>
      )}
    </FinalForm>
  )
}

export default Create
