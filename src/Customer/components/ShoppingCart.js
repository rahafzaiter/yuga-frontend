import React, { useEffect, useState } from 'react';
import Item from './ShoppingCartItem';
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/App.css'
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Redirect, Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
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
    checkout:{
        maxHeight:"10%",
        background:" #292b2c",
		color: "white",
    },
      cardGrid: {
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
             <main>

             <Container className={classes.cardGrid} maxWidth="lg">
            <Grid
                className={classes.root}
                className="shopping-cart"
            >
                <Grid container spacing={3}>


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
                </Grid>
            </Grid>
          </Container> 
            </main>
        </React.Fragment>
    );
};

export default ShoppingCart;