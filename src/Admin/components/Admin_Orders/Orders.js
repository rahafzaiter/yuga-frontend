import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id,date,name, phone,shipTo,paymentMethod) {
  return { id,date,name, phone,shipTo,paymentMethod };
}

const rows = [
  createData(0, '23 Jun, 2021', 'rahaf zaiter','81769794', 'Saida, mia o mia street b1 1', 'Cash on Delivery',200000),
  createData(1, '16 May, 2021', 'Elie Presley','81769796', 'Jezzin, MS', 'Cash on Delivery',220000),
  createData(2, '29 April, 2021', 'Alexandra McCartney','81769797', 'Nabatieh, UK', 'Cash on Delivery',300000),
  createData(3, '26 Mar, 2021', 'Avon Scholz','81769798', 'Jounieh, MA', 'Cash on Delivery',450000),
  createData(4, '23 Mar, 2021', 'Lea Jackson', '81769799','Ghaziye, IN', 'Cash on Delivery',200000),
 
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function FeedbackAdmin() {
  const classes = useStyles();
  return (
    <div className="container" style={{minHeight:"900px",marginTop:"40px"}}>
    <React.Fragment >
      <Title >Recent Orders</Title>
      <Table size="small" class="table border shadow">
        <TableHead style={{backgroundColor:'#CF8E9F'}}>
          <TableRow>
            <TableCell>Customer id</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Customer Name </TableCell>
            <TableCell>Phone nb</TableCell>
            <TableCell>Address</TableCell>
            <TableCell align="right">Payment Method</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{backgroundColor:'#E5DBE1'}}>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        {/* <TableBody style={{backgroundColor:'#E5DBE1'}}>
          {rows.map((row) => (
            <TableRow key={row.id}>
             <TableCell>{row.customerid}</TableCell>
             <TableCell>{row.name}</TableCell>
              <TableCell>{row.rate}</TableCell>
              <TableCell>{row.comment}</TableCell>
              <TableCell>{row.category}</TableCell>  
            </TableRow>
          ))}
        </TableBody>
        */}
      </Table> 
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
    </div>
  );
}