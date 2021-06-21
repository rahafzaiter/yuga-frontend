import React ,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
  const [address,setAddress]=useState({
    city:'',
    street:'',
    bulding:'',
    floor:''

  });
  const handleChangeAddress = async(event) => {
    const name = event.target.name;
    await setAddress({
      // ...address,
      [name]: event.target.value,
    },
    console.log(address));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            // value={address.name}
            onChange={handleChangeAddress}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            onChange={handleChangeAddress}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="street"
            label="Address line-Street"
            fullWidth
            autoComplete="shipping address-line1"
            value={address.street}
            onChange={handleChangeAddress}
          />
        </Grid>
      
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            value={address.city}
            onChange={handleChangeAddress}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="building"
            name="building"
            label="Building"
            fullWidth
            autoComplete="shipping address-level2"
            value={address.building}
            onChange={handleChangeAddress}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField id="floor" name="floor" label="Floor" fullWidth type="number" value={address.floor}/>
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
}