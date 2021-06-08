const initialState = {
  dataAplikasi: [],
  detailAplikasi: {},
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "fetch/dataAplikasi":
    return { ...state, dataAplikasi: payload }
  
  case "fetch/aplikasi":
    return { ...state, detailAplikasi: payload }
  
  case "set/loading":
    return { ...state, loading: payload }
  default:
    return state
  }
}
