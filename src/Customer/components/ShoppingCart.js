import React from 'react';
import Item from './ShoppingCartItem';
import Link from '@material-ui/core/Link';


function ShoppingCart(props){

    const getCartTotal = () => {
		return props.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};
return (
    <div className="shopping-cart">
        {props.cart.map(item => (
            <Item key={item.id} {...item} />
        ))}

        <div className="shopping-cart__checkout">
            <p>Total: L.L.P{getCartTotal()}</p>
            <Link href="/Customer/checkout" variant="body2">
            <button>Checkout</button>
              </Link>
           
        </div>
    </div>
);
};

export default ShoppingCart;