import {combineReducers , createStore , applyMiddleware} from "redux"
import { AirportReducer } from "./airport/reducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({

    airport : AirportReducer
})

export const store = createStore(rootReducer , applyMiddleware(thunk))


