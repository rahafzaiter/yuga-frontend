import { ListItemSecondaryAction } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/undraw_things_to_say_ewwb.svg'
import ReactPhoneInput from 'react-phone-input-material-ui';
import { TextField, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        flexGrow: 2,
        flexDirection:"column",
        marginTop:"20px"
    },
    rootPage: {
        display:"flex",
        flexGrow: 2,
        // marginTop:"50px",
        flexDirection:"root"
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        // width:"50%"

    },
    paperPhone: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '50%'

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#FF00A7',
        color: 'black',
        // padding: 10,
        // width: '80%',
        borderRadius: 10,
        border: "1px solid rgb(214, 34, 145)",
        fontSize: "16px",
        fontWeight: 'bold'
        // marginright: 10,
        // marginleft: 20,

    },
    countryList: {
        ...theme.typography.body1,
      },
}));


export default function Profile(props) {

    const classes = useStyles();
    const [users,setUsers]=useState(JSON.parse(localStorage.getItem("user")));
    const [user,setUser]=useState(users.user);
    const [profule,setProfile]=useState({
        firstName:"",
        lastName:"",
        email:"",
        passowrd:"",

    });
     const maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
         object.target.value = object.target.value.slice(0, object.target.maxLength)
          }
        }

       const submitProfile=(e)=>{
           e.preventDefault();
           localStorage.setItem("user",JSON.stringify({user}));
       }

    return (
        <div className="container"  style={{ width: '100%' }} >
            
            <Grid  spacing={3} className={classes.rootPage}>
            <Grid xs={7} style={{height: "600px",width:"400px",objectFit:"cover",
        backgroundImage: `url(${Image})`,backgroundRepeat:"no-repeat" }}></Grid>
            <Grid  xs={5}  className={classes.root} >
            <Grid item xs={10}>
                {/* <h3 align="left">Account</h3> */}
            </Grid>
                <Grid item xs={10}>
                    
                        <TextField
                            variant="outlined"
                            // margin="normal"
                            label="First Name"
                            value={user.firstname}
                            required
                            fullWidth
                            type="textarea"
                        // value={comment}
                        onChange={e => setUser({
                            ...user,
                            firstname: e.target.value
                        })}

                        />
                   
                </Grid>

                <Grid item xs={10}>
                   
                        <TextField
                            variant="outlined"
                            // margin="normal"
                            label="Last Name"
                            value={user.lastname}
                            required
                            fullWidth
                            type="textarea"
                        // value={comment}
                        onChange={e => setUser({
                            ...user,
                            lastname: e.target.value
                        })}
                        />
                    
                </Grid>
                <Grid item xs={10}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        value={user.email}
                        label="Email"
                        required
                        fullWidth
                        type="email"
                        onChange={e => setUser({
                            ...user,
                            email: e.target.value
                        })}

                    />
                </Grid>
                <Grid item xs={10}>
                    
                        <TextField
                            variant="outlined"
                            margin="normal"
                            label="Phone Nb"
                            required
                            fullWidth
                            type="number"
                            value={user.phoneNb}
                            // pattern="[7-9]{1}[0-9]{9}"
                            maxLength = "8"
                            // onInput={maxLengthCheck} 
                        // value={comment}
                        onChange={e => setUser({
                            ...user,
                            phoneNb: e.target.value
                        })}

                        />
                </Grid>
                
                <Grid item xs={10}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="lightcoral"
                        className={classes.submit}
                        onClick={submitProfile}
                        onmouseover="this.style.color='fushcial'">Update Profile</Button>
                </Grid>
                </Grid>
     
            </Grid>
        </div>
    );
}