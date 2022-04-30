
import { FLIGHT_ERROR , FLIGHT_LOADING , FLIGHT_SUCCESS } from "./action";

const initState = {

    Loading : false,
    Flights : [],
    error : false
}

export const FlightReducer = ( store=initState ,{type , payload}) =>{

    switch(type){

        case FLIGHT_LOADING :
        return {...store , Loading :true}

        case FLIGHT_SUCCESS :
        return {...store , Loading : false , Flights : [...payload]}

        case FLIGHT_ERROR :
        return {...store , error : true}

        default :
        return store

    }
}