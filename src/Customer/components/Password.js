import { ListItemSecondaryAction } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/passImage.svg'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: '100%',
     
    },
    submit: {
       
            margin: theme.spacing(3, 0, 2),
            background: 'rgb(240, 18, 155)',
            color: 'black',
            padding: 10,
            width: '80%',
            borderRadius: 10,
            border: "1px solid rgb(122, 121, 121)",
            marginright: 10,
            marginleft: 20, 
            fontSize: "16px",
            fontWeight: 'bold'

    },
  }));
  

export default function Password(){
    const classes = useStyles();

    return(
        <div className="container" style={{ width: '100%',minHeight:'100%',height:"100%", padding: '0.5%'}}  >
            <Grid spacing={4} container className={classes.root}>
            <Grid  xs={6} >
            <Paper className={classes.paper}><img src={Image} style={{width: '100%',height:"auto",minHeight:'500px',backgroundSize: 'cover',objectFit: "cover"}}/></Paper>
            </Grid>
        <Grid    xs={6} style={{height:'100%'}} >
          <Grid item xs={12}>
            <Paper className={classes.paper}>
            <TextField
                            variant="outlined"
                            margin="normal"
                            label="Current Password"
                            required
                            fullWidth
                            type="password"
                            // value={comment}
                            // onChange={e => setComment(e.target.value)}

                        />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
            <TextField
                            variant="outlined"
                            margin="normal"
                            label="New Password"
                            required
                            fullWidth
                            type="password"
                            // value={comment}
                            // onChange={e => setComment(e.target.value)}

                        />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
            <TextField
                            variant="outlined"
                            margin="normal"
                            label="Check Password"
                            required
                            fullWidth
                            type="password"
                            // value={comment}
                            // onChange={e => setComment(e.target.value)}

                        />
            </Paper>
          </Grid>
          
          <Grid item xs={5}>
           <Button
           type="submit"
           fullWidth
           variant="contained"
           color="lightcoral"
           className={classes.submit}
           onmouseover="this.style.color='lightcoral'">UPDATE PASSWORD</Button>
          </Grid>
          </Grid>
          
          
        </Grid>
      </div>
    );
}