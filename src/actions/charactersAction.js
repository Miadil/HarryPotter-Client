import * as types from "./types"
import axios from "axios"

const fetchStarted = () => {
  return {
    type: types.FETCH_STARTED,
    payload: true
  }
}
const fetchSucced = data => {
  return {
    type: types.FETCH_SUCCED,
    payload: data
  }
}

const fetchFailed = error => {
  return {
    type: types.FETCH_FAILED,
    payload: error
  }
}

export const getCharacters = url => disptach => {
  disptach(fetchStarted())
  axios
    .get(url)
    .then(data => disptach(fetchSucced(data.data)))
    .catch(err => disptach(fetchFailed(err)))
}
