// import React from 'react';
// // import '../sass/ShoppingCart.scss'
// //import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Customer/ShoppingCart.scss'
// // import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';

// const useStyles = makeStyles({
// 	table: {
// 	  minWidth: 750,
// 	},
//   });

// function Item(props){
//     return (

// 		<TableContainer component={Paper}>
// 		<Table className={classes.table} aria-label="simple table">
// 		  <TableHead>
// 			<TableRow>
// 			  <TableCell></TableCell>
// 			  <TableCell align="right">Product</TableCell>
// 			  <TableCell align="right">Size</TableCell>
// 			  <TableCell align="right">Price</TableCell>
// 			  <TableCell align="right"></TableCell>
// 			</TableRow>
// 		  </TableHead>
// 		  <TableBody>
// 			{/* {rows.map((row) => ( */}
// 			  <TableRow key={row.name}>
// 				<TableCell component="th" scope="row">
// 				<img width="100px" height="100px" src={props.Product.card.image} alt={`${props.Product.card.title} book`} />
// 				</TableCell>
// 				<TableCell align="right">{props.Product.card.title}</TableCell>
// 				<TableCell align="right">{props.size}</TableCell>
// 				<TableCell align="right">{props.Product.card.price}</TableCell>
// 				<TableCell align="right"><button>Remove from cart</button></TableCell>
// 			  </TableRow>
// 			{/* ))} */}
// 		  </TableBody>
// 		</Table>
// 	  </TableContainer>
// 		// <div
// 		//  className="shopping-cart_item"
// 		// //  style={{display:"flex",flexDirection:"row"}}
// 		//  >
// 		// 	<img  src={props.Product.card.image} alt={`${props.Product.card.title} book`} />
// 		// 	<div>
// 		// 		<h1>{props.Product.card.title}</h1>
// 		// 		<p>L.B.P  {props.Product.card.price}</p>
// 		// 		<p> Size: {props.size}</p>
// 		// 		{/* <p> Quantity: {props.quantity}</p> */}
// 		// 		<button>Remove from cart</button>
// 		// 	</div>
// 		// </div>
// 	);
// }
// export default Item;