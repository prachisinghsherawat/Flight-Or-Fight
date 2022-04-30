
import { AIRPORT_LOADING , AIRPORT_SUCCESS , AIRPORT_ERROR } from "./action";

const initState = {

    Loading : false,
    Airports : [],
    error : false
}

export const AirportReducer = (store = initState ,{type , payload}) => {

    switch(type){

        case AIRPORT_LOADING : 
        return {...store , Loading : true}

        case AIRPORT_SUCCESS : 
        return {...store , Loading : false , Airports : [...payload]}

        case AIRPORT_ERROR :
        return {...store , error : true}

        default : 
        return store

    }
}

