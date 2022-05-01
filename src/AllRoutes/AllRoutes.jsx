import { Route, Routes } from "react-router-dom"
import { AddAirports } from "../Components/AddAirports"
import { Flights } from "../Components/Flights"
import { Home } from "../Components/Home"
import { HomeDetails } from "../Components/HomeDetails"


export const AllRoutes = () => {

    return(
        <Routes>
            <Route path ="/" element ={<Home />} />
            <Route path ="/airports" element ={<AddAirports />} />
            <Route path ="/airports/flights" element ={ <Flights />} />
            <Route path ="/airports/flights/:id" element ={ <HomeDetails />} />
        </Routes>
    )
}