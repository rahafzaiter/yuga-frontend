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
import Review from '../Customer/components/Review'
import Feedback from '../Customer/components/Feedback'
import Password from '../Customer/components/Password'
import Address from '../Customer/components/Address'
import Profile from '../Customer/components/Profile'

//Scratch:
import HookCounterTwo from '../Customer/components/HookCounterTwo'
import HookCounterThree from '../Customer/components/HookCounterThree'
import HookCounterFour from '../Customer/components/HookCounterFour'
import HookCounterOne from '../Customer/components/HookCounterOne'
import Orders from  '../Customer/components/Orders'
import FadeMenu from  '../Customer/components/FadeMenu'

//switch
import { BrowserRouter as Router, Switch, Route, Link, useParams, useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },

});


export default function Customer() {
    const [products,setProducts]=useState([
    {id:1,title:"jeans Skirt",decription:"This flared pintucked denim skirt is a staff favoriteâ€¦ So we produced it in another quality denim fabric! The elegant lines and stitching make for a slenderizing silhouette, and the denim wash can easily be matched with anything. Stylish and flattering, pair it with any of our tunics, tops, or blouses. Note: This design is an Inventory Item, ready for immediate despatch.",color:"white",collection:"colored",categoryId:6,price:220,image:'https://i.pinimg.com/564x/97/62/0f/97620f26c8f6ea7d2f00f9476e9876ed.jpg',inStock:true},
    {id:2,title:"Ruffle Dress ",decription:"Browse our full collection of dresses perfect for any occasion. Whether it's a party or a weekend getaway, you will surely fall in love with our collection",color:"rose",collection:"colored",categoryId:{id:4,name:"pant"},category:"pant",price:300,image:'https://i.pinimg.com/564x/6e/43/74/6e4374af339d40180e366d295e2bc769.jpg',inStock:true},
    {id:3,title:"Blazer",decription:"2019 Spring Autumn Blazers Women Small suit Plus size Long sleeve jacket Casual tops female Slim Wild Blazers Windbreaker coat - yellow X719 - 4O4116300433-6",color:"Yelllow",collection:"colored",categoryId:7,category:"Dress",price:280,image:"https://i.pinimg.com/564x/ea/32/6c/ea326c718e52c6c76afde0993985ec4a.jpg",inStock:true},
    {id:4,title:"velvet Skirt",decription:"In sensual silk and viscose velvet, this longer length skirt has a great easy fit with a deep elasticated waistband and silk-trimmed, angled side-pockets. 82% viscose 18% silk, Trim 100% silk/100%",color:"blue ",collection:"colored",categoryId:6,category:"Skirt",price:160,image:'https://i.pinimg.com/564x/06/6c/f1/066cf1275a96f883d20ee96bd548ce60.jpg',inStock:true},
    {id:5,title:"boyfriend pant",decription:" Relaxed fit trousers with adjustable waistband and Tsuki logo embroidery.  Felix wears a size 30. Looking for Marzia's fit? That's our Black Moon trousers in Slim Fit.",color:"black",collection:"black",categoryId:1,category:"Pant",price:200,image:'https://i.pinimg.com/564x/88/dc/5a/88dc5a987913a12049e5d50c3e0d3a1c.jpg',inStock:false},
    {id:6,title:"Jumpsuit",decription:"The ultimate statement alternative to a maxi dress, the One Shoulder Cape Sleeve Jumpsuit is all you need to master the glam dress code this season. Make sure you’re the best-dressed guest for a stylish wedding, races or VIP party in our dramatic Cape Sleeve Jumpsuit worked in a classic black and cinched at the waist to flatter your curves. Where to WearThis jumpsuit is perfect for nights out, graduation, or special occasions. Style With Elongate your legs by wearing this wide-leg jumpsuit with a killer heel and a chic low pony for maximum impact. Underwear SolutionsNude Lace Be Honest Bra.Product DetailsStretch Jersey (95% Polyester 5% Elastane)Stretch Factor: Stretchy Model is 5’8 ",color:"black",categoryId:3,category:"Set",price:300,image:'https://i.pinimg.com/564x/2b/ec/89/2bec89c1e051e2fcd4b9c740c1b28a0f.jpg',inStock:true},
]);

const [categories,setCategories]=useState(
    [
        {id: '1', name: 'Pant'},
        {id: '2', name: 'Chemis'},
        {id: '3', name: 'Set'},
        {id: '4', name: 'Dress'},
        {id: '5', name: 'Short'},
        {id: '6', name: 'Skirt'},
        {id: '7', name: 'Jacket'}
    ]
)
    const [cart, setCart] = useState([]);
    //Styles:(
    const classes = useStyles();
    const history=useHistory();
    const [value, setValue] = useState(0);
    const [user, setUser] = useState(localStorage.getItem("user"));

    const addItem = item => {
        const newList = cart.concat(item);
        setCart(newList)
        history.push("/Customer/CustCart")
    // }else{
    //     alert("please login")
    // }
        // add the given item to the cart
    };
    
    


    const defaultProps = {
        m: 1,
        borderColor: 'grey',
    };

   

    return (
        <div>
            <Router>
                <Navigation user={user} setUser={setUser}/>
                <Switch>

                    {/* <Route path={["/Customer/AdminLogin"]} component={SignInSideAdmin} /> */}

                    <Route exact path={["/Customer/","/Customer/CustHomePage"]} component={HomePageCustomer} user={user} setUser={setUser} />
                    <Route path="/Customer/custAuthentication">
                        <SignInSide user={user} setUser={setUser}/>
                    </Route>
                    {/* <Route path="/Admin/logout" component={LogoutControl} /> */}

                    <Route path="/Customer/SignUp" >
                        <SignUp user={user} setUser={setUser} />
                    </Route>

                    <Route path={["/Customer/CustProductGallery"]}>
                        <Album cat={categories} addItem={addItem} products={products} /></Route>

                    <Route path={["/Customer/CustShipping"]} component={ShippingDetails} />

                    <Route path="/Customer/ProductDetails/:id"  >
                        <ProductDetails additem={addItem} user={user}/>
                    </Route>

                    <Route path={["/Customer/checkout"]} component={Checkout} />

                    <Route exact path={["/Customer/CustCart"]} component={ShoppingCart} >
                        <ShoppingCart cart={cart} />
                    </Route>
                    <Route  path={["/Customer/CheckOutReview"]} component={Review} >
                        <Review check={cart} />
                    </Route>
                    <Route  path={["/Customer/CustFeedback"]} >
                        <Feedback categ={categories}/>
                    </Route>
                    <Route  path={["/Customer/Orders"]} >
                        <Orders/>
                    </Route>
                    <Route  path={["/Customer/Profile"]} >
                        <Profile/>
                    </Route>
                    <Route  path={["/Customer/Address"]} >
                        <Address/>
                    </Route>
                    <Route  path={["/Customer/Password"]} >
                        <Password/>
                    </Route>
                    {/* Scratch */}
                    <Route  path={["/Customer/HookCounterTwo"]} >
                        <HookCounterTwo/>
                    </Route>
                    <Route  path={["/Customer/HookCounterThree"]} >
                        <HookCounterThree/>
                    </Route>
                    <Route  path={["/Customer/HookCounterFour"]} >
                        <HookCounterFour/>
                    </Route>
                    <Route  path={["/Customer/HookCounterOne"]} >
                        <HookCounterOne/>
                    </Route>
                    <Route  path={["/Customer/FadeMenu"]} >
                        <FadeMenu/>
                    </Route>
                    
                </Switch>
            </Router>
        </div>


    );
}
