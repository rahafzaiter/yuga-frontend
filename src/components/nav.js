import React, { useState, useEffect } from "react";
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
import { BrowserRouter as Router, Redirect, Switch, Route, Link, useParams, useHistory, NavLink } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
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
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePages = () => {
    setAnchorEl(null);
  };

  const handleClose = (path) => {
    setAnchorEl(null);
    history.push(path)
  };

  // const Navigation = props => {
  //   // bgcolor: 'background.paper',

  // };

  const changeColors = colors => {
    setState({ color });
  }

  const remove = () => {
    localStorage.removeItem("user");
  };

  useEffect(() => {
    console.log("user in Customer nav",props.user)
  }, [props.user])

  var navBar;
  var path;

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
            to="/Customer/CustHomePage" />
          <BottomNavigationAction className="nav-links" label="Shop" align="left" component={Link}
            to="/Customer/CustProductGallery" />
          <BottomNavigationAction className="nav-links" label="My Orders" align="left" component={Link}
            to="/Customer/CustOrders" />
          <BottomNavigationAction className="nav-links" label="Account" align="left" component={Link}
            // to="/Customer/CustProfile"
             aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} >
          </BottomNavigationAction>
          <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClosePages}
              TransitionComponent={Fade}
            >
              <MenuItem  onClick={()=>{
                path="/Customer/Profile"
                handleClose(path)
                }}>Profile</MenuItem>
              {/* <MenuItem onClick={()=>{
                path="/Customer/Address"
                handleClose(path)
                }}>Address</MenuItem> */}
              <MenuItem onClick={()=>{
                path="/Customer/Password"
                handleClose(path)
                }}>Passowrd</MenuItem>
            </Menu>
          <BottomNavigationAction className="nav-links" label="Shipping_Policies" align="left" component={Link}
            to="/Customer/CustShipping" />
          <BottomNavigationAction className="nav-links" label="Feedback" align="left" component={Link}
            to="/Customer/CustFeedback" />
         
          <BottomNavigationAction className="nav-links" icon={<LocalMallIcon />} align="right" component={Link}
            to="/Customer/CustCart" >Cart</BottomNavigationAction>
          <BottomNavigationAction className="nav-links" align="right" component={Link} label="Logout"
            to="/Customer/" onClick={(e) => {
              e.preventDefault()
              remove();
              props.setUser()
              history.push("/Customer/CustHomePage")
            }} />
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
            to="/Customer/CustHomePage" />
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