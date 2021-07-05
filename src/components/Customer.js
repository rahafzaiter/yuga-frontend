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
import AddressForm from '../Customer/components/AddressForm'

//Scratch:
import HookCounterTwo from '../Customer/components/HookCounterTwo'
import HookCounterThree from '../Customer/components/HookCounterThree'
import HookCounterFour from '../Customer/components/HookCounterFour'
import HookCounterOne from '../Customer/components/HookCounterOne'
import Orders from  '../Customer/components/Orders'
import FadeMenu from '../Customer/components/FadeMenu'

//Animation
import SwipeableTextMobileStepper from '../Customer/components/Animation'

//switch
import { BrowserRouter as Router, Switch, Route, Link, useParams, useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },

});

export const UserContext=React.createContext();

export default function Customer() {
    const [products,setProducts]=useState([
    {id:1,title:"SE Factory T-shirt",description:"You've now found the staple t-shirt of your wardrobe. It's made of a thicker, heavier cotton, but it's still soft and comfy. And the double stitching on the neckline and sleeves add more durability to what is sure to be a favorite!",color:"black",collection:"dark",categoryId:2,category:"Shirts",price:110000,image:'https://i.etsystatic.com/22448275/r/il/e2e607/2759566682/il_1140xN.2759566682_mz2e.jpg',inStock:true},     
    {id:2,title:"Denim Skirt",description:"This flared pintucked denim skirt is a staff favoriteâ€¦ So we produced it in another quality denim fabric! The elegant lines and stitching make for a slenderizing silhouette, and the denim wash can easily be matched with anything. Stylish and flattering, pair it with any of our tunics, tops, or blouses. Note: This design is an Inventory Item, ready for immediate despatch.",color:"white",collection:"light",categoryId:5,category:"Skirts",price:220000,image:'https://i.pinimg.com/564x/97/62/0f/97620f26c8f6ea7d2f00f9476e9876ed.jpg',inStock:true},
    {id:3,title:"Ruffle Dress ",description:"Browse our full collection of dresses perfect for any occasion. Whether it's a party or a weekend getaway, you will surely fall in love with our collection",color:"rose",collection:"light",categoryId:3,category:"Dresses",price:300000,image:'https://i.pinimg.com/564x/6e/43/74/6e4374af339d40180e366d295e2bc769.jpg',inStock:true},
    {id:4,title:"MSGM Single Breasted Blazer",description:"2019 Spring Autumn Blazers Women Small suit Plus size Long sleeve jacket Casual tops female Slim Wild Blazers Windbreaker coat - yellow X719 - 4O4116300433-6",color:"Yelllow",collection:"light",categoryId:11,category:"Jackets",price:280000,image:"https://i.pinimg.com/564x/93/a6/aa/93a6aa7b5daff2939f2882838616da79.jpg",inStock:true},
    {id:5,title:"Velvet Skirt",description:"In sensual silk and viscose velvet, this longer length skirt has a great easy fit with a deep elasticated waistband and silk-trimmed, angled side-pockets. 82% viscose 18% silk, Trim 100% silk/100%",color:"blue ",collection:"light",categoryId:5,category:"Skirts",price:160000,image:'https://i.pinimg.com/564x/06/6c/f1/066cf1275a96f883d20ee96bd548ce60.jpg',inStock:true},
    {id:6,title:"Boyfriend Pant",description:" Relaxed fit trousers with adjustable waistband and Tsuki logo embroidery.  Felix wears a size 30. Looking for Marzia's fit? That's our Black Moon trousers in Slim Fit.",color:"black",collection:"dark",categoryId:1,category:"Pants",price:200000,image:'https://i.pinimg.com/564x/88/dc/5a/88dc5a987913a12049e5d50c3e0d3a1c.jpg',inStock:false},
    {id:7,title:"Jumpsuit",description:"The ultimate statement alternative to a maxi dress, the One Shoulder Cape Sleeve Jumpsuit is all you need to master the glam dress code this season. Make sure you’re the best-dressed guest for a stylish wedding, races or VIP party in our dramatic Cape Sleeve Jumpsuit worked in a classic black and cinched at the waist to flatter your curves. Where to WearThis jumpsuit is perfect for nights out, graduation, or special occasions. Style With Elongate your legs by wearing this wide-leg jumpsuit with a killer heel and a chic low pony for maximum impact. Underwear SolutionsNude Lace Be Honest Bra.Product DetailsStretch Jersey (95% Polyester 5% Elastane)Stretch Factor: Stretchy Model is 5’8 ",color:"black",collection:"dark",categoryId:6,category:"Jumpsuits",price:300000,image:'https://i.pinimg.com/564x/2b/ec/89/2bec89c1e051e2fcd4b9c740c1b28a0f.jpg',inStock:true},
    {id:8,title:"Unisex Programmer Shirt",description:"Funny Programmer Shirt, Unisex Heavy Cotton Tee, Programmers Problem T-Shirt, Programmer Gift Idea, Programming Shirt, Computer Shirt",color:"black",collection:"dark",categoryId:2,category:"Shirts",price:110000,image:'https://i.etsystatic.com/23281173/r/il/3fe1f7/2750774460/il_794xN.2750774460_9oyc.jpg',inStock:true},
    {id:9,title:"Debugging Definition T-Shirt",description:"Debugging Definition: Being a detective in a crime movie where you are also the murderer.This eco-friendly shirt is a great gift idea for every developer, programmer, software engineer, and coding maniac out there. This t-shirt is everything you've dreamed of and more. It feels soft and lightweight, with the right amount of stretch. Its comfortable and flattering for both men and women. Its sure to be your next favorite shirt!",color:"black",collection:"dark",categoryId:2,category:"Shirts",price:110000,image:'https://i.etsystatic.com/26054897/r/il/5fbe5c/2706441580/il_794xN.2706441580_1l1s.jpg',inStock:true},
    {id:10,title:"Lilac - Modest Dress",description:"40% Polyester, 60% CottonThere is approximately 4 cm difference between sizes",color:"lilac",collection:"light",categoryId:3,category:"Dresses",price:110000,image:'https://www.gizce.com/image/cache/catalog/products_2021/BS7T5698-800x1200.jpg',inStock:true},
]);



    const [categories,setCategories]=useState(
        [
    { id: 1, name: "Pants" },
    { id: 2, name: "Shirts"},
    { id: 3, name: "Dresses" },
    { id: 4, name: "Suits" },
    { id: 5, name: "Skirts" },
    { id: 6, name: "Jumpsuits" },
    { id: 7, name: "Outerwear" },
    { id: 8, name: "Sweat-shirt" },
    { id: 9, name: "Sportswear" },
    { id: 10, name: "Tunics" },
    { id: 11, name: "Jackets" }]);

    const [cart, setCart] = useState([]);
    
    //Styles:(
    const classes = useStyles();
    const history=useHistory();
    const [value, setValue] = useState(0);
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")));

    const[orders,setOrders]=useState([]);

    const addItem = item => {
        const newList = cart.concat(item);
        setCart(newList)
        history.push("/Customer/CustCart")
    };

    const addOrders = item => {
        const newList = orders.concat(item);
        localStorage.setItem('orders',JSON.stringify(newList))
        setOrders(JSON.parse(window.localStorage.getItem("orders")))
    };


    
    


    const defaultProps = {
        m: 1,
        borderColor: 'grey',
    };

    useEffect(()=>{
        // setUser(JSON.parse(window.localStorage.getItem("user")));
        if(localStorage.getItem("user")!=null){
        setUser(JSON.parse(window.localStorage.getItem("user")));
         console.log("in Customer Part useEffect",JSON.parse(window.localStorage.getItem("user")));
        }

        console.log("orders in home",orders)
    },[window.localStorage.getItem("user"),orders])

    useEffect(()=>{
        console.log("orders when change",orders)
        //localStorage.setItem('orders',JSON.stringify(orders))
    },[orders])

   

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

                    

                    <Route path={["/Customer/checkout"]} >               
                        <Checkout user={user} addOrders={addOrders} Orders={orders} cart={cart} setCart={setCart} setCart={setCart}/>
                    </Route>

                    <Route exact path={["/Customer/CustCart"]} component={ShoppingCart} >
                        <ShoppingCart cart={cart} />
                    </Route>
                    <Route  path={["/Customer/CheckOutReview"]} component={Review} >
                        <Review check={cart} />
                    </Route>
                    <Route  path={["/Customer/CustFeedback"]} >
                        <Feedback categ={categories}/>
                    </Route>
                    <Route  path={["/Customer/CustOrders"]} >
                        <Orders orders={orders} user={user}/>
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

                    {/* Animation Trial  */}

                    <Route  path={["/Customer/Slider"]} >
                        <SwipeableTextMobileStepper/>
                    </Route>
                    
                </Switch>
            </Router>
         

        </div>


    );
}
