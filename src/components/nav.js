import React, { useState } from "react";
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/nav.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Logo from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/logoPinkDress.jpeg"
//const path='/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Redirect, Switch, Route, Link, useParams,useHistory,NavLink } from "react-router-dom";
//Customer Pages:
//icons:
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalMallIcon from '@material-ui/icons/LocalMall';

//switch


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  pinkDiv: {
    background: '#F3E0E0',
    padding: '5%'

  },
  NavBox: {
    mb: 2,
    align: "left",
    fontWeight: 400,
    fontSize: 30,
    m: 1,
    borderColor: 'grey',
    height: "40%",
  }



});


function Navigation(props) {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [color, changeColor] = useState("#FFFFFF");
  const history=useHistory();

  const Navigation = props => {
    // bgcolor: 'background.paper',

  };

  const changeColors = colors => {
    setState({ color });
  }

  const remove=()=>{
    localStorage.removeItem("user");
  };

  var navBar

  if (props.user) {
    navBar = (
      <Typography component="div">
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels

          className={classes.root}>

          <BottomNavigationAction className="nav-links" label="Home" align="left" component={Link}
            to="/Customer/" />
          <BottomNavigationAction className="nav-links" label="Shop" align="left" component={Link}
            to="/Customer/CustProductGallery" />
          <BottomNavigationAction className="nav-links" label="Orders" align="left" component={Link}
            to="/Customer/CustOrders" />
          <BottomNavigationAction className="nav-links" label="Profile" align="left" component={Link}
            to="/Customer/CustProfile" />
          <BottomNavigationAction className="nav-links" label="Shipping_Policies" align="left" component={Link}
            to="/Customer/CustShipping" />
          <BottomNavigationAction className="nav-links" label="Feedback" align="left" component={Link}
            to="/Customer/CustFeedback" />
          {/* <BottomNavigationAction  className="nav-links"   icon={<AccountCircleIcon/>}  align="right" component={Link} 
       to="/Customer/custAuthentication" /> */}
          <BottomNavigationAction className="nav-links" icon={<LocalMallIcon />} align="right" component={Link}
            to="/Customer/CustCart" >Cart</BottomNavigationAction>
          <BottomNavigationAction className="nav-links" align="right" component={Link} label="Logout"
            to="/Customer/" onClick={(e)=>{
              e.preventDefault()
              remove();
              props.setUser()
              history.push("/Customer")  
              }}/>
        </BottomNavigation>
      </Typography>
    )
  } else {
    navBar = (
      <Typography component="div">
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels

          className={classes.root}>

          <BottomNavigationAction className="nav-links" label="Home" align="left" component={Link}
            to="/Customer/" />
          <BottomNavigationAction className="nav-links" label="Shop" align="left" component={Link}
            to="/Customer/CustProductGallery" />
          <BottomNavigationAction className="nav-links" label="Shipping_Policies" align="left" component={Link}
            to="/Customer/CustShipping" />       
          <BottomNavigationAction className="nav-links" icon={<AccountCircleIcon />} align="right" component={Link}
            to="/Customer/custAuthentication" />
         
        </BottomNavigation>
      </Typography>)
  }


  return (

    <Grid className="container" xs={10}>

      <Box className={classes.NavBox} align="left">
        <span class="logo">
          <a href="/">
            <img src={Logo} height="80px" width="115px" alt="Yuga logo" /> </a>
        </span>YUGA
        </Box>
      <Box borderTop={1}>

        {navBar}
      </Box>

    </Grid>

  );
}

export default Navigation;