import React, { useEffect, useState } from "react";
import db from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/firebase.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Image from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/feedbackB.png'
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Customer/Feedback.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}



const useStyles = makeStyles((theme) => ({
    root: {
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
        background: 'rgb(240, 18, 155)',
        color: 'black',
        padding: 10,
        borderRadius: 10,
        border: "1px solid rgb(122, 121, 121)",
        marginright: 10,
        fontSize: "17px",
        fontWeight: 'bold'

    },
    paperModel: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",
        fontSize: "100%"
    },

}));

export default function Feedback(props) {
    const classes = useStyles();
    const loading=useState(false);
    const ref =db.firestore().collection('feedback');

    const [state, setState] = useState({
        categories: props.categ,
        selectedCategory: " ",
    });
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [comment, setComment] = useState('');
    const [rate, setRate] = useState('');
    const [categories, setCategories] = useState([]);
    const [id] = useState(JSON.parse(localStorage.getItem("customerId")));


    //display all categories 
    const loadCategories = async () => {
        const result = await axios.get("http://127.0.0.1:8000/api/categories/");
        setCategories(result.data.reverse())

    };

    //add feedback to backend 
    const addFeedback = feedback => {
        const article = feedback;
        console.log('feedback', article)
        axios.post('http://127.0.0.1:8000/api/feedbacks', article, { headers: { "Content-Type": "application/json" } })
    };


    useEffect(() => {
        loadCategories();
        console.log('ref',ref);
    }, [])

    //fill selected category whech choose one of the list
    const handleChangeCategory = (e) => {
        setState({
            ...state,
            selectedCategory: e.target.value
        });
    };

    //related to modal
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [text, setText] = useState('Thank you for your feedback');

    //text displayed in modal
    const bodyAfterAdd = (
        <div style={modalStyle} className={classes.paperModel}>
            <h2 id="simple-modal-title">Yuga</h2>
            <p id="simple-modal-description">
                {text}
            </p>
        </div>
    );



    //when click on submit button
    const Submit = () => {
        handleOpen();
        if (!rate || !comment || !state.selectedCategory) {
            setText("please fill all inputs");
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {bodyAfterAdd}
            </Modal>
        } else {
            const data = { rate: parseInt(rate), comment: comment, user_Id: id, category_name: state.selectedCategory };
           
            // const db = firebase.firestore();
            ref.add({
                    rate: data.rate,
                    comment:data.comment,
                    category_name:data.category_name
                    //sender:"me",
                })
                .then(() => {
                    console.log('Document successfully written');
                })
                .catch((error) => {
                    console.log("Error written", error);
                });
                
                addFeedback(data);
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {bodyAfterAdd}
            </Modal>
        }
    }


    return (
        <Grid container
            className={classes.root} >
            <Grid item xs={5} sm={4} md={6} className={classes.image} />
            <Grid item xs={5} sm={9} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper} >
                    <Typography component="h1" variant="h4" >
                        How satisfied were you with Yuga ?
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
                                {categories.map(category => {
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
                            className={classes.submit}
                            onmouseover="this.style.color='#FC3C80'"
                            onClick={Submit} > SUBMIT </Button>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            {bodyAfterAdd}
                        </Modal>


                    </form>
                </div>
            </Grid>
        </Grid>
    );
}