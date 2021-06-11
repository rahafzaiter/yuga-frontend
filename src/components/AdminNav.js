import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Logo from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures//logoPinkDress.jpeg"

//icons:
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';

 //switch
 import { Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      width:'100%',   
    
    },
    pinkDiv:{
        background: '#F3E0E0',
        padding:'5%'
        
      },
      NavBox:{
      mb:2 ,
      align:"left",
      fontWeight:200,
      fontSize:"h5.fontSize" ,
      m: 1,
      borderColor: 'grey',

      }
      ,PinkColor:{
        background: '#F3E0E0',
      },

    
  });

function AdminNav(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const defaultProps = {
        // bgcolor: 'background.paper',
       
      };
    

    return(  
      <div className="container">

        <Box className={classes.NavBox} align="left">
         <span class="logo">
           <a href="/">
           <img src={Logo} height="80px" width="115px" alt="Yuga logo" /> </a>
         </span>YUGA
        </Box>
        <Box borderTop={1}>
    <Typography component="div">
      
    <BottomNavigation  
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}> 
      <BottomNavigationAction style={{color:'black',fontFamily:"Brush Script MT"}} label="YUGA" component={Link} to="/Admin/" icon={<HomeIcon/>} /> 
      <BottomNavigationAction style={{color:'black'}} label="Add product" icon={<AddCircleOutlineIcon />} component={Link}
    to="/Admin/add" />   
      <BottomNavigationAction style={{color:'black'}} label="Category" icon={<LocalMallIcon />} component={Link} to="/Admin/categoryList" />
      <BottomNavigationAction style={{color:'black'}} label="Orders" icon={<ShoppingCartIcon />} component={Link} to="/Admin/orders" />
      <BottomNavigationAction style={{color:'black'}} label="Logout" icon={<MeetingRoomIcon/>}  component={Link} to="/Admin/logout" />
     
    </BottomNavigation>
    </Typography>
    </Box>
    
  </div>

     );
}

export default AdminNav;