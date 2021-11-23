import React, {useState} from 'react'
import { Form, Button,  } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form'
import {useParams}  from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useFetch from '../../Hooks/useFetch';
import {getCookie} from '../../Functions/Cookies'
import {dateToString} from '../../Functions/Dates'
import Dropdown from './Dropdown/Dropdown'



function Edit() {

  const API_BASE_URL  = process.env.REACT_APP_API_BASE_URL;
  const { type, id } = useParams();
  const [body, setBody] = useState("notYet");
  
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

  const {loading:postLoad, info:postInfo} = useFetch(API_BASE_URL+urlType, "PUT", 
              {"Authorization": getCookie("session_token")}, body)
  const {loading, info} = useFetch(API_BASE_URL+urlType, "GET", {"Authorization": getCookie("session_token")}, null)
  const [startDate, setStarDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  let data = {};


  const navigateBack = () => {
    window.history.back()
  }
  
  const onSubmit = (formData) => {
    console.log("formdata:", formData)

    let bodyData = {};

    switch (type) {
      case "group":
        bodyData.name = formData.tittle;
        bodyData.course_id = parseInt(formData.course_id);
        bodyData.period_id = parseInt(formData.period_id);
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
          <Button variant="link" onClick={navigateBack}>
            Cancelar
        </Button>
        </Form>
        )}
      </FinalForm>
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

  const dropDownQuestion = (tittle, formId, selectedId) => {
    return( 
          <Form.Group className="mb-3" controlId={formId}>
            <Form.Label>{tittle}</Form.Label>
            <Dropdown type={formId} selectedId={selectedId}/>
          </Form.Group>
        )
  }


   const renderElement = () => {
    switch (type) {
      case "group":
        return (
          <>
            { dropDownQuestion("Curso que se dara: ", "course_id", data.course_id) }
            { dropDownQuestion("Periodo en que se dara: ", "period_id", data.period_id) }
          </>
        )
      
      case "mission":
        return (<>
                { textQuestion("Descripción", data.desc, "desc")}
                { textQuestion("Experienica", "Indicar la cantidad ganada", "xp")}
                {startDatePicker}
                {endDatePicker}
              </>)
        
      case "period":
        return (<>
        
          {startDatePicker}
          {endDatePicker}
          </>);

      case "subject":
        return textQuestion("Descripción", data.desc, "desc");

      default:
        return <p>Error</p>
    }
  }

  return message;
}

export default Edit
