

import React, {useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Logo from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/logoPinkDress.jpeg"
//const path='/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Redirect, Switch, Route, Link, useParams, useHistory, NavLink } from "react-router-dom";
import './home-page-customer.scss'
import './nav.scss'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

//Customer Pages:
//icons:
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { createMuiTheme } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    width: '100%',
    fontSize: 18,
    fontWeight: 300,
    color: "black",
    marginRight:"40px",
    align:"center"
  },
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
  const history = useHistory();

  //when logout
  const remove = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("customer");
    localStorage.removeItem("customerId");
    localStorage.removeItem("customerToken");
  };

  useEffect(() => {
    console.log("user in Customer nav", props.user)
  }, [props.user])

  var navBar;
  const currentRoute = useHistory().location.pathname.toLowerCase();

  //if customer is logged in 
  if (JSON.parse(localStorage.getItem("customerToken"))) {
    navBar = (
        <Navbar bg="light" style={{align:"right"}} variant="light" >
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse class="navbar-nav" id="basic-navbar-nav">
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
                    }} > Logout</NavLink>
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

