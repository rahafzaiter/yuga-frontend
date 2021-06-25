import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'
import back from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/AdminAddProduct.png"

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));


//source:https://github.com/toofaniCoder/React-Users/tree/master/src/components/users

const TutorialsList = () => {
  const [users, setUser] = useState([]);
  const classes = useStyles();
  const history=useHistory();

  function createData(id, title, color, price,description,) {
    return { id, title, color, price,description,color,collection};
  }

  const [products,setProducts]=useState( JSON.parse(localStorage.getItem("Products")))

  const [productss,setProductss]=useState([

      {id:1,title:"jeans Skirt",
      description:"This flared pintucked denim skirt is a staff favoriteâ€¦ So we produced it in another quality denim fabric! The elegant lines and stitching make for a slenderizing silhouette, and the denim wash can easily be matched with anything. Stylish and flattering, pair it with any of our tunics, tops, or blouses. Note: This design is an Inventory Item, ready for immediate despatch.",
      color:"white",collection:"colored",categoryId:6,category:"Skirt",price:220,image:'https://i.pinimg.com/564x/97/62/0f/97620f26c8f6ea7d2f00f9476e9876ed.jpg',inStock:true,
      S:4,M:1,L:2,XL:3,XXL:1},

      {id:2,title:"Ruffle Dress ",
      description:"Browse our full collection of dresses perfect for any occasion. Whether it's a party or a weekend getaway, you will surely fall in love with our collection",
      color:"rose",collection:"colored",categoryId:4,category:"Dress",price:300,image:'https://i.pinimg.com/564x/6e/43/74/6e4374af339d40180e366d295e2bc769.jpg',inStock:true,
      S:4,M:1,L:2,XL:3,XXL:1},

      {id:3,title:"Blazer",
      description:"2019 Spring Autumn Blazers Women Small suit Plus size Long sleeve jacket Casual tops female Slim Wild Blazers Windbreaker coat - yellow X719 - 4O4116300433-6",
      color:"Yelllow",collection:"colored",categoryId:7,category:"Jacket",price:280,image:"https://i.pinimg.com/564x/ea/32/6c/ea326c718e52c6c76afde0993985ec4a.jpg",inStock:true,
      S:4,M:1,L:2,XL:3,XXL:1},
      
      {id:4,title:"velvet Skirt",
      description:"In sensual silk and viscose velvet, this longer length skirt has a great easy fit with a deep elasticated waistband and silk-trimmed, angled side-pockets. 82% viscose 18% silk, Trim 100% silk/100%",color:"blue ",collection:"colored",categoryId:6,category:"Skirt",price:160,
      image:'https://i.pinimg.com/564x/06/6c/f1/066cf1275a96f883d20ee96bd548ce60.jpg',inStock:true,
      S:4,M:1,L:2,XL:3,XXL:1},

      {id:5,title:"boyfriend pant",
      description:" Relaxed fit trousers with adjustable waistband and Tsuki logo embroidery.  Felix wears a size 30. Looking for Marzia's fit? That's our Black Moon trousers in Slim Fit.",
      color:"black",collection:"black",categoryId:1,category:"Pant",price:200,image:'https://i.pinimg.com/564x/88/dc/5a/88dc5a987913a12049e5d50c3e0d3a1c.jpg',inStock:false,
      S:4,M:1,L:2,XL:3,XXL:1},

      {id:6,title:"Jumpsuit",
      description:"The ultimate statement alternative to a maxi dress, the One Shoulder Cape Sleeve Jumpsuit is all you need to master the glam dress code this season. Make sure you’re the best-dressed guest for a stylish wedding, races or VIP party in our dramatic Cape Sleeve Jumpsuit worked in a classic black and cinched at the waist to flatter your curves. Where to WearThis jumpsuit is perfect for nights out, graduation, or special occasions. Style With Elongate your legs by wearing this wide-leg jumpsuit with a killer heel and a chic low pony for maximum impact. Underwear SolutionsNude Lace Be Honest Bra.Product DetailsStretch Jersey (95% Polyester 5% Elastane)Stretch Factor: Stretchy Model is 5’8 ",
      color:"black",categoryId:8,category:"Jumpsuit",price:300,image:'https://i.pinimg.com/564x/2b/ec/89/2bec89c1e051e2fcd4b9c740c1b28a0f.jpg',inStock:true,
      S:4,M:1,L:2,XL:3,XXL:1},
  ]);

  
  // const products = [
  //   createData(1, 'floral dress', 'white', '25'),
  //   createData(2, 'velvet skirt', ' black', '9'),
  //   createData(3, 'floral chemis', 'light purple', '12'),
  //   createData(4, 'boyfriend pant', 'jeans', '12'),
  //   createData(5, ' v t-shirt', 'green', '8'),
  // ];

  const [prod,setProd]=useState(products);

 

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get("http://localhost:3003/users");
//     setUser(result.data.reverse());
//   };

//   const deleteUser = async id => {
//     await axios.delete(`http://localhost:3003/users/${id}`);
//     loadUsers();
//   };
const deleteUser={

};

  return (
    <React.Fragment>
    <div className="container" style={{minHeight:"900px",marginTop:"40px"}}>

      <div className=" py-2 shadow">
          <h3>All Products</h3>
          </div>
      

          { 
          products.length==0 ?  

          <div style={{ backgroundImage: `url(${back})`,height:'700px',width:"100%" }}>
            <img  src={back} style={{height:'700px',width:"100%"}} />
            </div>

            :
        <div className="py-2">
        <Table class="table border shadow" size="small">
          <TableHead style={{backgroundColor:'#CF8E9F'}}>
            <TableRow>
              <TableCell scope="col">#</TableCell>
              <TableCell scope="col"> Product Name</TableCell>
              <TableCell scope="col">color</TableCell>
              <TableCell scope="col">price(L.B.P)</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody style={{backgroundColor:'#e2dcdc'}}>

           

            {products.map((product, id) => (
              <TableRow key={id}>
                <TableCell scope="row">{product.id}</TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.color}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell align="center" >
                  
                  <Link class="btn btn-outline-primary mr-2"                   
                    to={`./Admin/ViewProduct`}
                    onClick={(e)=>{
                      e.preventDefault()
                      localStorage.setItem('product',JSON.stringify({product}))
                      history.push(`/Admin/ViewProduct`)
                    }}                 
                  >
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"                   
                    to={`./Product/EditUser/${product.id}`}
                    onClick={(e)=>{
                      e.preventDefault()
                      localStorage.setItem('product',JSON.stringify({product}))
                      history.push(`Product/EditUser/${product.id}`)


                    }}
                    
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(product.id)}
                  >
                    Delete
                  </Link>
                </TableCell>
              </TableRow>

            ))}

          </TableBody>

        </Table>
       </div>
    }
    </div>

    </React.Fragment>
  );
};


export default TutorialsList;
