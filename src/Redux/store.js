import {combineReducers , createStore , applyMiddleware} from "redux"
import { AirportReducer } from "./airport/reducer"
import thunk from "redux-thunk"
import { FlightReducer } from "./flight/reducer"

const rootReducer = combineReducers({

    airport : AirportReducer,
    flight : FlightReducer
})

export const store = createStore(rootReducer , applyMiddleware(thunk))


