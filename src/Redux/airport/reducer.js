
import { AIRPORT_LOADING , AIRPORT_SUCCESS , AIRPORT_ERROR } from "./action";

const initState = {

    Loading : false,
    airports : [],
    error : false
}

export const AirportReducer = (store = initState ,{type , payload}) => {

    switch(type){

        case AIRPORT_LOADING : 
        return {...store , Loading : true}

        case AIRPORT_SUCCESS : 
        return {...store , Loading : false , airports : [...payload]}

        case AIRPORT_ERROR :
        return {...store , error : true}

        default : 
        return store

    }
}

