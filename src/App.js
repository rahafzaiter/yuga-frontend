import React, { useState, useEffect, Component } from "react";

//Style:
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from '@material-ui/core/styles';

import Admin from './components/Admin'
import Customer from './components/Customer'
////////////////////////////////////////////////////////////////////////
import Feedback from './Customer/components/Feedback'

//AdminHome:
import HomePageAdmin from './HomePageAdmin'


//Admin Pages:
//login:
import SignInSideAdmin from './Admin/components/SignInAdmin'
import NameForm from './Tutorial/components/NameForm'
import LogoutControl from './Admin/components/Logout'
// Admin/Product:
import AddTutorial from "./Admin/components/Add_Product";
import Tutorial from "./Admin/components/Tutorial";
import TutorialsList from "./Admin/components/Product_List";
import EditProduct from "./Admin/components/CRUD_Product/EditProduct";
//Admin/category:
import CategoryList from "./Admin/components/Category_List";
//Admin/Orders:
import OrdersCust from "./Admin/components/Admin_Orders/Orders";


//CustomerHome:
import HomePageCustomer from './HomePageCustomer'
import SignInSide from './Customer/components/SignInCust'
import SignUp from './Customer/components/SignUpCust'
import Album from './Customer/components/ShopProduct'
import ShippingDetails from './Customer/components/ShippingAndDelivery'
import ProductDetails from './Customer/components/ProductDetails'
import Checkout from './Customer/components/Checkout'
import ShoppingCart from './Customer/components/ShoppingCart';

//switch
import { Switch, Route, Link } from "react-router-dom";

//Nav:
import Navigation from './components/nav'
import AdminNav from './components/AdminNav'

function formatDate(date) {
  return date.toLocaleDateString();
}
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />

  );
}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {formatDate(props.date)}
        {/* {props.date} */}
      </div>

    </div>
  );
}
const comment = {
  date: new Date(),
  text: 'i hope you enjoy learning React!',
  author: {
    name: 'Hello Kity',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};



const useStyles = makeStyles({
  root: {
    width: '100%',
  },

});


function App() {

  const [cart, setCart] = useState([]);
  //Styles:(
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [user, setUser] = useState(null);

  const addItem = item => {
    const newList = cart.concat(item);
    setCart(newList)
    // add the given item to the cart
  };




  return (


    <div className="App" style={{ width: '100%' }}>
        <Switch>
          <Route path="/Customer">
            <Customer user={user} setUser={setUser}
            /> 
             </Route>

          {/* Admin */}
          <Route path="/Admin">
            <Admin 
            user={user} setUser={setUser}/>       
          </Route>

        </Switch>

        <footer style={{ background: '#1E1D1D', marginTop: '1%', padding: '2%', color: '#FFFFFF' }}>@2021 by Yuga</footer>
    
    </div>


  );
}
export default App;
