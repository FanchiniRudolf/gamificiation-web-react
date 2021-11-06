import React, {useState} from 'react'
import { Form, Button,  } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form'
import {useParams}  from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Create() {

  const { type } = useParams();
  const [startDate, setStartDate] = useState(new Date());

  // TODO add as params fields that will be received by form
  const onSubmit = () => {

  }


  const datePicker = (
    <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Fecha de Fin</Form.Label>
        <DatePicker /*TODO fix css*/selected={startDate} onChange={(date) => setStartDate(date)}>
        </DatePicker>
      </Form.Group>
    )

  const textQuestion = (tittle, desc, id) => {
    return( 
          <Form.Group className="mb-3" controlId={id}>
            <Form.Label>{tittle}</Form.Label>
            <Form.Control type="text" placeholder={desc} />
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
        <Button variant="primary" type="submit">
            Crear {type}
        </Button>
        <Button variant="link">
            Cancelar
        </Button>
      </Form>
      )}
    </FinalForm>
  )
}

export default Create
