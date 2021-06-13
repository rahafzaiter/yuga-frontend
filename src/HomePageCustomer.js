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

//VideoCards
import MediaControlCard from './Customer/components/VideoCard'
import MediaControlCardBlack from './Customer/components/BlackVideoCard'

//Import Customer

//IMport Admin:
import HomePageAdmin from './HomePageAdmin'
//images
import HomePageImage from './Pictures/HomePWomen.jpg'

//Style:
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
      bg :{
        backgroundimage: {HomePageImage},
        height: '20%',
        width:'100%'
        // backgroundPosition: center,
        // backgroundRepeat: no-repeat,
        // backgroundSize: cover,
        },
    
  });


  //switch
import { Switch, Route, Link } from "react-router-dom";


function HomePageCustomer (){
  //Style
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const defaultProps = {
    // bgcolor: 'background.paper',
   
  };



    return(

        //8divs
      <div style={{width:'100%'}}>
    
        {/* Text */}
        <div className={classes.pinkDiv} align='center'>
        <p>Check Us Out</p>
        <h1>Our Latest Styles</h1>
        <p text-align="center" style={{width:"70%"}}>
            Welcome to our store, where you can find trendy and
             affordable outfits for your every need.
             Take a look at our collection and enjoy shopping online with Yuga.
              Get in touch if you have any question.</p>
              <Link to="/Customer/CustProductGallery" className="btn shadow" style={{backgroundColor:'rgb(197, 115, 128)',width:'25%',marginTop:"4%",color:'white'}}>Shop now</Link>
        </div>


        {/* Pic */}
        <div  style={{ backgroundImage:`url(${HomePageImage})` ,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',height:'auto'}} >
        <img src={HomePageImage} style={{width:'100%',height:700,padding:'1%'}}/>
      
    </div>

        {/* Vid */}
        <div style={{backgroundColor:'#F2CBCB'}}>
         <MediaControlCard />
        </div>
        
        {/* About */}
        <div style={{padding:'5%'}} align='center' >
        <h1 style={{color:'pink'}}>About Yuga</h1>
        <p>Celebrating Beauty and Style</p>

        <p style={{width:"40%"}} >
        Yuga was founded by a group of like-minded fashion devotees, determined to deliver style to shoppers worldwide. Our store offers a huge collection of goods at affordable prices, and our payment and shipping options are simply unmatched. What are you waiting for?
         Start shopping online today and find out more about what makes us so special.</p>          
        </div>

        {/* Vid */}
        <div style={{backgroundColor:'#F2CBCB'}}>
         <MediaControlCardBlack />
        </div>

        
        {/* Conatact us */}
        <div style={{padding:'5%',background:'#F3E0E0'}} align="center">
        <h1>Contact Us</h1>
        <p align="center">
        rahafzaiter2@gmail.com</p>
        <p align="center" >
        961-81769794</p>
        </div>  
    </div>
    );




}
export default HomePageCustomer;

