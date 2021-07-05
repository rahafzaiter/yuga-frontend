import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Image from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/61cfa7945072e4c1793cdb244450d899.jpg'
import { BrowserRouter as Router, Redirect, Switch, Route, useParams,useHistory } from "react-router-dom";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  image: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "pink",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor:"#FC3C80"
  },
}));

export default function SignInSide(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn,setLoggedIn]=useState(false);
  const history=useHistory();
  const [user,setUser]=useState([
    {id:1,email:"rahafz@gmail.com",password:"123",firstname:"rahaf",lastname:"z",phoneNb:"81811811"},
    {id:2,email:"rahafzaiter@gmail.com",password:"123456",firstname:"rahaf",lastname:"zaiter",phoneNb:"71711711"}
  ])

  const setLog = (E,P) => {
    props.setUser({
      email: E,
    password: P
    })

  }

  const login = (e) => {
    if (!email || !password ) {
      alert("please fill required data")
      return
    }
    else {
      e.preventDefault()
      // const timer = setTimeout(() => {
      //   if(!props.user){
      //     alert("email or password are incorrect, please try again")
      //     }
      // }, 100);

      user.map(user=>{
        if(user.email==email && user.password== password){
          localStorage.setItem("user",JSON.stringify({user}))
          setLoggedIn(true)

          props.setUser({
            user
          },
          console.log("user in sign in ",props.user))

          setLog(email,password)       
          history.push("/Customer/CustHomePage")   
           
        }      
      })

       const timer = setTimeout(() => {
         console.log(localStorage.getItem("user"))
        if(!localStorage.getItem("user")){
          alert("email or password are incorrect, please try again")
  
        }
      }, 100);

      return timer

      
      //return clearTimeout(timer);
      
  }

}


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={login}          
              type="submit"             
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/Customer/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}