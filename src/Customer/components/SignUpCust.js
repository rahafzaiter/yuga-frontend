import React, { useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/WhatsApp.jpeg'
import { BrowserRouter as Router, Redirect, Switch, Route, Link, useParams,useHistory } from "react-router-dom";

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();



  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNb, setphoneNb] = useState("");
  const [cpassword, setCPassword] = useState("");
  const history=useHistory();

  const registered = (e) => {
    if (!email || !password || !fname || !lname || !cpassword) {
      alert("please fill required data")
      return
    } else if(password!=cpassword){
      alert("password and confirm password dont match")
    }
    else {
      e.preventDefault()
    
        props.setUser({
          email: email,
          password: password,
          firstName:fname,
          lastName:lname,
          phoneNb:phoneNb
          // handle the click event
        })
        localStorage.setItem("user",JSON.stringify(props.user))
        // console.log(props.user)
        history.push("/Customer/CustHomePage")  
  
        }
  }


  const ErrorValidationLabel = ({ txtLbl }) => (
    <label htmlFor="" style={{ color: "red" }}>
      {txtLbl}
    </label>
  );


  const renderEmailValidationError = email.valid ?
    "" :
    <ErrorValidationLabel txtLbl={email.typeMismatch ? email.formatErrorTxt : email.requiredTxt} />;

  const renderPassValidationError = password.valid ? "" : <ErrorValidationLabel txtLbl={password.requiredTxt} />;
  const renderLnameValidationError = lname.valid ? "" : <ErrorValidationLabel txtLbl={lname.requiredTxt} />;
  const renderFnameValidationError = fname.valid ? "" : <ErrorValidationLabel txtLbl={fname.requiredTxt} />;




  return (



    <div style={{ background: '#F3E0E0', padding: '0.5%', backgroundImage: `url(${Image})` }} >

      <Container component="main" maxWidth="xs" style={{ background: 'white' }} >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>

          <form
            useRef={"form"}
            onError={errors => console.log(errors)}
            noValidate
            onSubmit={e => e.preventDefault()}>
            {/* className={classes.form}  */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={e => setFname(e.target.value)}
                />
              </Grid>
             
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={e => setLname(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  // autoComplete="email"
                  onChange={e => setEmail(e.target.value)}
                  validators={['required', 'isEmail']}
                  errorMessages={['this field is required', 'email is not valid']
                  }
                />

              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  // autoComplete="email"
                  onChange={e => setphoneNb(e.target.value)}                
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  onChange={e => setPassword(e.target.value)}
                />

              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="check-password"
                  label="Check-Password"
                  type="password"
                  id="Cpassword"
                  autoComplete="check-password"
                  onChange={e => setCPassword(e.target.value)}
                />
              </Grid>

            </Grid>
            <button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={registered}          
              type="submit"
            >
              Sign Up
          </button>
            {/* </Link> */}

            <Grid container justify="flex-end">
              <Grid item>
                <Link to={`/Customer/custAuthentication`} variant="body2">
                  Already have an account? Sign in
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
        </Box>
      </Container>

    </div>

  );
}