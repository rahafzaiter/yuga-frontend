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
import SignInSideAdmin from '../Admin/components/SignInAdmin'
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
    },

});

export default function Admin(props) {
    const [cart, setCart] = useState([]);
    //Styles:(
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [user, setUser] = useState(null);

    const [Products,setProduct]=useState(props.Products);

    const [categories,setCategories]=useState(props.categories);

    const addProducts = item => {
        const newList = Products.concat(item);
        localStorage.setItem('Products',JSON.stringify(newList))
        setProduct(newList)
        // history.push("/Customer/CustCart")
    };





    const defaultProps = {
        // bgcolor: 'background.paper',
        m: 1,
        borderColor: 'grey',
    };

    useEffect(()=>{
        localStorage.setItem('Products',JSON.stringify(Products))
        console.log("in Admin Page",localStorage.getItem("Products"));
        console.log("Categories in Admin",categories);
        console.log("Categories in Admin with props",props.categories)

    },[])

    useEffect(()=>{
        setCategories(props.categories)

    },[props.categories])



    return (
        <div>
            <Router>
                <AdminNav />
                <Switch>
                {/* <Route path={["/Admin/AdminLogin"]} component={SignInSideAdmin} /> */}
                   
                    <Route  path={["/Admin/HomePage", "/Admin/tutorials"]} component={TutorialsList} Products={Products} />

                    <Route path="/Admin/addProduct" >
                        <AddProduct Products={Products} addProducts={addProducts} />
                    </Route>
                    <Route path="/Admin/tutorials/:id" component={Tutorial} />
                    <Route path="/Admin/Product/EditUser/:id" component={EditProduct} />
                    <Route path="/Admin/categoryList" component={CategoryList} categories={props.categories} />
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