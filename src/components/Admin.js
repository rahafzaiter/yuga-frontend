import React, { useState, useEffect, Component } from "react";
//Nav:
import AdminNav from './AdminNav'

import { makeStyles } from '@material-ui/core/styles';

//switch
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Admin Pages:
//login:
// import SignInSideAdmin from '../Admin/components/SignInAdmin'
import NameForm from '../Tutorial/components/NameForm'
import LogoutControl from '../Admin/components/Logout'
// Admin/Product:
import AddTutorial from "../Admin/components/Add_Product";
import Tutorial from "../Admin/components/Tutorial";
import TutorialsList from "../Admin/components/Product_List";
import EditProduct from "../Admin/components/CRUD_Product/EditProduct";
//Admin/category:
import CategoryList from "../Admin/components/Category_List";
//Admin/Orders:
import OrdersCust from "../Admin/components/Admin_Orders/Orders";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },

});

export default function Admin() {
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
                <AdminNav />
                <Switch>
                   
                    <Route exact path={["/Admin/", "/tutorials"]} component={TutorialsList} />
                    <Route path="/Admin/add" component={AddTutorial} />
                    <Route path="/Admin/tutorials/:id" component={Tutorial} />
                    <Route path="/Admin/Product/EditUser/:id" component={EditProduct} />
                    <Route path="/Admin/categoryList" component={CategoryList} />
                    <Route path="/Admin/orders" component={OrdersCust} />
                    <Route path="/Admin/nameForm" component={NameForm} />
                    <Route path="/Admin/logout" component={LogoutControl} />
                </Switch>

            </Router>
        </div>
    );
}