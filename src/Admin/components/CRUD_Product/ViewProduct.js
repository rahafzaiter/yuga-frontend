import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//Filter:
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Customer/ProductDetails.scss'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    flexDirection:"row",
    width: '100%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: 'black',
    display:'block',
    alignItems:'left',
    alignContent:'left',
    width:'100%',
    height:"100%",
    borderRadius: "25px"
  
  },
  formControl: {
    margin: theme.spacing(4),
    fontSize: "24",
    minHeight:"800px"
},
table: {
    minWidth: 450,
  },
}));




export default function ViewProduct({additem,user}) {
  const classes = useStyles();
  const [ProductLocal,setProductLocal]=useState(
    JSON.parse(localStorage.getItem("product"))   
  )

  const [Product,setProduct]  =useState(ProductLocal.product);
  const [size,setSize]=useState('');
  const [item,setItem]=useState(
    {
       Product,
       size:' ',
   }
  );

  const [state, setState] = useState({
  });

  //when fill size 
  const handleChangeSize= (event) => {
    setSize(event.target.value)
    const { name, value } = event.target;
    setItem({ ...item, size:value });  
  };

  useEffect(() => {
  },[] );

  //format price to have coma ex: 200,000
  const NumberFormatPrice=(y)=>{
    var price=new Intl.NumberFormat();
    return price.format(y);
  }

  return (
   
    <div className="container" style={{ width: '100%' }} >
      <Grid container  className={classes.root}>
        <Grid item  xs={5}   style={{maxHeight:"600px",width:"100%",marginTop:"35px"}} >
          <img src={Product.image} style={{objectFit: "cover",width:"100%",height:"600px",maxHeight:"600px", borderRadius: "25px"}} />
        </Grid>

        <Grid xs={6}  item style={{minHeight:"600px",borderRadius: "25px"}} className={classes.formControl}>
          <Paper className={classes.paper} bold >
            <h3  marginButton="2px"> {Product.title}</h3>
            <h5  marginButton="2px"> Product Info
            </h5>
            <p  marginButton="2px">Description:  {Product.description}</p>
            <p  marginButton="2px">Collection: {Product.collection}</p>
            <p  marginButton="2px">Color: {Product.color}</p>  
            <p marginButton="2px">Price: {NumberFormatPrice(Product.price)} LBP</p>
            <p marginButton="2px">Category: {Product.name}</p>
            <div>
            <TableContainer component={Paper}>
      
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S</TableCell>
            <TableCell align="right">M</TableCell>
            <TableCell align="right">L</TableCell>
            <TableCell align="right">XL</TableCell>
            <TableCell align="right">XXL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow>
              <TableCell >{Product.S}</TableCell>
              <TableCell align="right">{Product.M}</TableCell>
              <TableCell align="right">{Product.L}</TableCell>
              <TableCell align="right">{Product.XL}</TableCell>
              <TableCell align="right">{Product.XXL}</TableCell>
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
            </div>   
          </Paper>
        </Grid>

      </Grid>

    </div>
  );

}

