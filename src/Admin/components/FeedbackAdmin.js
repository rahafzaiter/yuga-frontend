import React, { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Admin_Orders/Title';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import db from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/firebase.js';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  root: {
    width: '100%',
    color: "black",
    backgroundColor: "pink",
    marginRight: "20px",
    '& > * + *': {
      marginTop: theme.spacing(2),
    }
  }
}));

export default function FeedbackAdmin() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  const [myNotifications, setMyNotifications] = useState([]);

  //sort feedbacks by id
  function dynamicSort(property) {
    return function (a, b) {
      return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    }
  }

 
// var name;
  //get All feedbacks
  const loadFeedbacks = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/feedbacks/");
    // name=result.data.sort(dynamicSort('id'));
    setFeedbacks(result.data.sort(dynamicSort('id')));
    console.log(result.data.reverse());
  };

  function getNotification() {
    const ref =db.firestore().collection('feedback');
		// const db = firebase.firestore();

	ref.get()
			.then((snapshot) => {
				const n = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					n.push(data);
				});
				setMyNotifications(n);
        console.log('notifications',n[0])
        console.log('notifications category',n[0].category_name)
        if(n[0].category_name){
          var z=n[0].category_name
          alert( n[0].category_name + ' is recommended to be added in latest feedback by a customer  ')
         
        }
        // alert('you got a new feedback to add ',n[0].category_name)
			});
	}
   

  useEffect(() => {
    getNotification();
    loadFeedbacks();
    console.log('notifications',myNotifications[0])
    // alert('you got a new feedback to add ',myNotifications[0].category_name)
  }, [])

  return (
    <div className="container" style={{ minHeight: "900px", marginTop: "40px" }}>
      <React.Fragment>

        {/* <ReactNotification /> */}
        {/* <Application /> */}
        <Title >Recent Feedbacks</Title>
        <Collapse in={open} className={classes.root}>
          <Alert
            variant="filled" severity="info"
            action={
              <IconButton
                aria-label="close"
                color="white"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
             {feedbacks.length!=0? (<div>  A new feedback was added by {feedbacks[0].firstname + " " + feedbacks[0].lastname} .</div>) : (<div></div>) }
          </Alert>
        </Collapse>
        <Button

          style={{ margin: "20px" }}
          disabled={open}
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Re-open
        </Button>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" style={{ borderRadius: "25px", }}>
            <TableHead style={{ backgroundColor: '#5e5e5e', borderRadius: "25px", }}>
              <TableRow>
                <TableCell style={{ color: 'white', fontSize: "18px" }} component="th" scope="row">Customer id</TableCell>
                <TableCell style={{ color: 'white', fontSize: "18px" }}>Name</TableCell>
                <TableCell style={{ color: 'white', fontSize: "18px" }}>Rate</TableCell>
                <TableCell style={{ color: 'white', fontSize: "18px" }}>Comment</TableCell>
                <TableCell style={{ color: 'white', fontSize: "18px" }}>Favorite Category</TableCell>
              </TableRow>
            </TableHead>


            <TableBody style={{ backgroundColor: '#f1f1f1', borderRadius: "25px", }}>
              {feedbacks.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.user_id}</TableCell>
                  <TableCell >{row.firstname + " " + row.lastname}</TableCell>
                  <TableCell >{row.rate}</TableCell>
                  <TableCell >{row.comment}</TableCell>
                  <TableCell >{row.category_name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    </div>
  );
}