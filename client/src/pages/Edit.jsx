import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchDetailAplikasi } from '../store/action'

import Form from '../components/Form'

export default function Edit() {

  const { id } = useParams()
  const onEdit = true
  const dispatch = useDispatch()
  const { loading, detailAplikasi } = useSelector(state => state)

  useEffect(() => {
    dispatch(fetchDetailAplikasi({id}))
  }, [dispatch])

  if (loading === true) {
    return <div>Loading</div>
  }

  return (
    <Form 
      edit={ onEdit }
      data={ detailAplikasi }
    />
  )
}
