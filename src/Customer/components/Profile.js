import { ListItemSecondaryAction } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/undraw_things_to_say_ewwb.svg'
import { TextField, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexGrow: 2,
        flexDirection: "column",
        marginTop: "20px"
    },
    rootPage: {
        display: "flex",
        flexGrow: 2,
        flexDirection: "root"
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
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
        borderRadius: 10,
        border: "1px solid rgb(214, 34, 145)",
        fontSize: "16px",
        fontWeight: 'bold'
    },
    countryList: {
        ...theme.typography.body1,
    },
}));


export default function Profile(props) {

    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("customer")));
    const [profule, setProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        passowrd: "",

    });

    const [id] = useState(JSON.parse(localStorage.getItem("customerId")));

    //to update the profile in backend
    const UpdateUserById = async (id, updateduser) => {
        console.log('in updateUser method', updateduser)
        await axios.put(`http://127.0.0.1:8000/api/users/${id}`, updateduser)
            .then(response => {
                console.error('this user', response.data)
                localStorage.setItem("customer", JSON.stringify(response.data));
            }).catch(error => {
                console.error('There was an error!', error);
            });
    };

    //call the update profile url and save info of updated user
    const submitProfile = (e) => {
        e.preventDefault();
        UpdateUserById(id, user)
        localStorage.setItem("user", JSON.stringify(user));
    }

    return (
        <div className="container" style={{ width: '100%' }} >
            <Grid spacing={3} className={classes.rootPage}>
                <Grid xs={7} style={{
                    height: "600px", width: "400px", objectFit: "cover",
                    backgroundImage: `url(${Image})`, backgroundRepeat: "no-repeat"
                }}></Grid>
                <Grid xs={5} className={classes.root} >
                    <Grid item xs={10}>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                            variant="outlined"
                            label="First Name"
                            value={user.firstname}
                            required
                            fullWidth
                            type="textarea"
                            onChange={e => setUser({
                                ...user,
                                firstname: e.target.value
                            })}
                        />
                    </Grid>

                    <Grid item xs={10}>

                        <TextField
                            variant="outlined"
                            label="Last Name"
                            value={user.lastname}
                            required
                            fullWidth
                            type="textarea"
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
                            maxLength="8"
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