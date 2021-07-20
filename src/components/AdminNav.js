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
//icons:
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import FeedbackIcon from '@material-ui/icons/Feedback';

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

  var navAdmin

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
          <Typography component="div">

            <BottomNavigation
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              showLabels
              className={classes.root}>
              <BottomNavigationAction style={{ color: 'black', fontFamily: "Brush Script MT" }} label="YUGA" component={Link} to="/Admin/HomePage" icon={<HomeIcon />} />
              <BottomNavigationAction style={{ color: 'black' }} label="Add product" icon={<AddCircleOutlineIcon />} component={Link} to="/Admin/addProduct" />
              <BottomNavigationAction style={{ color: 'black' }} label="Category" icon={<LocalMallIcon />} component={Link} to="/Admin/categoryList" />
              <BottomNavigationAction style={{ color: 'black' }} label="Feedbacks" icon={<FeedbackIcon />} component={Link} to="/Admin/feedbacks" />
              <BottomNavigationAction style={{ color: 'black' }} label="Orders" icon={<ShoppingCartIcon />} component={Link} to="/Admin/orders" />
              <BottomNavigationAction style={{ color: 'black' }} label="Logout" icon={<MeetingRoomIcon />} component={Link} to="Customer"  onClick={(e) => {
                e.preventDefault()
                remove();
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