import React,{useState,useEffect} from 'react';
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
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  root: {
    width: '100%',
    color:"black",
    backgroundColor:"pink",
    marginRight:"20px",
    '& > * + *': {
      marginTop: theme.spacing(2),
    }
  }
}));

export default function FeedbackAdmin() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [orders,setOrders]=useState([]);

  //sort orders by id 
  function dynamicSort(property) {
    return function (a, b) {
      return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    }}

  //get All orders
  const loadOrders = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/orders");
    setOrders(result.data.sort(dynamicSort('date')))
    console.log(result.data.reverse())
  };

  useEffect(()=>{
    loadOrders();
    console.log('orders',orders);
  },[])




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
           {orders.length!=0?(
             <div>A new order was added by {orders[0].customer_name} on {orders[0].date} .</div>):
           (<div></div>)}
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
             <TableCell style={{ color: 'white',fontSize:"18px" }}>Customer Id </TableCell>
            <TableCell style={{ color: 'white',fontSize:"18px" }}>Customer Name in order </TableCell>
            <TableCell style={{ color: 'white',fontSize:"18px" }}>Total Paid(L.B.P)</TableCell>
            <TableCell style={{ color: 'white',fontSize:"18px" }}>Address</TableCell>
            <TableCell style={{ color: 'white',fontSize:"18px" }}>Payment Method</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{backgroundColor:'#f1f1f1'}}>
          {orders.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.customer_id}</TableCell>
              <TableCell>{row.customer_name}</TableCell>
              <TableCell>{row.total_price}</TableCell>
              <TableCell>{row.city+" "+row.street+" "+row.building+" "+row.floor}</TableCell>
              <TableCell>Cash on Delivery</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table> 
      </TableContainer>
    
    </React.Fragment>
    </div>
  );
}