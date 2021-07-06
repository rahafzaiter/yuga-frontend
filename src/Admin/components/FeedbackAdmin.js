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
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

// Generate Order Data
function createData(id,customerid,name, rate,comment,category) {
  return { id,customerid,name, rate,comment,category };
}

const rows = [
  createData(0, 1, 'rahaf zaiter', 4 , 'I like to add more skirts', 'Skirts'),
  createData(1, 2, 'Elie Presley', 4 , 'I loved the pants ', 'Pants'),
  createData(2, 2, 'Alexandra McCartney',5, 'I enjoyed shopping and would like to add more dresses', 'Dresses'),
  createData(3, 1, 'Yvona Scholz', 3, 'Would you please add more Boyfriend Pants?', 'Pants'),
  createData(4, 1, 'Lea Jackson',3, 'The Black JumpSuit was wonderfull when i received it ', "JumpSuits"),
 
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
    <div className="container"  style={{minHeight:"900px",marginTop:"40px"}}>
    <React.Fragment>
    {/* <ReactNotification /> */}
      {/* <Application /> */}
      <Title >Recent Feedbacks</Title>
    <TableContainer component={Paper}>      
      <Table  aria-label="simple table">
        <TableHead style={{backgroundColor:'#5e5e5e'}}>
          <TableRow>
            <TableCell style={{ color: 'white',fontSize:"18px" }} component="th" scope="row">Customer id</TableCell>
            <TableCell style={{ color: 'white',fontSize:"18px" }}>Name</TableCell>
            <TableCell style={{ color: 'white',fontSize:"18px" }}>Rate</TableCell>
            <TableCell style={{ color: 'white',fontSize:"18px" }}>Comment</TableCell>
            <TableCell style={{ color: 'white',fontSize:"18px" }}>Favorite Category</TableCell>
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