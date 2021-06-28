import React from 'react';
// import '../sass/ShoppingCart.scss'
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Customer/ShoppingCart.scss'

function Item(props){
    return (
		<div
		 className="shopping-cart_item"
		//  style={{display:"flex",flexDirection:"row"}}
		 >
			<img  src={props.Product.card.image} alt={`${props.Product.card.title} book`} />
			<div>
				<h1>{props.Product.card.title}</h1>
				<p>L.B.P  {props.Product.card.price}</p>
				<p> Size: {props.size}</p>
				{/* <p> Quantity: {props.quantity}</p> */}
				<button>Remove from cart</button>
			</div>
		</div>
	);
}
export default Item;