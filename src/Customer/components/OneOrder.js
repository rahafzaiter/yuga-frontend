import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(5),
    width:"60%",
    paddingBottom: theme.spacing(5),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '60.25%',
    // paddingButton: '90.25%',
    // paddingLeft: '90.25%', // 16:9
    width:"100%",

  },
  cardContent: {
    flexGrow: 1,
    width:"100%",
    // paddingLeft: '90.25%',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4];

export default function OneOrder(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
     
      <main>
        {/* Hero unit */}
        <Container  className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          
          <Grid container spacing={4} 
          item 
          width="100%"
          xs={12}
          sm={12}
          md={12}
          >
            {props.item.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card className={classes.card} style={{backgroundColor:"#F3E0E0"}}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.Product.card.image}
                    title={card.Product.card.title}
                  />
                   <CardContent className={classes.cardContent}>
                      
                    <Typography gutterBottom variant="h5" component="h2">
                    <Box fontStyle="oblique" fontSize="h5.fontSize" m={1}>
                    {card.Product.card.title}
                    </Box>                  
                    </Typography>
                   
                    <Typography>
                    Size: {card.size} 
                    </Typography>
                  </CardContent>
                  <CardActions 
                //   className={classes.cardContent}
                  >
                  
                    <Typography size="Large" color="black">
                    <Box textAlign="left" m={1} fontWeight={500}>
                    {card.Product.card.price} ,000 L.B.P
                        </Box> 
                    </Typography>
                  
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}