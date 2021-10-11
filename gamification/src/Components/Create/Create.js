import React, {useState} from 'react'
import { Form, Button,  } from 'react-bootstrap';
import {useParams}  from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreatePeriod() {

  const { type } = useParams();
  const [startDate, setStartDate] = useState(new Date());

  console.log(typeof type);

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
      // TODO: merge course and group form, check fields agains data model
      case "course":
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
    
    // TODO: remove all references to group before removing this block
    case "group":
      return textQuestion("Nombre Materia", "Materia", "sub")

    case "subject":
      return;

      default:
        return <p>Error</p>
    }
  }

  return (
    <Form className="container-md text-center align-content-center">
      {textQuestion("Titulo", "Deme el Titulo", "tittle")}
      {textQuestion("Descripción", "Deme descripción", "desc")}
      {renderElement()}
      <Button variant="primary" type="submit">
          Crear {type}
      </Button>
      <Button variant="link">
          Cancelar
      </Button>
    </Form>
  )
}

export default CreatePeriod
