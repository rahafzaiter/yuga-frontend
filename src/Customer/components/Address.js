import { ListItemSecondaryAction } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/Account.jpg'
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
     
    },
    submit: {
       
            margin: theme.spacing(3, 0, 2),
            background: 'lightcoral',
            color: 'white',
            padding: 10,
            width: '80%',
            borderRadius: 10,
            border: "1px solid rgb(122, 121, 121)",
            marginright: 10,
            marginleft: 20, 

    },
  }));
  

export default function Address(){
    const classes = useStyles();

    return(
        <div className="container" style={{ width: '100%',minHeight:'500px',height:"100%"}} >
        <Grid container spacing={2} className={classes.root} >
          <Grid item xs={6}>
            <Paper className={classes.paper}>
            <TextField
                            variant="outlined"
                            margin="normal"
                            label="City"
                            required
                            fullWidth
                            type="textarea"
                            // value={comment}
                            // onChange={e => setComment(e.target.value)}

                        />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
            <TextField
                            variant="outlined"
                            margin="normal"
                            label="Street"
                            required
                            fullWidth
                            type="textarea"
                            // value={comment}
                            // onChange={e => setComment(e.target.value)}

                        />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
            <TextField
                            variant="outlined"
                            margin="normal"
                            label="Building"
                            required
                            fullWidth
                            type="textarea"
                            // value={comment}
                            // onChange={e => setComment(e.target.value)}

                        />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}> <TextField
                            variant="outlined"
                            margin="normal"
                            label="Floor"
                            required
                            fullWidth
                            type="number"
                            // value={comment}
                            // onChange={e => setComment(e.target.value)}

                        /></Paper>
          </Grid>
          <Grid item xs={4}>
           <Button
           type="submit"
           fullWidth
           variant="contained"
           color="lightcoral"
           className={classes.submit}
           onmouseover="this.style.color='lightcoral'">Update Address</Button>
          </Grid>
          
          
        </Grid>
      </div>
    );
}