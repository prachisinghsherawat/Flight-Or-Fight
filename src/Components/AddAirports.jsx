import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios"

export function AddAirports() {

    const [airports , setAirports] = React.useState({
        imgUrl : "",
        airport : ""
    });

    const HandleChange = (e) =>{

        const {id , value} = e.target;
        setAirports({...airports , [id] : value})
    }
    console.log(airports)

    const HandleSubmit = () =>{
        axios.post("http://localhost:8080/airports",airports).then((res)=>{
            localStorage.setItem("airportsData" , JSON.stringify(res.data._id) )
        })
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
        id="imgUrl"
        label="Image URL"
        // value={name}
        onChange={HandleChange}
      />

      <TextField
        id="airport"
        label="Add Airport"
        // value={name}
        onChange={HandleChange}
      />
     
    </Box>



    <Stack spacing={2} direction="row">
      <Button onClick={HandleSubmit} variant="contained">Contained</Button>
    </Stack>


    </>

  );
}
