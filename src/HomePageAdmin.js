import React, { Component } from "react";

//Style:
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
////////////////////////////////////////////////////////////////////////


//Admin Pages:
import NameForm from './Tutorial/components/NameForm'
import LogoutControl from './Admin/components/Logout'
// Admin/Product:
import Tutorial from "./Admin/components/Tutorial";
import TutorialsList from "./Admin/components/Product_List";
import EditProduct from "./Admin/components/CRUD_Product/EditProduct";
//Admin/category:
import CategoryList from "./Admin/components/Category_List";
//Admin/Orders:
import OrdersCust from "./Admin/components/Admin_Orders/Orders";

//switch
import { Switch, Route, Link } from "react-router-dom";

function HomePageAdmin (){
    return(
    <div>
    {/* Routing Switch */}
   
    <div className="container mt-3">
          <Switch>
            {/* https://bezkoder.com/react-crud-web-api/ */}
          <Route exact path={["/Admin/", "/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
          <Route exact path="/Product/EditUser/:id" component={EditProduct} />
          <Route path="/categoryList" component={CategoryList} />
          <Route path="/orders" component={OrdersCust} />
          <Route path="/nameForm" component={NameForm} />  
          <Route path="/logout" component={LogoutControl} />  
      </Switch>
    </div>

    </div>//Container
  );
}

export default HomePageAdmin;