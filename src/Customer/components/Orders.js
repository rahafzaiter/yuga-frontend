
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OneOrder from './OneOrder';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Logo from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/logoPinkDress.jpeg"
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Customer/Order.scss'
import back from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/undraw_Online_shopping_re_k1sv.svg"
const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
       
        minHeight:'1000px',
        width:"100%",
        

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));



export default function Orders(props) {
    const classes = useStyles();
    const [allorders, setAllOrders] = useState(JSON.parse(window.localStorage.getItem("orders")));

    useEffect(() => {
        setAllOrders(JSON.parse(window.localStorage.getItem("orders")));
        console.log("all Orders in order page", allorders);
        console.log("user in orders", props.user.user)
    }, [])

    return (
        <div>
            <div container className={classes.root} >
                <Grid className="container" spacing={3} >
                <Grid item xs={12} className="shopping-cart_item">
                        <Grid item xs={12} >
                            <h2 style={{ fontSize: 40}}>Thank you for your orders {props.user.user.firstname} {props.user.user.lastname} 
                            
                            <img src={Logo} style={{height:"40px", width:"200px"  }} alt="Yuga logo" /></h2>
                            </Grid>
                        </Grid>
                    
                    { allorders==null ?  (
                   <div  style={{ backgroundImage: `url(${back})`,height:'700px'}}>
                        <Grid item xs={12}>
                        <h1></h1>
                        </Grid>
                        <Grid item xs={6}>
                        <h1></h1>
                        </Grid>
                        <Grid item xs={6} >
                        {/* <h1 style={{padding:'200px',margin:'90px'}}>Still no orders yet, What are you waiting for?  </h1> */}
                        </Grid>
                        </div>
                    )
                         :
                         

                       
                       

                       

                        
                        
                 allorders.map((order, index) => (
                        <Accordion key={index} style={{ width: "100%" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography className={classes.heading}>Order {index+1}</Typography>
                            </AccordionSummary>

                            <AccordionDetails >
                                <Typography style={{ width: "100%" }}>

                                    <Grid container spacing={2}>
                                        <Grid item xs={6} >
                                            <Box  fontSize="h6.fontSize">
                                            <Paper fontWeight="fontWeightBold">Total </Paper>
                                            <Paper className={classes.paper}>{order.totalprice} LBP</Paper>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={6} >
                                            <Box>
                                            <Paper>Date</Paper>
                                            <Paper shadow className={classes.paper}> {order.date}</Paper>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <OneOrder item={order.cart.allcarts} /> 
                                        </Grid>

                                    </Grid>


                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))
                    
                }

                </Grid>             
            </div>

        </div>
    )
}