import axios from "axios"

export const FLIGHT_LOADING = "FLIGHT_LOADING"
export const FLIGHT_SUCCESS = "FLIGHT_SUCCESS"
export const FLIGHT_ERROR = "FLIGHT_ERROR"

export const FlightLoading = () => ({

    type : FLIGHT_LOADING
})

export const FlightSuccess = (payload) =>({

    type : FLIGHT_SUCCESS,
    payload : payload
})

export const FlightError = () => ({

    type : FLIGHT_ERROR
})

export const FlightData = (id) => (dispatch) => {
    
    FlightLoading();
    axios.get(`http://localhost:8080/airports/flights/${id}`).then((res)=>{dispatch(FlightSuccess(res.data))})
    .catch(()=>{FlightError()})

}