import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react"


export const Flights = () => {

    const [flight , setFlight] = useState({
        
        airline : "",
        startPoint : "",
        endPoint : "",
        cost : "",
        startTime : "",
        endTime : "",
        pnr : "",
        capacity : ""

    })

    const HandleChange = (e) =>{

        const {id , value} = e.target;
        setFlight({...flight , [id] : value})
    }
  

  return (
      <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

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
      <Button variant="contained">Contained</Button>
    </Stack>


    </>
  )
}