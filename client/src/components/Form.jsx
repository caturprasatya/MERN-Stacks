import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addNewData, editDataAplikasi  } from '../store/action'

export default function Form({ edit, data : detailData }) {
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()
  const [data, setData] = useState({
    nama_aplikasi: '',
    keterangan: '',
    jumlah_pengguna: 0,
    pendiri: '',
    tanggal_didirikan: '' 
  })

  useEffect(() => {
    if (edit === true) {
      setData({
        ...data,
        nama_aplikasi: detailData.nama_aplikasi,
        keterangan: detailData.keterangan,
        jumlah_pengguna: detailData.jumlah_pengguna,
        pendiri: detailData.pendiri,
        tanggal_didirikan: detailData.tanggal_didirikan
      })
      console.log(detailData);
    }
  }, [dispatch])

  function handleChange(event) {
    const { value, name } = event.target
    setData({
      ...data, [name]:value
    })
  }

  function handleButtonBack(event) {
    event.preventDefault()
    history.push('/')
  }

  function handleButtonAdd(event) {
    event.preventDefault()
    dispatch(addNewData({...data, history}))
  }

  function handleButtonEdit(event) {
    event.preventDefault()
    dispatch(editDataAplikasi({ ...data, history, id}))
  }

  return (
    <div className="col-md-8 offset-md-2">
      <span className="anchor" id="formUserEdit"></span>
      <hr className="my-5" />

      <div className="card card-outline-secondary">
        <div className="card-header">
          <h3 className="mb-0">Tambah Informasi Aplikasi</h3>
        </div>
        <div className="card-body">
          <form className="form" role="form" >
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">Nama Aplikasi</label>
              <div className="col-lg-9" >
                <input className="form-control" type="text" placeholder="Jane" value={ data.nama_aplikasi } name="nama_aplikasi" required onChange={ handleChange } />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">Jumlah Pengguna</label>
              <div className="col-lg-9">
                <input className="form-control" type="number" placeholder="1.000000" value={ data.jumlah_pengguna } name="jumlah_pengguna" onChange={ handleChange } required />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">Pendiri</label>
              <div className="col-lg-9">
                <input className="form-control" type="text" placeholder="e.g Mark Zu..." value={ data.pendiri } name="pendiri" onChange={ handleChange } required />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label" name="tanggal_didirikan">Tanggal Didirikan</label>
              <div className="col-lg-9">
                <input className="form-control" type="date" onChange={ handleChange } name="tanggal_didirikan" value={ data.tanggal_didirikan } required />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">Keterangan</label>
              <div className="col-lg-9">
                <textarea className="form-control" placeholder="..." name="keterangan" onChange={ handleChange } value={ data.keterangan } required />
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-between">
                <button className="btn btn-light shadow mr-3" type="submit" onClick={ handleButtonBack }>Back</button>
                {
                  edit === true ?
                    <button className="btn btn-primary shadow" type="submit" onClick={ handleButtonEdit }>Edit Data Aplikasi</button>
                  :  
                    <button className="btn btn-primary shadow" type="submit" onClick={ handleButtonAdd }>Tambah Data Aplikasi</button>
                }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
