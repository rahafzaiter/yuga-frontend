import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
// import PaymentForm from './PaymentForm';
import Review from './Review';
import { BrowserRouter as Router, Redirect, Switch, Route, Link, useParams,useHistory } from "react-router-dom";

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
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address', 'Review your order'];

function getStepContent(step,user,address,setAddress,fname,setfName,lname,setlName) {
  switch (step) {
    case 0:
      return <AddressForm user={user} address={address} setAddress={setAddress} fname={fname} setfName={setfName} lname={lname} setlName={setlName}/>;
    case 1:
      return <Review user={user} address={address} fname={fname} lname={lname}/>;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0); 
  const[fname,setfName]=useState(props.user.user.firstname)
  const[lname,setlName]=useState(props.user.user.lastname)
  const [address, setAddress] = useState({
    city: '',
    street: '',
    building: '',
    floor: 0,

  });

  const [checked,setChecked]=useState(false);
  const [order,setOrder]=useState({})
  const history=useHistory();
  const remove=()=>{
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartTotalPrice");
  };
  

  const handleNext = async() => {
    setActiveStep(activeStep + 1);
    if(activeStep === steps.length -1){
      console.log("hello"),
     setOrder({
    customer:props.user.user,
    customerName:fname+" "+lname,
    cart:JSON.parse(window.localStorage.getItem("cartItems")),
    totalprice:((JSON.parse(localStorage.getItem("cartTotalPrice"))*0.1)+1)*10,
    date:Date().toLocaleString(),
    custaddress:address
      });
      setChecked(true);
   }
    
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(()=>{
    console.log("order before change",order)
    if(checked==true){
    console.log("order after change ",order)
    props.addOrders(order)
    remove()
    props.setCart([])
    //history.push("/Customer/Orders")
    }
  },[order]);

  return (
    <React.Fragment>
      <CssBaseline />
     
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
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
                {getStepContent(activeStep,props.user.user,address,setAddress,fname,setfName,lname,setlName)}
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