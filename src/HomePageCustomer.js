import React, {useEffect} from "react";
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
import Animation from './Customer/components/Animation'
import Grid from '@material-ui/core/Grid';
import  Skeleton from '@material-ui/lab/Skeleton';
//VideoCards
import MediaControlCard from './Customer/components/VideoCard'
import MediaControlCardBlack from './Customer/components/BlackVideoCard'
import AnimatedButton from 'react-animated-buttons';

import '../src/components/home-page-customer.scss'

//Import Customer

//IMport Admin:
import HomePageAdmin from './HomePageAdmin'
//images
import HomePageImage from './Pictures/victoriaSale.jpg'

//Style:
const useStyles = makeStyles({
    root: {
      width:'100%',   
    
    },
    pinkDiv:{
        // background: '#F3E0E0',
        background: '#FEEBFF',
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
        height: 700 ,
        width:'100%',
        objectFit: "cover"
        // backgroundPosition: center,
        // backgroundRepeat: no-repeat,
        // backgroundSize: cover,
        },
        card:{
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
        }
    
  });


  //switch
import { Switch, Route, Link,useHistory } from "react-router-dom";


function HomePageCustomer (props){
  const history=useHistory();
  //Style
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const defaultProps = {
    // bgcolor: 'background.paper',
   
  };

  useEffect(() => {
    // Update the document title using the browser API
    console.log("user in HomePage ",props.user)
  },[props.user]);

  

    return(

        //8divs
      <div style={{width:'100%'}}>
    
        {/* Text */}
       
        <div className={classes.pinkDiv} align='center'>
        <p>Check Us Out</p>
        <h1 className="home-page-customer_item">Our Latest Styles</h1>
        <p text-align="center" style={{width:"70%"}}>
            Welcome to our store, where you can find trendy and
             affordable outfits for your every need.
             Take a look at our collection and enjoy shopping online with Yuga.
              Get in touch if you have any question.</p>
             
              <AnimatedButton  onClick={()=>{history.push(`/CustProductGallery`)}} width="100px" textColor="white" color="#FF00A7" style={{marginTop:"4%"}} className="btn shadow">
                {/* <Link to="/Customer/CustProductGallery"              
                >Shop now</Link> */}
                Shop Now 
              </AnimatedButton>

              {/* <AnimatedButton textColor="white" color="rgb(197, 115, 128)" style={{backgroundColor:'rgb(197, 115, 128)',width:'25%',marginTop:"4%",color:'white'}}  className="btn shadow">
                Thankyou</AnimatedButton>
             */}
        </div>


        {/* Pic */}
        <div className={classes.bg}  
        //style={{ backgroundImage:`url(${HomePageImage})` ,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}} 
        >
          <Grid spacing={2} className={classes.card}>
            <Grid item xs={6}> <Animation  className={classes.bg} /></Grid>
            <Grid item xs={6}>
            <img className={classes.bg} 
             src={HomePageImage}/>
              </Grid>
         
        {/* <img className={classes.bg} 
          src={HomePageImage}
        // style={{width:'100%',height:"600",padding:'1%',objectFit: "cover",}}
         /> */}
         </Grid>
      
    </div>

        {/* Vid */}
        <div style={{backgroundColor:'#F2CBCB'}}>
         <MediaControlCard />
        </div>
        
        {/* About */}
        <div style={{padding:'5%'}} align='center' >
        <h1 style={{color:'pink'}} className="home-page-customer_item">About Yuga</h1>
        <p>Celebrating Beauty and Style</p>

        <p style={{width:"40%"}} >
        Yuga was founded by a group of like-minded fashion devotees, determined to deliver style to shoppers worldwide. Our store offers a huge collection of goods at affordable prices, and our payment and shipping options are simply unmatched. What are you waiting for?
         Start shopping online today and find out more about what makes us so special.</p>          
        </div>

        {/* Vid */}
        <div>
         <MediaControlCardBlack />
        </div>

        
        {/* Conatact us */}
        <div style={{padding:'5%',background:'#FEEBFF'}} align="center">
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

