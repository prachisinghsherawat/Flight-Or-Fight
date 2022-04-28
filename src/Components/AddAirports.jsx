import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function AddAirports() {

    const [airport , setAirport] = React.useState({
        airport : ""
    });

    const HandleChange = (e) =>{

        const {id , value} = e.target;
        setAirport({...airport , [id] : value})
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
        id="airport"
        label="Add Airport"
        // value={name}
        onChange={HandleChange}
      />
     
    </Box>



    <Stack spacing={2} direction="row">
      <Button variant="contained">Contained</Button>
    </Stack>


    </>

  );
}
