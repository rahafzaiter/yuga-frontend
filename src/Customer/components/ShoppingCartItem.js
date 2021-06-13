import React from 'react';
// import '../sass/ShoppingCart.scss'
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Customer/ShoppingCart.scss'

function Item(props){
    return (
		<div className="shopping-cart_item">
			<img  src={props.image} alt={`${props.title} book`} />
			<div>
				<h1>{props.title}</h1>
				<p>L.B.P  {props.price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
	);
}
export default Item;