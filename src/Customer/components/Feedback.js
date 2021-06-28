import React, { useEffect, useState } from "react";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Image from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/feedbackB.png'
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Customer/Feedback.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { shadows } from '@material-ui/system';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Submit from "react-formal/cjs/Submit";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        // height: '100%',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    image: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: 'lightcoral',
        color: 'white',
        padding: 10,
        borderRadius: 10,
        border: "1px solid rgb(122, 121, 121)",
        marginright: 10,

    },
    formControl: {
        margin: theme.spacing(1),
        // Width: "100%",
        minWidth: "100%",
        fontSize: "100%"

        // display:'block'

    },

}));

export default function Feedback(props) {
    const classes = useStyles();
    const [state, setState] = useState({

        categories: props.categ,
        selectedCategory: " ",

    });
    const [comment, setComment] = useState('');
    const [rate, setRate] = useState('');


    const handleChangeCategory = (e) => {
        setState({
            ...state,
            selectedCategory: e.target.value
        });


    };

    const Submit = () => {
        if (!rate || !comment || !state.selectedCategory) {
            alert("please fill all inputs")
        } else {
            alert("Thankyou for your feedback")
            console.log("rate", rate)
            setRate('')
            setComment('')
            setState({
                ...state,
                selectedCategory: ''
            });
        }

    }

    return (
        <Grid container
        //  component="main" 
         className={classes.root}
         >
            <Grid item xs={5} sm={4} md={6} className={classes.image} />
            <Grid item xs={5} sm={9} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper} >

                    <Typography component="h1" variant="h4" >
                        How Satisfied were you with Yuga ?
          </Typography>

                    <form className={classes.form} noValidate onSubmit={e => e.preventDefault()}>

                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="position" name="position" defaultValue="top"
                                value={rate}
                                onChange={e => setRate(e.target.value)}>
                                <FormControlLabel
                                    value="1"
                                    control={<Radio backgroundColor="#FC3C80" />}
                                    label="1"
                                    labelPlacement="top"
                                />
                                <FormControlLabel
                                    value="2"
                                    control={<Radio backgroundColor="#FC3C80" />}
                                    label="2"
                                    labelPlacement="top"
                                />
                                <FormControlLabel
                                    value="3"
                                    control={<Radio backgroundColor="#FC3C80" />}
                                    label="3"
                                    labelPlacement="top"
                                />
                                <FormControlLabel value="4" control={<Radio backgroundColor="#FC3C80" />} label="4" labelPlacement="top" />
                                <FormControlLabel
                                    value="5"
                                    control={<Radio backgroundColor="#FC3C80" />}
                                    label="5"
                                    labelPlacement="top"
                                />
                            </RadioGroup>
                        </FormControl>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            label="comment"
                            required
                            fullWidth
                            type="textarea"
                            value={comment}
                            onChange={e => setComment(e.target.value)}

                        />

                        <FormControl className={classes.formControl}>
                            <InputLabel>Select Your Favorite Category </InputLabel>
                            <Select
                                native
                                value={state.selectedCategory}
                                onChange={handleChangeCategory}
                            >
                                <option aria-label="None" value="" />
                                {state.categories.map(category => {
                                    return (
                                        <option
                                            key={category.id}
                                            name={category.name}
                                            value={category.name}
                                        >
                                            {category.name}
                                        </option>
                                    )
                                })
                                }

                            </Select>
                        </FormControl>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            // color="lightcoral"
                            style={{backgroundColor:'#FC3C80',color:'white'}}
                            className={classes.submit}
                            onmouseover="this.style.color='lightcoral'"
                            onClick={Submit} > Submit </Button>


                    </form>
                </div>
            </Grid>
        </Grid>
    );
}