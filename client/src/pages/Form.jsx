import React from 'react'

import FormComponent from '../components/Form'

export default function Form() {
  const onEdit = false
  return (
    <>
      <FormComponent
       edit={ onEdit }
       />
    </>
  )
}
