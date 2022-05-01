import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FlightData } from "../Redux/flight/action"
import { store } from '../Redux/store';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export function HomeDetails() {

  const {id} = useParams()

  // store -------- > store . store value (store) . initState array (reducer)

  const data = useSelector((store) => store.flight.Flights) 
  
  const dispatch = useDispatch()
  useEffect(() =>{getData()})

  const getData = () => {
    dispatch(FlightData(id))
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Airport Image</StyledTableCell>
            <StyledTableCell align="right">Airline Name</StyledTableCell>
            <StyledTableCell align="right">Starting Point</StyledTableCell>
            <StyledTableCell align="right">Ending Point</StyledTableCell>
            <StyledTableCell align="right">Cost</StyledTableCell>
            <StyledTableCell align="right">Start Time</StyledTableCell>
            <StyledTableCell align="right">End Time</StyledTableCell>
            <StyledTableCell align="right">PNR</StyledTableCell>
            <StyledTableCell align="right">Capacity</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((el) => (
            <StyledTableRow key={el._id}>
              <StyledTableCell className ="imgBox1" component="th" scope="row">
                <img id='img' src={el.imgUrl}/>
              </StyledTableCell>
              <StyledTableCell align="right">{el.airline}</StyledTableCell>
              <StyledTableCell align="right">{el.startPoint}</StyledTableCell>
              <StyledTableCell align="right">{el.endPoint}</StyledTableCell>
              <StyledTableCell align="right">{el.cost}</StyledTableCell>
              <StyledTableCell align="right">{el.startTime}</StyledTableCell>
              <StyledTableCell align="right">{el.endTime}</StyledTableCell>
              <StyledTableCell align="right">{el.pnr}</StyledTableCell>
              <StyledTableCell align="right">{el.capacity}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
