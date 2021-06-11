import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
// import "node_modules/video-react/dist/video-react.css"; 
import { Player } from 'video-react';
import ReactPlayer from 'react-player'
import VideoPlayer from 'react-video-js-player'
import VideoColor from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Video/WhatsApp Video 2021-05-23 at 12.55.09 AM (1).mp4"
import Img from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/79ccc6f0-51a8-4065-92f4-f2eafe32c7f6.jpeg"
// import BlackImg from 'src/Pictures/Trendy-Black-Coats-For-Women-4.jpg'
import BlackImg from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/Trendy-Black-Coats-For-Women-4.jpg'
// src/Pictures
import VideoBlack from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Video/WhatsApp Video 2021-05-23 at 7.43.15 PM.mp4'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      background:'grey',
      color: theme.palette.text.secondary,
    },
  }));
  

export default LogoutControl => {
    const videoSrc=VideoColor;
    const videoSrcBlack=VideoBlack;
    const poster=Img;

    const posterBlack=BlackImg;
    const classes = useStyles();
    return (
    //     <div>
    //     <VideoPlayer
    //     src={videoSrc}
    //     poster={poster}
    //     width="720"
    //     height="420"
    //   />
     
    //    <VideoPlayer
    //     src={videoSrcBlack}
    //     poster={poster}
    //     width="720"
    //     height="420"
    //   />
    //     </div>
    


<div className={classes.root}>
<Grid container spacing={3}>
 
  <Grid item xs={12}>
  <VideoPlayer
        src={videoSrc}
        poster={poster}
        width="720"
        className={classes.paper}
        background='grey'
        height="420"
      />
    {/* <Paper className={classes.paper}>xs=6</Paper> */}
  </Grid>
  <Grid item xs={12}>
    {/* <Paper className={classes.paper}>xs=6</Paper> */}
    <VideoPlayer
        src={videoSrcBlack}
        poster={posterBlack}
        className={classes.paper}
        // xs={6}
        width="720"
        background='grey'
        height="420"
        margin='0'
      />
  </Grid>
  
</Grid>
</div>
    );
  };