import React, { useEffect, useState } from "react";
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
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  table: {
    // maxWidth:"800px",
    // align:"center",
    // marginLeft:"200px"
    //maxWidth: "auto",
  },
}));

function CategoryTable(props) {

  const classes = useStyles();
  const [categories, setCategories] = useState([]);


  const loadUsers = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/categories/");
    setCategories(result.data.reverse())

  };

  useEffect(() => {
    loadUsers();
  }, [props.refresh]);
  // useEffect(()=>{


  // },[refresh])


  const deleteUser = async id => {
    await axios.delete(`http://127.0.0.1:8000/api/categories/${id}`);
    props.setRefresh(!props.refresh);
    loadUsers();

  };



  return (
    <div Container style={{ minHeight: "900px", marginTop: "20px" }}>
      <React.Fragment>
        {/* <Typography className=" py-2 shadow" component="h2" variant="h6"  gutterBottom>
     Categories
    </Typography> */}

        <TableContainer component={Paper}>

          <Table className={classes.table} aria-label="simple table">
            <TableHead style={{ backgroundColor: '#5e5e5e', color: "white" }}>
              <TableRow>
                <TableCell style={{ color: 'white', fontSize: "18px" }} align="center">ID</TableCell>
                <TableCell style={{ color: 'white', fontSize: "18px" }} align="center">Type</TableCell>
                <TableCell style={{ color: 'white', fontSize: "18px" }} align="center">Edit</TableCell>
                <TableCell style={{ color: 'white', fontSize: "18px" }} align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ backgroundColor: '#f1f1f1' }}>
              {categories.length > 0 ? (
                categories.map(user => (
                  <TableRow key={user.id}>
                    <TableCell component="th" scope="row" align="center">{user.id}</TableCell>
                    <TableCell align="center" >{user.name}</TableCell>
                    <TableCell align="center">
                      <Button
                        // className="button muted-button"
                        class="btn btn-outline-primary ml-3"
                        onClick={() => props.editRow(user)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        class="btn btn-outline-danger ml-3"
                        // className="button muted-button"
                        onClick={() => deleteUser(user.id)}
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
