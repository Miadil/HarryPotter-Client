import { combineReducers } from "redux"
import charactersReducer from "./charactersReducer"

const rootReducer = combineReducers({
  charactersReducer: charactersReducer
})

export default rootReducer
