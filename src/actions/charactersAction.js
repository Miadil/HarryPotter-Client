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

export const getCharacters = () => disptach => {
  disptach(fetchStarted())
  axios
    .get("https://harrypotterapi20.herokuapp.com/characters")
    .then(data => disptach(fetchSucced(data.data)))
    .catch(err => disptach(fetchFailed(err)))
}
