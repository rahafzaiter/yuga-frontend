import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

// const products = [
//   { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
//   { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
//   { name: 'Product 3', desc: 'Something else', price: '$6.51' },
//   { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
//   { name: 'Shipping', desc: '', price: 'Free' },
// ];
// const addressess = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];

const payments = [
  { name: 'Payment Method', detail: 'Cash on delivery' },

];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();
  const [orderR, setOrderR] = useState(JSON.parse(localStorage.getItem("cartItems")).allcarts);
  const [totalPrice, setTotal] = useState(JSON.parse(localStorage.getItem("cartTotalPrice")));
  const [address, setAddress] = useState(props.address);
  const addresses = [address.city, address.street, address.building, address.floor];

  // const [orders,setOrders]=useState(props.products)

  useEffect(() => {
    console.log("checkOut", orderR);
    console.log("address in review ", address)


  }, []);

  const TotalPrice = (totalPrice)

  return (

    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {orderR.map((product) => (
          <ListItem className={classes.listItem} key={product.title}>
            <ListItemText primary={product.Product.card.title} />
            <Typography variant="body2">{product.Product.card.price} LBP  </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="SubTotal" />
          <Typography variant="subtitle2" className={classes.total}>
            {totalPrice} LBP
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>

          <ListItemText primary="Delivery Charge" />

          <Typography variant="subtitle2" className={classes.total}>
           +10,000 LBP
         </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>

          <ListItemText primary="Total" />

          <Typography variant="subtitle1" className={classes.total}>
            {parseInt(TotalPrice, 10) + 10000} LBP
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{props.fname} {props.lname}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}