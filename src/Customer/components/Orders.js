
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OneOrder from './OneOrder';
import Box from '@material-ui/core/Box';
import Logo from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/logoPinkDress.jpeg"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
            <div className="container">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h3>Thank you for your orders   {props.user.user.firstname} {props.user.user.lastname} 
                        <img src={Logo} height="80px" width="115px" alt="Yuga logo" /></h3>
                    </Grid>
                    {allorders.map((order, index) => (
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
                                            <Paper className={classes.paper}>{order.totalprice},000 L.B.P</Paper>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={6} >
                                            <Box>
                                            <Paper>Date</Paper>
                                            <Paper className={classes.paper}> {order.date}</Paper>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Paper className={classes.paper}><OneOrder item={order.cart.allcarts} /> </Paper>
                                        </Grid>

                                    </Grid>


                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Grid>
            </div>

        </div>
    )
}