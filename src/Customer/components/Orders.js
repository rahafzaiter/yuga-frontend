
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OneOrder from './OneOrder';
import Grid from '@material-ui/core/Grid';
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Customer/Order.scss'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '1000px',
        width: "100%",
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
    const [allorders, setAllOrders] = useState([]);
    const [customer_id] = useState(JSON.parse(localStorage.getItem("customerId")));
    const[orders,setOrders]=useState([]);
    const [firstname]=useState(JSON.parse(localStorage.getItem("customer")).firstname);
    const [lastname]=useState(JSON.parse(localStorage.getItem("customer")).lastname);

    const [orderId,setOrderId]=useState(0);

    //return All orders  by customerid
    const loadOrdersByCustId = async (id) => {
        const result = await axios.get(`http://127.0.0.1:8000/api/ordersbyCustomer/${id}`);
        setOrders(result.data)
        console.log("orders by customer id ", result.data);
    };

    

    useEffect(() => {
        loadOrdersByCustId(customer_id);
        setAllOrders(JSON.parse(window.localStorage.getItem("orders")));
        console.log("all Orders in order page", allorders);
        console.log("user in orders", props.user.user)
    }, []);


    return (
        <div>
            <div container className={classes.root} >
                <Grid className="container" spacing={3} >
                    {orders.length==0 ? (
                        <div>
                            <Grid item xs={12}>
                                <h1> Hey Sweety! What are you waiting for? Order your item now !</h1>
                            </Grid>

                        </div>
                    )
                        :
                        (
                            <div>
                                <Grid item xs={12} style={{ fontSize: 30, marginBottom: "30px", marginTop: "40px" }}>

                                    <h2 className="Order_title">Thank you Sweety {firstname} {lastname} for your orders

                                    </h2>
                                </Grid>

                                {/* {allorders.map((order, index) => (
                                    <Accordion key={index} style={{ width: "100%" }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header">
                                            <Typography className={classes.heading} style={{ fontSize: 19 }}>Order {index + 1} /  Date: {order.date}</Typography>
                                        </AccordionSummary>

                                        <AccordionDetails >
                                            <Typography style={{ width: "95%" }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12}>
                                                        <OneOrder item={order.cart.allcarts} total={order.totalprice} />
                                                    </Grid>
                                                </Grid>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </div>
                        )} */}

                                {orders.map((order, index) => 
                                    // setOrderId(order.id);
                                // loadOrderItemsByOrdersId(order.id)
                                ( 
                                    <Accordion key={index} style={{ width: "100%" }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header">
                                            <Typography className={classes.heading} style={{ fontSize: 19 }}>Order {order.id} /  Date: {order.date}</Typography>
                                        </AccordionSummary>

                                        <AccordionDetails >
                                            <Typography style={{ width: "95%" }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12}>
                                                        <OneOrder orderId={order.id} total={order.total_price} />
                                                    </Grid>
                                                </Grid>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </div>
                        )}
                </Grid>

            </div>

        </div >
    )
    
}