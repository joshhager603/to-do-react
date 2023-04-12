import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Title</TableCell>
            <TableCell align='center'>Description</TableCell>
            <TableCell align='center'>Deadline</TableCell>
            <TableCell align='center'>Priority</TableCell>
            <TableCell align='center'>Is Complete</TableCell>
            <TableCell align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center' component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align='center'>{row.description}</TableCell>
              <TableCell align='center'>{row.deadline}</TableCell>
              <TableCell align='center'>{row.priority}</TableCell>
              <TableCell align='center'>{row.isComplete}</TableCell>
              <TableCell align='center'>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
