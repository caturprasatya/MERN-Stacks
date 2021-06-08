import React from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { deleteDataAplikasi } from '../store/action'

export default function Table({ data }) {
  const dispatch = useDispatch()
  const history = useHistory()
  
  function handleDeleteData(event, id) {
    event.preventDefault()
    Swal.fire({
      title: 'Are you sure?',
      text: 'You can\'t revert your action',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes Delete it!',
      cancelButtonText: 'No, Keep it!',
      showCloseButton: true,
      showLoaderOnConfirm: true
    }).then((result) => {
      if (result.value) {
        dispatch(deleteDataAplikasi({Swal: Swal, id}))
      } else {
        Swal.fire('Cancelled', 'Your file is still intact', 'info')
      }
    })
  }

  function handleEditDataAplikasi(event, id) {
    event.preventDefault()
    history.push('/aplikasi/'+id)
  }


  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col w-10">Nama Aplikasi</th>
            <th scope="col">Keterangan</th>
            <th scope="col">Jumlah Pengguna</th>
            <th scope="col">Pendiri</th>
            <th scope="col">Tahun Didirikan</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map(dataAplikasi => 
              <tr key={dataAplikasi.id}>
                <td>{ dataAplikasi.nama_aplikasi }</td>
                <td>{ dataAplikasi.keterangan }</td>
                <td>{ dataAplikasi.jumlah_pengguna }</td>
                <td>{ dataAplikasi.pendiri }</td>
                <td>{ dataAplikasi.tanggal_didirikan }</td>
                <td>
                  <span>
                    <button className="btn btn-info" type="submit" onClick={event => handleEditDataAplikasi(event, dataAplikasi.id) }>Edit</button>
                    <button className="btn btn-danger" type="submit" onClick={event => handleDeleteData(event, dataAplikasi.id) }>Delete</button>
                  </span>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
