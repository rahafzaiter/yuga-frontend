import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Logo from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/logoPinkDress.jpeg"
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Redirect, Switch, Route, Link, useParams, useHistory, NavLink } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import './home-page-customer.scss'
import './nav.scss'
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
    marginRight: "40px",
    align: "center"
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

  if (props.user) {
    navBar = (
      <Typography component="div">
        <BottomNavigation

          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >


          <Button className="nav-links" component={Link} align="left"

            to="/Customer/CustHomePage"
          > <span align="left" className="nav-links" >Home</span>  </Button>

          <Button component={Link} align="left"
            to="/Customer/CustProductGallery" className="navig"> <span align="left" className="nav-links"  >Shop</span>  </Button>
          <Button label="My Orders" align="left" component={Link}
            to="/Customer/CustOrders" className="navig"> <span align="left" className="nav-links" >My Orders</span></Button>

          <Button label="Account" align="left" component={Link}
            aria-controls="fade-menu" aria-haspopup="true" className="navig" onClick={handleClick} className="navig" > <span align="left" className="nav-links" >Account</span></Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClosePages}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={() => {
              path = "/Customer/Profile"
              handleClose(path)
            }}>Profile</MenuItem>
            <MenuItem onClick={() => {
              path = "/Customer/Password"
              handleClose(path)
            }}>Password</MenuItem>
          </Menu>

          <Button label="Shipping Policies" align="left" component={Link}
            to="/Customer/CustShipping" className="navig" > <span align="left" className="nav-links">Shipping Policies</span></Button>

          <Button label="Feedback" align="left" component={Link}
            to="/Customer/CustFeedback" className="navig"> <span align="left" className="nav-links">Feedback</span></Button>
          <Button label="Feedback" icon={<LocalMallIcon />} align="right" component={Link}
            to="/Customer/CustCart" className="navig"> <span align="right" className="nav-links" icon={<LocalMallIcon />} ><LocalMallIcon /></span></Button>
          <Button align="right" component={Link} label="Logout"
            to="/Customer/"
            className="navig" onClick={(e) => {
              e.preventDefault()
              remove();
              props.setUser()
              history.push("/Customer/CustHomePage")
            }} ><span align="right" className="nav-links">Logout</span> </Button>
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
          className="home-page-customer_size">
          <Button fontSize="large" label="Home" align="left" component={Link}
            to="/Customer/CustHomePage" className="navig"> <span className="nav-links">Home</span></Button>
          <Button label="Shop" align="left" component={Link}
            to="/Customer/CustProductGallery" className="navig"><span className="nav-links">Shop</span></Button>
          <Button label="Shipping Policies" align="left" component={Link}
            to="/Customer/CustShipping" className="navig"><span className="nav-links">Shipping Policies</span> </Button>
          <Button align="right" component={Link}
            to="/Customer/custAuthentication" className="navig"><span className="nav-links"><AccountCircleIcon /></span> </Button>
        </BottomNavigation>
      </Typography>)
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