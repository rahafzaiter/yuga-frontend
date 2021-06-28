import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Admin_Orders/Title';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

// Generate Order Data
function createData(id,customerid,name, rate,comment,category) {
  return { id,customerid,name, rate,comment,category };
}

const rows = [
  createData(0, '23 Jun, 2021', 'rahaf zaiter','81769794', 'Saida, mia o mia street b1 1', 'Cash on Delivery'),
  createData(1, '16 May, 2021', 'Elie Presley','81769796', 'Jezzin, MS', 'Cash on Delivery'),
  createData(2, '29 April, 2021', 'Alexandra McCartney','81769797', 'Nabatieh, UK', 'Cash on Delivery'),
  createData(3, '26 Mar, 2021', 'Avon Scholz','81769798', 'Jounieh, MA', 'Cash on Delivery'),
  createData(4, '23 Mar, 2021', 'Lea Jackson', '81769799','Ghaziye, IN', 'Cash on Delivery'),
 
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
    <React.Fragment>
      <Title >Recent Feedbacks</Title>
    <TableContainer component={Paper}>      
      <Table  aria-label="simple table">
        <TableHead style={{backgroundColor:'#5e5e5e'}}>
          <TableRow>
            <TableCell style={{ color: 'white' }} component="th" scope="row">Customer id</TableCell>
            <TableCell style={{ color: 'white' }}>Name</TableCell>
            <TableCell style={{ color: 'white' }}>Rate</TableCell>
            <TableCell style={{ color: 'white' }}>Comment</TableCell>
            <TableCell style={{ color: 'white' }}>Favorite Category</TableCell>
          </TableRow>
        </TableHead>


        <TableBody style={{backgroundColor:'#f1f1f1'}}>
          {rows.map((row) => (
            <TableRow key={row.id}>
             <TableCell>{row.customerid}</TableCell>
             <TableCell >{row.name}</TableCell>
              <TableCell >{row.rate}</TableCell>
              <TableCell >{row.comment}</TableCell>
              <TableCell >{row.category}</TableCell>  
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
    </div>
  );
}