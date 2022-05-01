import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux"
import { AirportData } from '../Redux/airport/action';
import { useEffect } from 'react';
import { store } from '../Redux/store';
import { useNavigate } from 'react-router-dom';

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



export function Home() {

    const dispatch = useDispatch()
    useEffect(()=>{getData()},[])

    const navigate = useNavigate()

    const data = useSelector((store) => store.airport.Airports)
    
    const getData = () => {
        dispatch(AirportData())
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Airport Image</StyledTableCell>
            <StyledTableCell  align="center">Airport Name</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((el) => (
            <StyledTableRow onClick={() => navigate(`/airports/flights/${el._id}`)} key={el._id}>
              <StyledTableCell className ="imgBox" component="th" scope="row">
                <img id='img' src={el.imgUrl}/>
              </StyledTableCell>
              <StyledTableCell style={{fontSize : "20px"}} align="center" >{el.airport}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
