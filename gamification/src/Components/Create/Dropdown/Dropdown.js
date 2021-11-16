import React, {useState, useContext} from 'react'
import useFetch from '../../../Hooks/useFetch';
import {Field as FinalFormField } from 'react-final-form';
import {getCookie} from '../../../Functions/Cookies'



function Dropdown({type}) {

    let urlType;
  
     if (type === "course_id"){
        urlType = "courses"
    }else if (type === "period_id"){
        urlType = "periods"
    }

    const API_BASE_URL  = process.env.REACT_APP_API_BASE_URL;
    const {loading, info} = useFetch(API_BASE_URL+urlType, "GET", {"Authorization": getCookie("session_token")}, null)


  let message;

  if (loading === null){
    message = <div></div>
  }else if(loading === true){
    message = (<FinalFormField name={type} component="select">
                    <option value="1">Loading</option>
            </FinalFormField>)
  }else if (loading === false){
      message = (
        <FinalFormField name={type} component="select">
            {info.map((entry) => (
                <option value={entry.id} >
                    {entry.name}
                </option>
            ))}
        </FinalFormField>)
    
  }

  return (
      message
  )
}

export default Dropdown;
