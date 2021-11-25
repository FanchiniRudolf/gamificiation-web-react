import React from 'react'
import useFetch from '../../../../Hooks/useFetch'
import {Field as FinalFormField} from 'react-final-form'
import {getCookie} from '../../../../Functions/Cookies'

function PeriodGroupDropdown({periodID}) {
  
  console.log("periodID en dd:",periodID)

  const API_BASE_URL  = process.env.REACT_APP_API_BASE_URL;
  const {loading, info} = useFetch(API_BASE_URL + "groups?period_id=" + periodID,
    "GET",
    {"Authorization": getCookie("session_token")})
  console.log("GET pgd info:", info)

  let message
  
  if (loading === null) {
    message = <div></div>
  } else if (loading === true) {
    message = (<FinalFormField name="group" component="select">
                    <option value="1">Loading</option>
            </FinalFormField>)
  }else if (loading === false){
      message = (
        <FinalFormField name="group" component="select" initialValue={info[0]?.id ?? null}>
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

export default PeriodGroupDropdown
