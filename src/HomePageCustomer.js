import React, { useEffect } from "react";
//Style:
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Animation from './Customer/components/Animation'
import Grid from '@material-ui/core/Grid';
//VideoCards
import MediaControlCard from './Customer/components/VideoCard'
import MediaControlCardBlack from './Customer/components/BlackVideoCard'
import AnimatedButton from 'react-animated-buttons';

import '../src/components/home-page-customer.scss'

//Import Customer
//images
import HomePageImage from './Pictures/victoriaSale.jpg'

//Style:
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  pinkDiv: {
    background: '#FEEBFF',
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
  bg: {
    backgroundimage: { HomePageImage },
    height: 700,
    width: '100%',
    objectFit: "cover"
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  buttn: {
    backgroundColor: "#FF00A7",
    textColor: "white",
    fontWeight: "500px",
    marginTop: "4%",
  }

});


//switch
import { Switch, Route, Link, useHistory } from "react-router-dom";


function HomePageCustomer(props) {
  const history = useHistory();
  //Style
  const classes = useStyles();

  useEffect(() => {
    // Update the document title using the browser API
    console.log("user in HomePage ", props.user)
  }, [props.user]);

  return (
    <div style={{ width: '100%' }}>

      {/* Text */}

      <div className={classes.pinkDiv} align='center'>
        <p>Check Us Out</p>
        <h1 className="home-page-customer_item">Our Latest Styles</h1>
        <p text-align="center" style={{ width: "70%" }}>
          Welcome to our store, where you can find trendy and
          affordable outfits for your every need.
          Take a look at our collection and enjoy shopping online with Yuga.
          Get in touch if you have any question.</p>

        <AnimatedButton
          color="rgb(240, 18, 155)"
          width="200px"
          onClick={() => { history.push(`/Customer/CustProductGallery`) }}   >
          <span className="home-page-customer_buttn"> Shop Now </span>
        </AnimatedButton>
      </div>


      {/* Pic */}
      <div className={classes.bg}
      >
        <Grid spacing={2} className={classes.card}>
          <Grid item xs={6}> <Animation className={classes.bg} /></Grid>
          <Grid item xs={6}>
            <img className={classes.bg}
              src={HomePageImage} />
          </Grid>
        </Grid>

      </div>

      {/* Vid */}
      <div style={{ backgroundColor: '#F2CBCB' }}>
        <MediaControlCard />
      </div>

      {/* About */}
      <div style={{ padding: '5%' }} align='center' >
        <h1 style={{ color: 'pink' }} className="home-page-customer_item">About Yuga</h1>
        <p>Celebrating Beauty and Style</p>

        <p style={{ width: "40%" }} >
          Yuga was founded by a group of like-minded fashion devotees, determined to deliver style to shoppers worldwide. Our store offers a huge collection of goods at affordable prices, and our payment and shipping options are simply unmatched. What are you waiting for?
          Start shopping online today and find out more about what makes us so special.</p>
      </div>

      {/* Vid */}
      <div>
        <MediaControlCardBlack />
      </div>


      {/* Conatact us */}
      <div style={{ padding: '5%', background: '#FEEBFF' }} align="center">
        <h1 className="home-page-customer_item">Contact Us</h1>
        <p align="center">
          rahafzaiter2@gmail.com</p>
        <p align="center" >
          961-81769794</p>
      </div>
    </div>
  );
}
export default HomePageCustomer;

