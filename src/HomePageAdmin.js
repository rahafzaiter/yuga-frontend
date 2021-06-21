import React, { Component } from "react";

//Style:
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import ReactPlayer from 'react-player'
import Typography from '@material-ui/core/Typography';

//Tutoial Draft pages:
import Clock from './Tutorial/components/Clock'
import ActionLink from './Tutorial/components/ActionLink'
import Toggle from './Tutorial/components/Toggle'
import Greeting from './Tutorial/components/Greeting'
import GuestGreeting from './Tutorial/components/GuestGreeting'
import Mailbox from './Tutorial/components/Mailbox'
import Mapping from './Tutorial/components/loopsAndMapping'
import Blog from './Tutorial/components/Blogs'
////////////////////////////////////////////////////////////////////////


//Admin Pages:
import NameForm from './Tutorial/components/NameForm'
import LogoutControl from './Admin/components/Logout'
// Admin/Product:
import Tutorial from "./Admin/components/Tutorial";
import TutorialsList from "./Admin/components/Product_List";
import EditProduct from "./Admin/components/CRUD_Product/EditProduct";
//Admin/category:
import CategoryList from "./Admin/components/Category_List";
//Admin/Orders:
import OrdersCust from "./Admin/components/Admin_Orders/Orders";



//switch
import { Switch, Route, Link } from "react-router-dom";
import Logo from "./Pictures/logoPinkDress.jpeg"


//icons:
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles({
    root: {
      width:'100%',   
      background: '#faf3f3'
    },
    
  });

function HomePageAdmin (){
    //Styles:(
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
 

  const defaultProps = {
    // bgcolor: 'background.paper',
    m: 1,
    borderColor: 'grey',
  };


    return(
    <div>
  
  

    {/* Admin nav */}
    {/* <Box align="left" className="container" fontWeight={500} m={1} fontSize="h4.fontSize"   {...defaultProps}  >
    <span class="logo">
     <a href="/">
       <img src={Logo} height="70" width="115" alt="text here" /> </a>
   </span>YUGA
      </Box>
      <Typography component="div" borderBottom={1} >

    <BottomNavigation  
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}> 
      <BottomNavigationAction style={{color:'black',fontFamily:"Brush Script MT"}} label="YUGA" component={Link} to="/Admin/" icon={<HomeIcon/>} /> 
      <BottomNavigationAction style={{color:'black'}} label="Add product" icon={<AddCircleOutlineIcon />} component={Link}
    to="/add" />   
      <BottomNavigationAction style={{color:'black'}} label="Category" icon={<LocalMallIcon />} component={Link} to="/categoryList" />
      <BottomNavigationAction style={{color:'black'}} label="Orders" icon={<ShoppingCartIcon />} component={Link} to="/orders" />
      <BottomNavigationAction style={{color:'black'}} label="Logout" icon={<MeetingRoomIcon/>}  component={Link} to="/logout" />
     
    </BottomNavigation>
    </Typography>
    <hr/> */}



    {/* Routing Switch */}
   
    <div className="container mt-3">
          <Switch>
            {/* https://bezkoder.com/react-crud-web-api/ */}
          <Route exact path={["/Admin/", "/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
          <Route exact path="/Product/EditUser/:id" component={EditProduct} />
          <Route path="/categoryList" component={CategoryList} />
          <Route path="/orders" component={OrdersCust} />
          <Route path="/nameForm" component={NameForm} />  
          <Route path="/logout" component={LogoutControl} />  
      </Switch>
    </div>

    </div>//Container
  );
}

export default HomePageAdmin;