import axios from "axios";

export const AIRPORT_LOADING = "AIRPORT_LOADING" ;
export const AIRPORT_SUCCESS = "AIRPORT_SUCCESS" ;
export const AIRPORT_ERROR = "AIRPORT_ERROR" ;

export const AirportLoading = () => ({

    type : AIRPORT_LOADING
});

export const AirportSuccess = (payload) => ({

    type : AIRPORT_SUCCESS,
    payload : payload
});

export const AirportError = () => ({

    type : AIRPORT_ERROR
});

export const AirportData = () => (dispatch) => {

    AirportLoading();
    axios.get("http://localhost:8080/airports").then((res)=>{dispatch(AirportSuccess(res.data))})
    .catch(()=>{AirportError()});
}