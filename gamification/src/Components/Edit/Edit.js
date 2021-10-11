import React, {useState} from 'react'
import { Form, Button,  } from 'react-bootstrap';
import {useParams}  from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EditCourse() {

  const { type, id } = useParams();
  //call id 
  const info = {tittle:id, desc: "temp desc", date: new Date(), extra:"temp extra" }
  const [startDate, setStartDate] = useState(new Date());

  console.log(typeof type);

  const datePicker = (
    <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Fecha de Fin</Form.Label>
        <DatePicker /*TODO fix css*/selected={info.date} onChange={(date) => setStartDate(date)}>
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
            { textQuestion("Profesor que imparte", info.extra, "prof") }
            { textQuestion("Nombre Materia", info.extra, "sub") }
          </>
        )
      
      case "mission":
        return datePicker
        
    case "period":
        return datePicker

    // TODO: remove all references to group before removing this block
    case "group":
      return textQuestion("Nombre Materia", info.extra, "sub")

    case "subject":
      return;

      default:
        return <p>Error</p>
    }
  }

  return (
    <Form className="container-md text-center align-content-center">
      {textQuestion("Titulo", info.tittle, "tittle")}
      {textQuestion("Descripción", info.desc, "desc")}
      {renderElement()}
      <Button variant="primary" type="submit">
          Editar {type}
      </Button>
      <Button variant="link">
          Cancelar
      </Button>
    </Form>
  )
}

export default EditCourse
