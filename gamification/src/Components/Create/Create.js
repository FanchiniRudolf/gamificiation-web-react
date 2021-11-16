import React, {useState} from 'react'
import { Form, Button,  } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form'
import {useParams}  from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Create() {

  const { type } = useParams();
  const [formDate, setFormDate] = useState(new Date());

  const navigateBack = () => {
    window.history.back()
  }

  
  const onSubmit = (formData) => {
    console.log("formdata:", formData)
    console.log(formDate)
  }


  const datePicker = (
    <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Fecha de Fin</Form.Label>
        {/* <FinalFormField name="date"> */}
        <DatePicker /*TODO fix css*/
          selected={formDate}
          onChange={(date) => setFormDate(date)}>
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
        return datePicker
        
      case "period":
          return datePicker
    
      case "subject":
        return;

      default:
        return <p>Error</p>
    }
  }

  return (
    <FinalForm onSubmit={onSubmit}>
      {({handleSubmit, submitting}) => (
        <Form className="container-md text-center align-content-center mt-4">
        {textQuestion("Titulo", "Indicar el título", "tittle")}
        {textQuestion("Descripción", "Indicar la descripción", "desc")}
        {renderElement()}
        <Button variant="primary" type="submit" onClick={handleSubmit}>
            Crear {type}
        </Button>
        <Button variant="link" onClick={navigateBack}>
            Cancelar
        </Button>
      </Form>
      )}
    </FinalForm>
  )
}

export default Create
