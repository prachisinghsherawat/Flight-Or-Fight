import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react"
import axios from 'axios';


export const Flights = () => {

    const id = JSON.parse(localStorage.getItem("airportsData"));
    console.log(id)

    const [flights , setFlights] = useState({

        imgUrl : "",
        airline : "",
        startPoint : "",
        endPoint : "",
        cost : "",
        startTime : "",
        endTime : "",
        pnr : "",
        capacity : "",
        airport_id : id

    })

    const HandleChange = (e) =>{

        const {id , value} = e.target;
        setFlights({...flights , [id] : value})
    }

    const HandleSubmit = ()=>{

        axios.post("http://localhost:8080/airports/flights",flights).then((res) => console.log(res.data))
    }
  

  return (
      <>
      <h1 className='head'>FLIGHT DETAILS</h1>
    <Box className='box'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

        <TextField
        id="imgUrl"
        label="Image URL"
        // value={name}
        onChange={HandleChange}
      />

        <TextField
        id="airline"
        label="Airline Name"
        // value={name}
        onChange={HandleChange}
      />

        <TextField
        id="startPoint"
        label="Start Airport"
        // value={name}
        onChange={HandleChange}
      />

        <TextField
        id="endPoint"
        label="End Airport"
        // value={name}
        onChange={HandleChange}
      />

        <TextField
        id="cost"
        label="Cost"
        // value={name}
        onChange={HandleChange}
      />

        <TextField
        id="startTime"
        label="Start Timing"
        // value={name}
        onChange={HandleChange}
      />

        <TextField
        id="endTime"
        label="End Timing"
        // value={name}
        onChange={HandleChange}
      />

        <TextField
        id="pnr"
        label="PNR"
        // value={name}
        onChange={HandleChange}
      />

        <TextField
        id="capacity"
        label="Capacity"
        // value={name}
        onChange={HandleChange}
      />        
     
    </Box>



    <Stack spacing={2} direction="row">
      <Button id='button' onClick={HandleSubmit} variant="contained">Contained</Button>
    </Stack>


    </>
  )
}