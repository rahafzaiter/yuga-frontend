import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/DeliveryPic.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    color: theme.palette.text.secondary,
    padding:'5%',
  },
}));

export default function ShippingDetails(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <img src={Image}/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper align='center' className={classes.paper} style={{background:'#F3E0E0'}}>
              <h1>SHIPPING & DELIVERY</h1>
              <p  style={{width:"60%",textAlign: 'center'}} >The delivery service covers all the Lebanese territory. Your package will be delivered to the address you specified within 7 working days following the purchase order.

An additional flat rate of LBP 10,000 will be added to your total purchase amount as a delivery fee.

Our delivery service is through Libanpost and you can rest assured that your purchase will be handled with the utmost care.

At any time during delivery, we will be your point of reference,
 ready to respond to your concerns and offer you support throughout the process. Do not hesitate to contact us at rahafzaiter@gmail.com or +961 81 769 794</p>
          </Paper>
        </Grid>
        </Grid>
        </div>

    );


};