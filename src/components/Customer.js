import React, { useState, useEffect, Component } from "react";
//Nav:
import Navigation from './nav'

import { makeStyles } from '@material-ui/core/styles';

//CustomerHome:
import HomePageCustomer from '../HomePageCustomer'
import SignInSide from '../Customer/components/SignInCust'
import SignUp from '../Customer/components/SignUpCust'
import Album from '../Customer/components/ShopProduct'
import ShippingDetails from '../Customer/components/ShippingAndDelivery'
import ProductDetails from '../Customer/components/ProductDetails'
import Checkout from '../Customer/components/Checkout'
import ShoppingCart from '../Customer/components/ShoppingCart';
import SignInSideAdmin from '../Admin/components/SignInAdmin'
//switch
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },

});

const items = [];
const addItem = item => {
    const newList = cart.concat(item);
    setCart(newList)
    // add the given item to the cart
};


export default function Customer() {
    const [cart, setCart] = useState([]);
    //Styles:(
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [user, setUser] = useState(null);


    const defaultProps = {
        // bgcolor: 'background.paper',
        m: 1,
        borderColor: 'grey',
    };

    return (
        <div>
            <Router>
                <Navigation />
                <Switch>

                    <Route path={["/Customer/AdminLogin"]} component={SignInSideAdmin} />

                    <Route exact path={["/Customer/", "/CustHomePage"]} component={HomePageCustomer} user={user} setUser={setUser} />
                    <Route path="/Customer/custAuthentication" component={SignInSide} />
                    {/* <Route path="/Admin/logout" component={LogoutControl} /> */}

                    <Route path="/Customer/SignUp" >
                        <SignUp user={user} setUser={setUser} />
                    </Route>

                    <Route path={["/Customer/CustProductGallery"]} component={Album} >
                        <Album addItem={addItem} /></Route>

                    <Route path={["/Customer/CustShipping"]} component={ShippingDetails} />

                    <Route path="/Customer/ProductDetails/:id" >
                        <ProductDetails addItem={addItem} />
                    </Route>

                    <Route path={["/Customer/checkout"]} component={Checkout} />

                    <Route exact path={["/Customer/CustCart"]} component={ShoppingCart} >
                        <ShoppingCart cart={cart} />
                    </Route>
                </Switch>
            </Router>
        </div>


    );
}