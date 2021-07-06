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
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

// Generate Order Data
function createData(id,customerid,name, rate,comment,category) {
  return { id,customerid,name, rate,comment,category };
}

const rows = [
 
  createData(1, 1, 'Elie Kozah', 4 , 'I loved the pants ', 'Pants'),
  createData(2, 2, 'Alexandra Kodjabachi',5, 'I enjoyed shopping and would like to add more dresses', 'Dresses'),
  createData(3, 3, 'Yvona Nehme', 3, 'Would you please add more Boyfriend Pants?', 'Pants'),
  createData(4, 4, 'Zaina Saab',3, 'The Black JumpSuit was wonderfull when i received it ', "JumpSuits"),
  createData(0, 5, 'Rahaf Zaiter', 4 , 'I like to add more skirts', 'Skirts'),
 
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  root: {
    width: '100%',
    color:"black",
    backgroundColor:"pink",
    // marginLeft:"20px",
    marginRight:"20px",
    '& > * + *': {
      marginTop: theme.spacing(2),
    }
  }
}));

export default function FeedbackAdmin() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  return (
    <div className="container"  style={{minHeight:"900px",marginTop:"40px"}}>
    <React.Fragment>
   
    {/* <ReactNotification /> */}
      {/* <Application /> */}
      <Title >Recent Feedbacks</Title>
      {/* <Alert onClose={() => {}}>This is a success alert — check it out!</Alert> */}
      <Collapse in={open} className={classes.root}>
        <Alert
       variant="filled" severity="info"
        
          action={
            <IconButton
              aria-label="close"
              color="white"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
         A new feedback was added by {rows[rows.length-1].name} 3 mins ago .
        </Alert>
      </Collapse>
      <Button
      
      style={{margin:"20px"}}
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button>
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