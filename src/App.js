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
import Tutorial from "./Admin/components/Tutorial";
import TutorialsList from "./Admin/components/Product_List";
import EditProduct from "./Admin/components/CRUD_Product/EditProduct";
//Admin/category:
import CategoryList from "./Admin/components/Category_List";
//Admin/Orders:
import OrdersCust from "./Admin/components/Admin_Orders/Orders";
// import SignInSideAdmin from './Admin/components/SignInAdmin'

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
  const [admin, setAdmin] = useState(null);

  const [Products,setProduct]=useState([ {id:1,title:"jeans Skirt",description:"This flared pintucked denim skirt is a staff favoriteâ€¦ So we produced it in another quality denim fabric! The elegant lines and stitching make for a slenderizing silhouette, and the denim wash can easily be matched with anything. Stylish and flattering, pair it with any of our tunics, tops, or blouses. Note: This design is an Inventory Item, ready for immediate despatch.",color:"white",collection:"light",categoryId:5,category:"Skirts",price:220000,image:'https://i.pinimg.com/564x/97/62/0f/97620f26c8f6ea7d2f00f9476e9876ed.jpg',inStock:true
  ,S:2,M:6,L:5,XL:4,XXL:3},
      {id:2,title:"Ruffle Dress ",description:"Browse our full collection of dresses perfect for any occasion. Whether it's a party or a weekend getaway, you will surely fall in love with our collection",color:"rose",collection:"light",categoryId:3,category:"Dresses",price:300000,image:'https://i.pinimg.com/564x/6e/43/74/6e4374af339d40180e366d295e2bc769.jpg',inStock:true,S:2,M:6,L:5,XL:4,XXL:3},
      {id:3,title:"Blazer",description:"2019 Spring Autumn Blazers Women Small suit Plus size Long sleeve jacket Casual tops female Slim Wild Blazers Windbreaker coat - yellow X719 - 4O4116300433-6",color:"Yelllow",collection:"light",categoryId:11,category:"Jackets",price:280000,image:"https://i.pinimg.com/564x/ea/32/6c/ea326c718e52c6c76afde0993985ec4a.jpg",inStock:true,S:2,M:6,L:5,XL:4,XXL:3},
      {id:4,title:"Velvet Skirt",description:"In sensual silk and viscose velvet, this longer length skirt has a great easy fit with a deep elasticated waistband and silk-trimmed, angled side-pockets. 82% viscose 18% silk, Trim 100% silk/100%",color:"blue ",collection:"light",categoryId:5,category:"Skirts",price:160000,image:'https://i.pinimg.com/564x/06/6c/f1/066cf1275a96f883d20ee96bd548ce60.jpg',inStock:true,S:2,M:6,L:5,XL:4,XXL:3},
      {id:5,title:"Boyfriend Pant",description:" Relaxed fit trousers with adjustable waistband and Tsuki logo embroidery.  Felix wears a size 30. Looking for Marzia's fit? That's our Black Moon trousers in Slim Fit.",color:"black",collection:"dark",categoryId:1,category:"Pants",price:200000,image:'https://i.pinimg.com/564x/88/dc/5a/88dc5a987913a12049e5d50c3e0d3a1c.jpg',inStock:false,S:0,M:0,L:0,XL:0,XXL:0},
      {id:6,title:"Jumpsuit",description:"The ultimate statement alternative to a maxi dress, the One Shoulder Cape Sleeve Jumpsuit is all you need to master the glam dress code this season. Make sure you’re the best-dressed guest for a stylish wedding, races or VIP party in our dramatic Cape Sleeve Jumpsuit worked in a classic black and cinched at the waist to flatter your curves. Where to WearThis jumpsuit is perfect for nights out, graduation, or special occasions. Style With Elongate your legs by wearing this wide-leg jumpsuit with a killer heel and a chic low pony for maximum impact. Underwear SolutionsNude Lace Be Honest Bra.Product DetailsStretch Jersey (95% Polyester 5% Elastane)Stretch Factor: Stretchy Model is 5’8 ",color:"black",collection:"dark",categoryId:6,category:"Jumpsuits",price:300000,image:'https://i.pinimg.com/564x/2b/ec/89/2bec89c1e051e2fcd4b9c740c1b28a0f.jpg',inStock:true,S:2,M:6,L:5,XL:4,XXL:3},
  ]);


  const [categories,setCategories]=useState([
      { id: 1, name: "Pants" },
    { id: 2, name: "Shirts"},
    { id: 3, name: "Dresses" },
    { id: 4, name: "Suits" },
    { id: 5, name: "Skirts" },
    { id: 6, name: "Jumpsuits" },
    { id: 7, name: "Outerwear" },
    { id: 8, name: "Sweat-shirt" },
    { id: 9, name: "Sportswear" },
    { id: 10, name: "Tunics" }
  ])

  const addItem = item => {
    const newList = cart.concat(item);
    setCart(newList)
    // add the given item to the cart
  };

  useEffect(()=>{
    setCategories(categories)

  },[categories])




  return (


    <div className="App" style={{ width: '100%' }}>
        <Switch>
          <Route path="/Customer/">
            <Customer user={user} setUser={setUser}  Products={Products} categories={categories}
            /> 
             </Route>

          {/* Admin */}
          <Route path="/Admin/">
            <Admin 
            admin={admin} setAdmin={setAdmin} Products={Products} categories={categories}/>       
          </Route>
          <Route path={["/AdminLogin"]} component={SignInSideAdmin} />

        </Switch>  
        <footer 
   style={{ background: '#1E1D1D', marginTop: '1%', padding: '1%', color: '#FFFFFF' }}
   className="footer"
   >@2021 by Yuga</footer>
    </div>
    

  );
}
export default App;
