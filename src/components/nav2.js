

import React, { useState, useEffect } from "react";
// import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/nav.css';
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
import Button from '@material-ui/core/Button';
import './home-page-customer.scss'
import './nav.scss'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import {  NavLink } from "react-router-dom";
//Customer Pages:
//icons:
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//switch


const useStyles = makeStyles({
  root: {
    width: '100%',
    fontSize: 18,
    fontWeight: 300,
    color: "black",
    // marginLeft:"40px",
    marginRight:"40px",
    align:"center"
  
    

  },
//   tab :{
//     width: "100%", 
//     color: white,
//     overflow: hidden,
//     textDecoration: none
//   },
  pinkDiv: {
    background: '#F3E0E0',
    padding: '5%'

  },
  NavBox: {
    mb: 2,
    align: "left",
    fontWeight: 200,
    fontSize: "h2.fontSize",
    m: 1,
    borderColor: 'grey',
  }



});


const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};


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
    console.log("user in Customer nav", props.user)
  }, [props.user])

  var navBar;
  var path;

  const currentRoute = useHistory().location.pathname.toLowerCase();

  if (props.user) {
    navBar = (


        <Navbar bg="light" style={{align:"right", display:"inline-block"}} variant="light" >
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse class="navbar-nav" id="basic-navbar-nav">
        {/* <Navbar.Brand href="/Customer/CustHomePage" className="navC" align="left">Home</Navbar.Brand> */}
        <Nav className="me-auto"  >
          <NavLink  activeClassName="active" className={currentRoute.includes("custhomepage") ? "navC" : "navD"} to="/Customer/CustHomePage"  >Home</NavLink>
          <NavLink activeClassName="active"  className={currentRoute.includes("custproductgallery") ? "navC" : "navD"} to="/Customer/CustProductGallery"  >Shop</NavLink>
          <NavLink activeClassName="active"  className={currentRoute.includes("custorders") ? "navC" : "navD"}  to="/Customer/CustOrders"  >My Orders</NavLink>
          <NavDropdown  activeClassName="active" className="navC"  color="dark" title="My Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Customer/Profile">Profile</NavDropdown.Item>
          <NavDropdown.Item href="/Customer/Password">Password</NavDropdown.Item>
         
        </NavDropdown>

        <NavLink activeClassName="active"  className={currentRoute.includes("custshipping") ? "navC" : "navD"} to="/Customer/CustShipping"  >Shipping Policies</NavLink>
        <NavLink activeClassName="active"  className={currentRoute.includes("custfeedback") ? "navC" : "navD"} to="/Customer/CustFeedback"  >Feedback</NavLink>
        <NavLink activeClassName="active"  className={currentRoute.includes("custcart") ? "navC" : "navD"} to="/Customer/CustCart"   ><LocalMallIcon /></NavLink>
        <NavLink activeClassName="active"  className={currentRoute.includes("/CustHomePage") ? "navC" : "navD"} to="/Customer/CustHomePage" 
        onClick={(e) => {
                      e.preventDefault()
                      remove();
                      props.setUser()
                      history.push("/Customer/CustHomePage")
                    }}
        
        >Logout</NavLink>
       
    
        </Nav>
        </Navbar.Collapse>
        </Container>
       </Navbar>


  
   
   
 

    )
  } else {
    navBar = (


        <Navbar bg="light" style={{align:"right", display:"inline-block"}} variant="light" >
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse class="navbar-nav" id="basic-navbar-nav">
        {/* <Navbar.Brand href="/Customer/CustHomePage" className="navC" align="left">Home</Navbar.Brand> */}
        <Nav className="me-auto"  >
          <NavLink  activeClassName="active" className={currentRoute.includes("custhomepage") ? "navC" : "navD"} to="/Customer/CustHomePage"  >Home</NavLink>
          <NavLink activeClassName="active"  className={currentRoute.includes("custproductgallery") ? "navC" : "navD"} to="/Customer/CustProductGallery"  >Shop</NavLink>

        <NavLink activeClassName="active"  className={currentRoute.includes("custshipping") ? "navC" : "navD"} to="/Customer/CustShipping"  >Shipping Policies</NavLink>
        <NavLink activeClassName="active"  className={currentRoute.includes("custAuthentication") ? "navC" : "navD"} to="/Customer/custAuthentication"  ><AccountCircleIcon /></NavLink>
       
    
        </Nav>
        </Navbar.Collapse>
        </Container>
       </Navbar>
    )
  }


  return (

    <Grid className="container" xs={10}>

      <Box className={classes.NavBox} align="center" className="home-page-customer_item">
        <span class="logo">
          <a href="/" >
            <img src={Logo} height="80px" width="115px" alt="Yuga logo" /> </a>
        </span>YUGA
        </Box>
      <Grid marginTop="37px" >

        {navBar}
      </Grid>

    </Grid>

  );
}

export default Navigation;

