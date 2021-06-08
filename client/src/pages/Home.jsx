import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Table from '../components/Table'

import {
  fetchDataAplikasi
} from '../store/action'


export default function Home() {

  const history = useHistory()
  const dispatch = useDispatch()
  const { loading, dataAplikasi } = useSelector(state => state)
  
  useEffect(() => {
    dispatch(fetchDataAplikasi({ category: 'all' }))
  }, [dispatch])
  
  function handleButtonAdd(event) {
    event.preventDefault()
    history.push('/aplikasi')
  }

  if (loading === true) {
    return <div> Loading...</div>
  }

  return (
    <>
      <Navbar

      />
      <div className="container">
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" type="submit" onClick={ handleButtonAdd }>Tambah Data Aplikasi</button>
          <button className="btn btn-primary" type="submit">Button</button>
        </div>
      </div>
      <Table
        data={ dataAplikasi }
       />  
    </>
  )
}
