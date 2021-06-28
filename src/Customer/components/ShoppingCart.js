import React, { useEffect, useState } from 'react';
import Item from './ShoppingCartItem';
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/App.css'
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Redirect, Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "80%",
        

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    checkout: {
        maxHeight: "10%",
        background: " #292b2c",
        color: "white",
    },
    cardGrid: {
        minHeight:"900px",

        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },

}));

//https://github.com/LambdaSchool/react-shopping-cart/tree/master/src 

function ShoppingCart({ cart }) {
    const classes = useStyles();
    const [allcarts, setAllCarts] = useState(cart);
    const history = useHistory();


    const getCartTotal = () => {
        return cart.reduce((acc, value) => {
            return acc + value.Product.card.price;
        }, 0).toFixed(0)
    };
    const x = 0;

    // const getCartTotal = (value) => {

    // 		x=x+ value;
    //         return x;
    // };



    useEffect(() => {
        console.log("cart", cart)
    }, []);

    const remove = () => {
        localStorage.removeItem("cartItems");
        localStorage.removeItem("cartTotalPrice");
    };


    return (
        <React.Fragment>
            <Container  className={classes.cardGrid} maxWidth="lg">

                <Grid
                    className={classes.root}
                    className="shopping-cart"
                >
                    <Grid container spacing={2}>

                        <Grid item xs={8}>

                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow >
                                            <TableCell></TableCell>
                                            <TableCell style={{ fontSize: 21}} align="right">Product</TableCell>
                                            <TableCell style={{ fontSize: 21}} align="right">Size</TableCell>
                                            <TableCell style={{ fontSize: 21}} align="right">Price (LBP)</TableCell>
                                            <TableCell align="right"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {allcarts.map((item, index) => (
                                            <TableRow key={index} {...item}>
                                                <TableCell component="th" scope="row">
                                                    <img width="150px" height="100px" objectFit="cover" src={item.Product.card.image} alt={`${item.Product.card.title} book`} />
                                                </TableCell>
                                                <TableCell style={{ fontSize: 18}} align="right">{item.Product.card.title}</TableCell>
                                                <TableCell style={{ fontSize: 18}} align="right">{item.size}</TableCell>
                                                <TableCell style={{ fontSize: 18}} align="right">{item.Product.card.price}</TableCell>
                                                <TableCell style={{ fontSize: 18}} align="right"><button>X</button></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>


                            {/* {allcarts.map((item, index) => (
                                    <Grid item xs={4} spacing={3}>
                                        <Paper className={classes.paper} shadow>
                                            <Item key={index} {...item} />
                                        </Paper>
                                    </Grid>
                                ))} */}

                        </Grid>

                        <Grid item xs={3}>
                           
                            <p><h3>Subtotal :  </h3> {getCartTotal()} LBP</p>

                            <button
                            style={{width:"90%"}}
                                onClick={(() => {
                                    if (cart.length != 0) {
                                        remove();
                                        localStorage.setItem('cartItems', JSON.stringify({ allcarts }))
                                        localStorage.setItem('cartTotalPrice', JSON.stringify(getCartTotal()))
                                        history.push("/Customer/checkout")
                                    }
                                    else {
                                        alert("you should add items before checkout")
                                    }
                                })}
                            >Checkout</button>
                            <p>before taxes and shipping costs</p>

                        </Grid>

                    </Grid>

                </Grid>
            </Container>

        </React.Fragment>
    );
};

export default ShoppingCart;

{/* 
                    <Grid item  xs={12}  >

                        {allcarts.map((item, index) => (
                             <Grid item xs={4} spacing={3}>
                            <Paper className={classes.paper} shadow>
                            <Item key={index} {...item} />
                            </Paper>
                            </Grid>
                             //{getCartTotal(item.Product.card.price)}
                        ))}
                    </Grid>
                    <Grid item xs={12} 
                    //  className={classes.checkout}
                     className="shopping-cart__checkout "
                     > 

                        <p>Total :  {getCartTotal()} LBP</p>

                        <button
                            onClick={(() => {
                                if (cart.length != 0) {
                                    remove();
                                    localStorage.setItem('cartItems', JSON.stringify({ allcarts }))
                                    localStorage.setItem('cartTotalPrice', JSON.stringify(getCartTotal()))
                                    history.push("/Customer/checkout")
                                }
                                else {
                                    alert("you should add items before checkout")
                                }
                            })}
                        >Checkout</button>
                    </Grid>
                </Grid> */}

