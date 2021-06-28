import React from 'react';
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
import VideoColor from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Video/WhatsApp Video 2021-05-23 at 12.55.09 AM (1).mp4"
import Img from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/79ccc6f0-51a8-4065-92f4-f2eafe32c7f6.jpeg"
//import BlackImg from 'src/Pictures/Trendy-Black-Coats-For-Women-4.jpg'
import BlackImg from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/Trendy-Black-Coats-For-Women-4.jpg'
// src/Pictures
import VideoBlack from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Video/WhatsApp Video 2021-05-23 at 7.43.15 PM.mp4'
//import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/home-page-customer.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:'#F2CBCB',
    padding:'4%',
   
  },
  details: {
    width: 500,
    display: 'flex',
    flexDirection: 'column',
    fontStyle: 'Viaoda Libre',
  },
  content: {
    flex: '1 0 auto',
    fontFamily:'Viaoda Libre',
  },
  cover: {
    objectFit:"cover",shadowOpacity: 1,
    shadowColor: '#fff',
    
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),

  },
  
}));

export default function MediaControlCardBlack() {
  const classes = useStyles();
  const theme = useTheme();
  const videoSrc=VideoColor;
    const videoSrcBlack=VideoBlack;
    const poster=Img;

    const posterBlack=BlackImg;

  return (
    <div alignItems="left">
    <Card className={classes.root}>
      <div className="home-page-custmer">
        <CardContent className={classes.content}>
          <Typography component="h3" variant="h3">
            <p className="home-page-customer_item"> Dark</p>
         
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" >
        Dark Colors Collection
          <p className="home-page-customer_p">Girlieees! where are you elegant ladies? We have also got dark color collection for you  </p>
          </Typography>
        </CardContent>
       
      </div>
     

        <VideoPlayer

        // className={classes.cover}
        image={HomePageImage}
        title="Live from space album cover"
        src={videoSrcBlack}
        poster={posterBlack}
        className={classes.paper}
        // frameborder="0" scrolling="no" allowfullscreen
        // xs={6}
       

        width="620"
        frameBorder='0'
        background='grey'
        height="360"
      />
      
    </Card>
    </div>
  );
}
