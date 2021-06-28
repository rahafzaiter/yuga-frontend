import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import HomePageImage from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/HomePWomen.jpg'
import VideoPlayer from 'react-video-js-player'
import VideoColor from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Video/downloadfile-1.mp4"
import Img from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/79ccc6f0-51a8-4065-92f4-f2eafe32c7f6.jpeg"
// import BlackImg from 'src/Pictures/Trendy-Black-Coats-For-Women-4.jpg'
import BlackImg from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/Trendy-Black-Coats-For-Women-4.jpg'
// src/Pictures
import VideoBlack from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Video/WhatsApp Video 2021-05-23 at 7.43.15 PM.mp4'
//import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/home-page-customer.scss'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#F2CBCB',
    padding: '4%',
    FlexDirection:"row"


  },
  details: {
    width: 500,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    objectFit: "cover",
    // shadowOpacity: 1,
    shadowColor: '#fff',
    width: "200px",
    // minWidth:"620",
    // frameBorder:'0',
    backgroundColor: 'grey',
    height: "360px",
    maxHeight: "360px",
    frameBorder:'0',



  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },

}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();
  const videoSrc = VideoColor;
  const videoSrcBlack = VideoBlack;
  const poster = Img;

  const posterBlack = BlackImg;


  return (

    <div className={classes.root} align="center">

      <Grid container spacing={2}>
        <Grid item xs={8}>

          <div className="home-page-custmer">
            <CardContent className={classes.content}>
              <Typography component="h3" variant="h3" >
                <p className="home-page-customer_item">Light </p>

              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Light Colors Collection
          <p className="home-page-customer_p" >Our cup cake lovely customers!!! Fresh life needs Light colors, Visit our store to find your color  </p>
              </Typography>
            </CardContent>

          </div>

        </Grid>

        <Grid item xs={3}>
        

            <VideoPlayer

            // className={classes.cover}
              image={HomePageImage}
              title="Live from space album cover"
              allowFullScreen
              src={videoSrc}
              poster={poster}   
              boxShadow={3}
              width="200px"
              frameBorder='0'
              background='grey'
              height="360px"       

            />
         
        </Grid>
        </Grid>

      </div>

      );
}

      {/* <div align="center" maxHeight="260px">
        <Card className={classes.root}>
          <div className="home-page-custmer">
            <CardContent className={classes.content}>
              <Typography component="h3" variant="h3" >
                <p className="home-page-customer_item">Light </p>

              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Light Colors Collection
          <p className="home-page-customer_p" >Our cup cake lovely customers!!! Fresh life needs Light colors, Visit our store to find your color  </p>
              </Typography>
            </CardContent>

          </div>

          <div width="620px" backgroundColor='grey' maxHeight="260px">

            <VideoPlayer

              className={classes.cover}
              image={HomePageImage}
              title="Live from space album cover"
              allowFullScreen
              src={videoSrc}
              poster={poster}
            // width="620"
            // frameBorder='0'
            // backgroundColor='grey'
            // height="360"   

            />
          </div>

        </Card>
      </div> */}
  {/* );
} */}
