import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AirportData } from "../Redux/airport/action"
import { store } from "../Redux/store"


export const Home = () => {

    const dispatch = useDispatch()
    useEffect(()=>{getData()},[])

    const getData =()=>{
        dispatch( AirportData()) 
    }

    const data = useSelector((store)=> store.airport.airports)
    console.log(data)

    return(
        <div></div>
    )
}