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

  const textQuestion = (tittle, desc) => {
    return( 
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>{tittle}</Form.Label>
            <Form.Control type="text" placeholder={desc} />
          </Form.Group>
        )
  }


   const renderElement = () => {
    switch (type) {
      case "course":
        return textQuestion("Profesor que imparte", info.extra)
      
      case "mission":
        return datePicker
        
    case "period":
        return datePicker

    case "group":
      return textQuestion("Nombre Materia", info.extra)

    case "subject":
      return;

      default:
        return <p>Error</p>
    }
  }

  return (
    <Form className="container-md text-center align-content-center">
      <Form.Group className="mb-3 justify-content-center " controlId="formTitle">
              <Form.Label>Titulo</Form.Label>
              <Form.Control type="text" placeholder={info.tittle} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Descripción</Form.Label>
              <Form.Control type="text" placeholder={info.desc} />
      </Form.Group>
      {renderElement()}
      <Button variant="primary" type="submit">
          Editar {type}
      </Button>
    </Form>
  )
}

export default EditCourse
