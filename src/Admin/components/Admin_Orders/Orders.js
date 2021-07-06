import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';


// Generate Order Data
function createData(id,date,name, phone,shipTo,paymentMethod) {
  return { id,date,name, phone,shipTo,paymentMethod };
}

const rows = [
  createData(0, '23 Jun, 2021', 'Rahaf Zaiter','81769794', 'Saida, mia o mia street, Amjad Zaiter building, f1', 'Cash on Delivery',200000),
  createData(1, '16 May, 2021', 'Elie Kozah','81769796', 'Jezzine, mia o mia street, Abu Sedo building, f1 ', 'Cash on Delivery',220000),
  createData(2, '29 April, 2021', 'Alexandra Kodjabatchi','81769797', 'Nabatieh, Haboush street, Zuwat building, f2 ', 'Cash on Delivery',300000),
  createData(3, '26 Mar, 2021', 'Ynonne Nehme','81769798', 'Beirut, BDD Bashoura, BDD 1234, f-1', 'Cash on Delivery',450000),
  createData(4, '23 Mar, 2021', 'Lea Jackson', '81769799','Beirut, BDD Bashoura, BDD 1234, f2', 'Cash on Delivery',200000),
 
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
    <div className="container" style={{minHeight:"900px",marginTop:"40px"}}>
    <React.Fragment >
      <Title >Recent Orders</Title>
      <Collapse in={open} className={classes.root}>
        <Alert
        variant="filled" severity="info"
        
          action={
            <IconButton
              aria-label="close"
              color="pink"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
         A new order was added by {rows[0].name} on {rows[0].date}  .
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
            <TableCell style={{ color: 'white',fontSize:"18px" }} >Date</TableCell>
            <TableCell style={{ color: 'white',fontSize:"18px" }}>Customer Name </TableCell>
            <TableCell style={{ color: 'white',fontSize:"18px" }}>Phone nb</TableCell>
            <TableCell style={{ color: 'white',fontSize:"18px" }}>Address</TableCell>
            <TableCell style={{ color: 'white',fontSize:"18px" }}>Payment Method</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{backgroundColor:'#f1f1f1'}}>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              {/* <TableCell align="right">{row.amount}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>

      </Table> 
      </TableContainer>
    
    </React.Fragment>
    </div>
  );
}