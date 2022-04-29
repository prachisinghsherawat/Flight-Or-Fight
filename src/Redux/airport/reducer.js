
import { AIRPORT_LOADING , AIRPORT_SUCCESS , AIRPORT_ERROR } from "./action";

const initState = {

    Loading : false,
    airports : [],
    error : false
}

const AirportReducer = (store = initState ,{type , payload}) => {

    switch(type){

        case AIRPORT_LOADING : 
        return {...store , Loading : true}
    }
}