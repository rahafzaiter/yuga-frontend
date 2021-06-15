import React,{useEffect, useState} from 'react';
import Item from './ShoppingCartItem';

import { BrowserRouter as Router, Redirect, Switch, Route, Link, useParams,useHistory } from "react-router-dom";


//https://github.com/LambdaSchool/react-shopping-cart/tree/master/src 

function ShoppingCart({cart}){
    const [allcarts,setAllCarts]=useState(cart);
    const history=useHistory();
   

    const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.Product.card.price;
		}, 0).toFixed(0)
	};
    const x=0;

    // const getCartTotal = (value) => {
	
	// 		x=x+ value;
    //         return x;
	// };

    
   
    useEffect(() => {
        console.log("cart",cart)
      },[]);

      const remove=()=>{
        localStorage.removeItem("cartItems");
        localStorage.removeItem("cartTotalPrice");
      };
    

return (
    <div className="shopping-cart">
        {allcarts.map((item ,index)=> (
            <Item key={index} {...item} />
            // {getCartTotal(item.Product.card.price)}
        ))}

        <div className="shopping-cart__checkout">
            <p>Total : L.L.P {getCartTotal()}</p>
            
            <button
            onClick={(()=>{ 
                if(allcarts){
                remove();
                localStorage.setItem('cartItems',JSON.stringify({allcarts}))
                localStorage.setItem('cartTotalPrice',JSON.stringify(getCartTotal())) 
                history.push("/Customer/checkout")
                }    
                else{
                    alert("you should add items before checkout")
                }        
            } )}
                >Checkout</button>
                        
        </div>
    </div>
);
};

export default ShoppingCart;