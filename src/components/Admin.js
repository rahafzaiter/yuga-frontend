import React, { useState, useEffect, Component } from "react";
//Nav:
import AdminNav from './AdminNav2'

import { makeStyles } from '@material-ui/core/styles';

//switch
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Admin Pages:
//login:
// import SignInSideAdmin from '../Admin/components/SignInAdmin'
import NameForm from '../Tutorial/components/NameForm'
import LogoutControl from '../Admin/components/Logout'

// Admin/Product:
import AddProduct from "../Admin/components/AddProduct";
import Tutorial from "../Admin/components/Tutorial";
import TutorialsList from "../Admin/components/Product_List";
import EditProduct from "../Admin/components/CRUD_Product/EditProduct";

//Admin/category:
import CategoryList from "../Admin/components/Category_List";

//Admin/Orders:
import OrdersCust from "../Admin/components/Admin_Orders/Orders";
import ViewProduct from "../Admin/components/CRUD_Product/ViewProduct";
import FeedbackAdmin from "../Admin/components/FeedbackAdmin";

import Customer from "./Customer";

const useStyles = makeStyles({
    root: {
        width: '100%',
    }
});

export default function Admin(props) {

    return (
        <div>
            <Router>
                <AdminNav />

                <Switch>      
                    <Route  path={["/Admin/HomePage"]} component={TutorialsList}/>
                    <Route path="/Admin/addProduct" >
                        <AddProduct/>
                    </Route>
                    <Route path="/Admin/tutorials/:id" component={Tutorial} />
                    <Route path="/Admin/Product/EditUser/:id" component={EditProduct} />
                    <Route path="/Admin/categoryList" component={CategoryList}  />
                    <Route path="/Admin/orders" component={OrdersCust} />
                    <Route path="/Admin/nameForm" component={NameForm} />
                    <Route path="/Admin/logout" component={LogoutControl} />
                    <Route exact path={["/Customer"]} component={Customer}/>
                    <Route exact path={["/Admin/ViewProduct"]} component={ViewProduct}/>
                    <Route exact path={["/Admin/feedbacks"]} component={FeedbackAdmin}/>
                </Switch>

            </Router>
        </div>
    );
}