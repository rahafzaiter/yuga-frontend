import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  table: {
    //maxWidth: "auto",
  },
}));

function CategoryTable (props) {

  const classes = useStyles();

  return(
  <div Container style={{minHeight:"900px",marginTop:"20px"}}>
     <React.Fragment>
     {/* <Typography className=" py-2 shadow" component="h2" variant="h6"  gutterBottom>
     Categories
    </Typography> */}

    <TableContainer component={Paper}>

  <Table className={classes.table} aria-label="simple table">
    <TableHead style={{backgroundColor:'#5e5e5e',color:"white"}}>
      <TableRow>
        <TableCell style={{ color: 'white' }}>ID</TableCell>
        <TableCell style={{ color: 'white' }} align="right">Type</TableCell>       
        <TableCell style={{ color: 'white' }} align="right">Edit</TableCell>
        <TableCell style={{ color: 'white' }} align="right">Delete</TableCell>
      </TableRow>
    </TableHead>
    <TableBody style={{backgroundColor:'#f1f1f1'}}>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <TableRow key={user.id}>
            <TableCell component="th" scope="row">{user.id}</TableCell>
            <TableCell align="right" >{user.name}</TableCell>          
            <TableCell align="right">
              <Button
                // className="button muted-button"
                class="btn btn-outline-primary" 
                onClick={() => props.editRow(user)}
              >
                Edit
              </Button>
              </TableCell>
              <TableCell  align="right">
              <Button
               class="btn btn-outline-danger"
                // className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={3}>No Categories</TableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
  </TableContainer>
  </React.Fragment>
  </div>
);

      }

export default CategoryTable;
