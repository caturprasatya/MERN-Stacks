import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/aplikasi'

export const setDataAplikasi = (payload) => ({
  type: 'fetch/dataAplikasi',
  payload
})

export const setDetailAplikasi = (payload) => ({
  type: 'fetch/aplikasi',
  payload
})

export const setLoading = (payload) => ({
  type: 'set/loading',
  payload
})

export const fetchDataAplikasi = ({ category, query }) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))
      switch (category) {
        case 'all':
          const { data } = await axios({
            url: baseUrl,
            method: "GET"
          })
          dispatch(setDataAplikasi(data))
          break;
        case 'search':
          // const { data } = await axios({
          //   url: baseUrl,
          //   method: "GET"
          // })
          // dispatch(setDataAplikasi(data))
          // dispatch(setLoading(true))
          break;
        default:
          break;
      }
      dispatch(setLoading(false))
    } catch (error) {
      console.log(error);
    }
  }
}

export const fetchDetailAplikasi = (payload) => {
  const { id } = payload
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: baseUrl+'/'+id,
        method: "GET"
      })
      console.log(data);
      dispatch(setLoading(true))
      dispatch(setDetailAplikasi(data))
      dispatch(setLoading(false))
    } catch (error) {
     console.log(error); 
    }
  }
}

export const addNewData = (payload) => {
  const { nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan, history } = payload
  const allData = { nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan }
  return async (dispatch) => {
    try {
      await axios({
        url: baseUrl,
        method: "POST",
        data: allData
      })
      dispatch(fetchDataAplikasi({category: 'all'}))
      history.push('/')
    } catch (error) {
     console.log(error)
    }
  }
}

export const editDataAplikasi = (payload) => {
  const { id } = payload
  const { nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan, history } = payload
  const allData = { nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan }
  return async (dispatch) => {
    try {
      await axios({
        url: baseUrl+'/'+id,
        method: "PUT",
        data: allData
      })
      dispatch(fetchDataAplikasi({category: 'all'}))
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteDataAplikasi = (payload) => {
  const { id, Swal } = payload

  return async (dispatch) => {
    try {
      await axios({
        url: baseUrl+'/'+id,
        method: "DELETE"
      })
      dispatch(fetchDataAplikasi({category: 'all'}))
      Swal.fire('Deleted', 'You successfully deleted this file', 'success')
    } catch (error) {
      console.log(error)
    }
  }
}

