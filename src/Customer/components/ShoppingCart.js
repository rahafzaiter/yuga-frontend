import React, { useEffect, useState } from 'react';
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/App.css'
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Redirect, Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core';
import './shopCart.scss'
import Modal from '@material-ui/core/Modal';
import { CardTravel } from '@material-ui/icons';


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
        width: "100%",
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
        minHeight: "900px",
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    table: {
        minWidth: 650,
    },
    paperModel: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const defaultProps = {
    bgcolor: 'white',
    border: 2,
    m: 2,
    borderColor: 'black',
};

//https://github.com/LambdaSchool/react-shopping-cart/tree/master/src 

function ShoppingCart({ cart, setCart }) {
    const classes = useStyles();
    const [cartL,setCartL]=useState(JSON.parse(localStorage.getItem('inCart')));
    const [allcarts, setAllCarts] = useState([]);
    const history = useHistory();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    //calculate the total
    const getCartTotal = () => {
        return cartL.reduce((acc, value) => {
            return acc + value.Product.card.price;
        }, 0).toFixed(0)
    };

    useEffect(() => {
        console.log("cart", cart)
        setAllCarts(cartL)
    }, [cartL]);



    //to remove everything from cart when checkout
    const remove = () => {
        localStorage.removeItem("cartItems");
        localStorage.removeItem("cartTotalPrice");   
    };

    //related to modal
    const handleOpen = () => {
        setOpen(true);
    };

    //related to modal
    const handleClose = () => {
        setOpen(false);
    };

    let y = 0;

    //text in modal if the cart is empty and user click on checkout
    const bodyAfterAdd = (
        <div style={modalStyle} className={classes.paperModel}>
            <h2 id="simple-modal-title">Yuga</h2>
            <p id="simple-modal-description">
                You should add items before checkout
            </p>
        </div>
    );

    //when remove item from the cart
    const removeItemFromBasket = (itemId) => {
        const items = allcarts.filter(item => item.id !== itemId);
        setCart(items);
        localStorage.setItem('inCart',JSON.stringify(items));
        setCartL(items);
        setAllCarts(items);
    }


    return (
        <React.Fragment>
            <Container className={classes.cardGrid} >

                <Grid
                    className={classes.root}
                >
                    <Typography variant="h4" align="left" className="CartTitle">My Cart</Typography>
                    <Grid container spacing={2} style={{ marginTop: "40px" }}>
                        <Grid item xs={8}>
                            <TableContainer >
                                <Table borderBottom={2} style={
                                    {
                                        border: '3px solid black'
                                    }}
                                    className={classes.table} aria-label="simple table">
                                    <TableHead >
                                        <TableRow {...defaultProps} borderBottom={2} style={
                                            {
                                                border: '2px solid black'
                                            }
                                        }>
                                            <TableCell style={{ fontSize: 20 }} align="left">Image</TableCell>
                                            <TableCell style={{ fontSize: 20 }} align="left">Product</TableCell>
                                            <TableCell style={{ fontSize: 20 }} align="left">Size</TableCell>
                                            <TableCell style={{ fontSize: 20 }} align="left">Price (LBP)</TableCell>
                                            <TableCell align="right"></TableCell>
                                        </TableRow>
                                    </TableHead>

                                    {cartL.length == 0 ?
                                        (
                                            <TableBody></TableBody>
                                        ) :

                                        <TableBody>
                                            {cartL.map((item, index) => (
                                                <TableRow key={index} {...item}>
                                                    <TableCell align="left">
                                                        <img width="150px" height="150px" objectFit="cover" src={item.Product.card.image} alt={`${item.Product.card.title} book`} />
                                                    </TableCell>
                                                    <TableCell style={{ fontSize: 18 }} align="left">{item.Product.card.title}</TableCell>
                                                    <TableCell style={{ fontSize: 18 }} align="left">{item.size}</TableCell>
                                                    <TableCell style={{ fontSize: 18 }} align="left">{y = new Intl.NumberFormat(),
                                                        y.format(item.Product.card.price)}</TableCell>
                                                    <TableCell style={{ fontSize: 18 }} align="right"><button onClick={() => removeItemFromBasket(item.id)}>X</button></TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    }
                                </Table>
                            </TableContainer>
                            <button onClick={()=>{history.push("/Customer/CustProductGallery")}} style={{backgroundColor:"white",color:'blue'}}> Continue Shopping</button>
                        </Grid>

                        <Grid item xs={4}>
                            <p><h4>Subtotal : </h4>
                                {
                                    y = new Intl.NumberFormat(),
                                    y.format(getCartTotal())}LBP</p>

                            <button
                                className="buttn"
                                style={{ width: "80%" }}
                                onClick={(() => {
                                    if (cartL.length != 0) {
                                        remove();
                                        localStorage.setItem('cartItems', JSON.stringify({ allcarts }))
                                        localStorage.setItem('cartTotalPrice', JSON.stringify(getCartTotal()))
                                        history.push("/Customer/checkout")
                                    }
                                    else {
                                        handleOpen();
                                    }
                                })}
                            > CHECKOUT</button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {bodyAfterAdd}
                            </Modal>
                            <p>excluding taxes and shipping costs</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

        </React.Fragment>
    );
};

export default ShoppingCart;

