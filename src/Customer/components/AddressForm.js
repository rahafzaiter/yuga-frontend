import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { UserContext } from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/components/Customer';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const useStyles = makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const steps = ['Shipping address', 'Review your order'];

export default function AddressForm(props) {
  const classes = useStyles();
  const [address, setAddress] = useState({
    city: '',
    street: '',
    building: '',
    floor: 0,

  });

  const [activeStep, setActiveStep] = React.useState(0);

  const [user,setUser]=useState(props.user);
  const [fname,setfName]=useState(props.fname);
  const [lname,setlName]=useState(props.lname);
  const handleChangeAddress = async (event) => {
    const name = event.target.name;
    await setAddress({
      ...address,
      [name]: event.target.value,
    },[]);
  };

  const handleChangeFName = async (event) => {
    const name = event.target.name;
    await setfName(event.target.value);
  };

  const handleChangeLName = async (event) => {
    const name = event.target.name;
    await setlName(event.target.value);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const Submit=()=>{
    
    props.setAddress(address);
    props.setfName(fname);
    props.setlName(lname);

  }

  useEffect(()=>{

  console.log("address is AddressForm",props.address);
  console.log("fname",fname);
  console.log("lname",lname);
  },[props.address,fname,lname])


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstNameA"
            name="fname"
            value={fname}
            label="First name"
            fullWidth
            autoComplete="given-name"
            onChange={handleChangeFName}

          />

        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastNameA"
            name="lname"
            label="Last name"
            value={lname}
            fullWidth
            autoComplete="family-name"
            onChange={handleChangeLName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="streetA"
            name="street"
            label="Address line-Street"
            fullWidth
            autoComplete="street"
            value={address.street}
            onChange={handleChangeAddress}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="cityA"
            name="city"
            label="City"
            fullWidth
            autoComplete="city"
            value={address.city}
            onChange={handleChangeAddress}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="buildingA"
            name="building"
            label="Building"
            fullWidth
            autoComplete="building"
            value={address.building}
            onChange={handleChangeAddress}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField id="floorA" name="floor" label="Floor" fullWidth type="number" value={address.floor} onChange={handleChangeAddress} />
        </Grid>

      </Grid>
      <Grid item xs={12}>
        <Button type="submit" xs={12} onSubmit={e => e.preventDefault()} 
          variant="contained"
          color="primary"
          className={classes.buttons} 
        // style={{ flex: 1,justifyContent: "flex-right",align:"right"}}
        onClick={
          Submit}>
          Save
        </Button>
        </Grid>

    </React.Fragment>
  );
}