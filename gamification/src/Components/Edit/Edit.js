import React, {useState} from 'react'
import { Form, Button,  } from 'react-bootstrap';
import { Form as FinalForm, Field as FinalFormField } from 'react-final-form'
import {useParams}  from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Edit() {

  const { type, id } = useParams();
  //call id 
  const info = {tittle:id, desc: "temp desc", date: new Date(), extra:"temp extra" }
  const [formDate, setFormDate] = useState(new Date());

  console.log(typeof type);

  // TODO add as params fields that will be received by form
  const onSubmit = () => {

  }


  const datePicker = (
    <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Fecha de Fin</Form.Label>
        <DatePicker /*TODO fix css*/
          selected={info.date}
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
            { textQuestion("Profesor que imparte", info.extra, "prof") }
            { textQuestion("Nombre Materia", info.extra, "sub") }
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
        <Form className="container-md text-center align-content-center">
        {textQuestion("Titulo", info.tittle, "tittle")}
        {textQuestion("Descripción", info.desc, "desc")}
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
  )
}

export default Edit
