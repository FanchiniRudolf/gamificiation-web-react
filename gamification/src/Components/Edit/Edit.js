import React, {useState, useEffect} from 'react'
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
  let titleType;
  
  if (type === "subject"){
    urlType = "courses"
    titleType = "name"
  }else if (type === "group"){
    urlType = "groups"
    titleType = "name"
  }else if (type === "mission"){
    urlType = "missions"
    titleType = "title"
  }else if (type === "period"){
    urlType = "periods"
    titleType = "name"
  }else {
    urlType = "error"
  }

  const {loading:postLoad, info:postInfo} = useFetch(API_BASE_URL+urlType+"/"+id, "PUT", 
              {"Authorization": getCookie("session_token")}, body);
  const {loading, info} = useFetch(API_BASE_URL+urlType, "GET", {"Authorization": getCookie("session_token")}, null);
  const [startDate, setStarDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  const [data, setData] = useState({});

  useEffect(() => {
    if (info){
      setData(info.filter(entry => parseInt(entry.id) === parseInt(id))[0]);
    }
  }, [info])

  useEffect(() => {
    if (data.start_date){
      setStarDate(new Date(data.start_date));
      setEndDate(new Date( data.end_date));
    }
  }, [data])

  const navigateBack = () => {
    window.history.back()
  }
  
  const onSubmit = (formData) => {
    console.log("formdata:", formData)

    let bodyData = {};

    switch (type) {
      case "group":
        bodyData.name = formData.tittle ?? data.tittle;
        bodyData.course_id = parseInt(formData.course_id ?? data.course_id) ;
        bodyData.period_id = parseInt(formData.period_id ?? data.period_id) ;
        break;
      case "mission": 
        bodyData.type_id = 2;
        bodyData.title = formData.tittle ?? data.tittle;
        bodyData.description = formData.desc ?? data.description;
        bodyData.xp = parseInt(formData.xp?? data.xp);
        break;
      case "period":
        bodyData.name = formData.tittle ?? data.tittle;
        bodyData.start_date = dateToString(startDate ?? data.start_date);
        bodyData.end_date = dateToString(endDate ?? data.end_date);
        break;
      case "subject":
        bodyData.name = formData.tittle ?? data.tittle;
        bodyData.details = formData.desc ?? data.details;
        break;
      default:
        break;
    }
    setBody(bodyData);
    console.log("body", body);
    
  }

  let message, editMessage;

  if (loading === null){
    message = <div></div>
  }else if(loading === true){
    message = <p>Loading</p>
  }else if (loading === false){
    message = <FinalForm onSubmit={onSubmit}>
        {({handleSubmit, submitting}) => (
          <Form className="container-md text-center align-content-center">
          {textQuestion("Titulo", data[titleType], "tittle")}
          {renderElement()}
          <Button variant="primary" type="submit" onClick={handleSubmit}>
              Actualizar datos ({type})
          </Button>
          <Button variant="link" onClick={navigateBack}>
            Cancelar
        </Button>
        </Form>
        )}
      </FinalForm>
  }

  if (postLoad === null){
    editMessage = <div></div>
  }else if(postLoad === true){
    editMessage = <p>Loading</p>
  }else if (postLoad === false){
    if (postInfo.error){
      editMessage = <p style={{color: 'red'}}>
          Error al editar: {postInfo.error}
        </p>
    } else {
      window.history.back();
      console.log("exit")
    }
  }


  const startDatePicker = (
    <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Fecha de Inicio</Form.Label>
        <DatePicker /*TODO fix css*/
          selected={startDate} dateFormat="dd/MM/yyyy"
          onChange={(date) => setStarDate(date)}>
        </DatePicker>
      </Form.Group>
    )

  const endDatePicker = (
    <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Fecha de Fin</Form.Label>
        <DatePicker /*TODO fix css*/
          selected={endDate} dateFormat="dd/MM/yyyy"
          onChange={(date) => setEndDate(date)}>
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
                { textQuestion("Descripción", data.description, "desc")}
                { textQuestion("Experiencia", data.xp, "xp")}
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

  return (<div>
    {message}
    {editMessage}
    </div>);
}

export default Edit
