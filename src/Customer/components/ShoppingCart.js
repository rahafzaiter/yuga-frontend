import React,{useEffect, useState} from 'react';
import Item from './ShoppingCartItem';
import {Link} from 'react-router-dom';


//https://github.com/LambdaSchool/react-shopping-cart/tree/master/src 

function ShoppingCart({cart}){
    const [allcarts,setAllCarts]=useState(cart);
    const [cartProduct,setCartProduct]=useState(cart.Product);
    const [cartSize,setCartSize]=useState(cart.size);

    const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2)
	};

    
   
    useEffect(() => {
        console.log("cart",cart)
        console.log(cartProduct)
        console.log(cartSize)
       
      },[]);

      const remove=()=>{
        localStorage.removeItem("cartItems");
        localStorage.removeItem("cartTotalPrice");
      };
    

return (
    <div className="shopping-cart">
        {allcarts.map(item => (
            <Item key={item.id} {...item} />
        ))}

        <div className="shopping-cart__checkout">
            <p>Total : L.L.P {getCartTotal()}</p>
            <Link to={`/Customer/checkout`} variant="body2">
            <button
            onClick={(()=>{ 
                remove();
                localStorage.setItem('cartItems',JSON.stringify({allcarts}))
                localStorage.setItem('cartTotalPrice',JSON.stringify(getCartTotal())) 
            
            } )}
                >Checkout</button>
              </Link>
           
        </div>
    </div>
);
};

export default ShoppingCart;