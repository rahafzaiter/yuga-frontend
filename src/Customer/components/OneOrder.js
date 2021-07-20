import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(5),
    width:"60%",
    paddingBottom: theme.spacing(5),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '60.25%',
    width:"100%",

  },
  cardContent: {
    flexGrow: 1,
    width:"100%",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function OneOrder(props) {
  const classes = useStyles();

  //add comma to the price
  const NumberFormatPrice=(y)=>{
    var price=new Intl.NumberFormat();
    return price.format(y);
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption style={{ fontSize: 24,align:"right",color:"black" }}  align="right">Total: {NumberFormatPrice(props.total)} LBP </caption>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left" style={{ fontSize: 19 }}>Product</TableCell>
            <TableCell align="left" style={{ fontSize: 19 }}>Size</TableCell>
            <TableCell align="left"  style={{ fontSize: 19 }}>Price(LBP)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.item.map((card,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">  <img style={{width:"150px", height:"150px", objectFit:"cover"}}  src={card.Product.card.image}  /></TableCell>
              <TableCell align="left" style={{ fontSize: 18 }}>{card.Product.card.title}</TableCell>
              <TableCell align="left" style={{ fontSize: 18 }}>{card.size}</TableCell>
              <TableCell align="left" style={{ fontSize: 18 }}> {NumberFormatPrice(card.Product.card.price)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      </main>
    </React.Fragment>
  );
}
