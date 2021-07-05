import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Logo from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures//logoPinkDress.jpeg"
import { BrowserRouter as Router, Redirect, Switch, Route, Link, useParams, useHistory, NavLink } from "react-router-dom";
import './home-page-customer.scss'
import './nav.scss'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
//icons:
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import FeedbackIcon from '@material-ui/icons/Feedback';

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
    fontWeight: 200,
    fontSize: "h5.fontSize",
    m: 1,
    borderColor: 'grey',

  }
  , PinkColor: {
    background: '#F3E0E0',
  },


});

function AdminNav(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const remove = () => {
    localStorage.removeItem("admin");
  };

  const defaultProps = {
    // bgcolor: 'background.paper',

  };

  var navAdmin
  const currentRoute = useHistory().location.pathname.toLowerCase();

  if (localStorage.getItem("admin")) {
    navAdmin = (
      <div>
        <Box className={classes.NavBox} align="center" className="home-page-customer_item">
        <span class="logo">
          <a href="/" >
            <img src={Logo} height="80px" width="115px" alt="Yuga logo" />
             </a>
        </span>YUGA
        </Box>
        <Box marginTop="30px">

        {/* <Navbar bg="light" style={{align:"right", display:"inline-block"}} variant="light" >
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse class="navbar-nav" id="basic-navbar-nav">
        {/* <Navbar.Brand href="/Customer/CustHomePage" className="navC" align="left">Home</Navbar.Brand> */}
        {/* <Nav className="me-auto"  >
          <NavLink  activeClassName="active" className={currentRoute.includes("custhomepage") ? "navC" : "navD"} to="/Customer/CustHomePage"  >Home</NavLink>
          <NavLink activeClassName="active"  className={currentRoute.includes("custproductgallery") ? "navC" : "navD"} to="/Customer/CustProductGallery"  >Shop</NavLink>

        <NavLink activeClassName="active"  className={currentRoute.includes("custshipping") ? "navC" : "navD"} to="/Customer/CustShipping"  >Shipping Policies</NavLink>
        <NavLink activeClassName="active"  className={currentRoute.includes("custAuthentication") ? "navC" : "navD"} to="/Customer/custAuthentication"  ><AccountCircleIcon /></NavLink>
       
    
        </Nav>
        </Navbar.Collapse>
        </Container>
       </Navbar> */} 
          <Typography component="div">

            <BottomNavigation
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              showLabels
              className={classes.root}>
              <BottomNavigationAction activeClassName="active" className={currentRoute.includes("HomePage") ? "navC" : "navD"}  label="YUGA" component={Link} to="/Admin/HomePage" icon={<HomeIcon />} />
              <BottomNavigationAction activeClassName="active" className={currentRoute.includes("Add product") ? "navC" : "navD"} label="Add product" icon={<AddCircleOutlineIcon />} component={Link} to="/Admin/addProduct" />
              <BottomNavigationAction className={currentRoute.includes("categoryList") ? "navC" : "navD"} label="Category" icon={<LocalMallIcon />} component={Link} to="/Admin/categoryList" />
              <BottomNavigationAction className={currentRoute.includes("feedbacks") ? "navC" : "navD"} label="Feedbacks" icon={<FeedbackIcon />} component={Link} to="/Admin/feedbacks" />
              <BottomNavigationAction className={currentRoute.includes("orders") ? "navC" : "navD"} label="Orders" icon={<ShoppingCartIcon />} component={Link} to="/Admin/orders" />
              <BottomNavigationAction className={currentRoute.includes("Customer") ? "navC" : "navD"} label="Logout" icon={<MeetingRoomIcon />} component={Link} to="Customer"  onClick={(e) => {
                e.preventDefault()
                remove();
                //<Redirect to={'/Customer/'} />
                // props.setUser()
                 history.push("../Customer")
              }} />

            </BottomNavigation>
          </Typography>
        </Box>
      </div>
    )
  } else {
    navAdmin = (<div></div>)


  }



  return (

    <div className="container">

      {navAdmin}




    </div>

  );
}

export default AdminNav;