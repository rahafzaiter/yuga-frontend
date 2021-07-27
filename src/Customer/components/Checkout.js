import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import Review from './Review';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    color: "#FC3C80"

  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: "rgb(214, 34, 145)",
    color: "white",
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address', 'Review your order'];

function getStepContent(step, user, address, setAddress, fname, setfName, lname, setlName) {
  switch (step) {
    case 0:
      return <AddressForm user={user} address={address} setAddress={setAddress} fname={fname} setfName={setfName} lname={lname} setlName={setlName} />;
    case 1:
      return <Review user={user} address={address} fname={fname} lname={lname} />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [fname, setfName] = useState(props.user.user.firstname)
  const [lname, setlName] = useState(props.user.user.lastname)
  const [ordId, setId] = useState(0);
  const [address, setAddress] = useState({
    city: '',
    street: '',
    building: '',
    floor: 0,
  });

  const [checked, setChecked] = useState(false);
  const [order, setOrder] = useState({});
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("inCart")));

  //when submit order clear everything in cart 
  const remove = () => {
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartTotalPrice");
    localStorage.setItem('inCart', JSON.stringify([]));
  };


  //add order to database
  const addOrder = () => {
    var data = {
      'date': new Date().toLocaleString(),
      'customer_name': fname + " " + lname,
      'total_price':
        parseInt(JSON.parse(localStorage.getItem("cartTotalPrice")), 10) + 10000,
      'customer_id': parseInt(JSON.parse(localStorage.getItem('customerId'))),
      'city': address.city,
      'street': address.street,
      'building': address.building,
      'floor': parseInt(address.floor)
    };

    // console.log("data", data)
    axios.post('http://127.0.0.1:8000/api/orders', data)
      .then(
        response => {
          setId(response.data.id);
          console.log("order id ", response.data.id);
        })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };


  //add order to database
  const addOrderItems = () => {
    cart.map((cart) => {
      var data = {
        'order_id': ordId,
        'size': cart.size,
        'product_id': cart.Product.card.id,
      };
      console.log('data', data);

      axios.post('http://127.0.0.1:8000/api/orderitems', data)
        .then(
          response => {
          })
        .catch(error => {
          console.error('There was an error!', error);
        });

    });
  };


  const handleNext = async () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      addOrder();
      setOrder({
        customer: JSON.parse(localStorage.getItem('customer')),
        customerName: fname + " " + lname,
        cart: JSON.parse(window.localStorage.getItem("cartItems")),
        totalprice: (
          parseInt(JSON.parse(localStorage.getItem("cartTotalPrice")), 10) + 1000),
        date: new Date().toLocaleString(),
        custaddress: address
      });
      setChecked(true);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  //when submit call addOrder method and call remove to clear cart 
  useEffect(() => {
    console.log("order before change", order)
    if (checked == true) {
      console.log("order after change ", order)
      props.addOrders(order)
      remove()
      props.setCart([])
    }
  }, [order]);

  useEffect(() => {
    if (ordId != 0) {
      addOrderItems();
    }
  }, [ordId]);

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper} >
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel >{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, props.user.user, address, setAddress, fname, setfName, lname, setlName)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    textColor="white" backgroundColor="#FF00A7"
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>

      </main>
    </React.Fragment>
  );
}