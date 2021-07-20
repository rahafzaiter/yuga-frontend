import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'
import back from "/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/AdminAddProduct.png"
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

//source:https://github.com/toofaniCoder/React-Users/tree/master/src/components/users

const TutorialsList = (props) => {
  const history=useHistory();
  const [newProduct,setnewProduct]=useState([]);
  const [refresh,setRefresh]=useState(false);

  //return all products
  const loadProducts = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/products/");
    setnewProduct(result.data.reverse())
    setRefresh(!refresh);   
  };

  //to delete selected product
  const deleteUser = async id => {
    await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
    loadProducts();  
  };

  useEffect(()=>{
    loadProducts();
  },[])

  //format price to be with coma ex: 200,000
  const NumberFormatPrice=(y)=>{
    var price=new Intl.NumberFormat();
    return price.format(y);
  }

  return (
    <React.Fragment>
    <div className="container" style={{minHeight:"900px",marginTop:"40px"}}>
      <div className=" py-2 shadow">
          <h3>All Products</h3>
          </div>
          { 
          newProduct.length==0 ?  
          <div style={{ backgroundImage: `url(${back})`,height:'700px',width:"100%" }}>
            <img  src={back} style={{height:'700px',width:"100%"}} />
            </div>
            :
        <div className="py-2">
           <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead style={{backgroundColor:'#5e5e5e'}}>
            <TableRow>
              <TableCell style={{ color: 'white',fontSize:"18px" }} scope="col">ID</TableCell>
              <TableCell style={{ color: 'white',fontSize:"18px" }} scope="col"> Product Name</TableCell>
              <TableCell style={{ color: 'white',fontSize:"18px" }} scope="col">Color</TableCell>
              <TableCell style={{ color: 'white',fontSize:"18px" }} scope="col">Price (LBP)</TableCell>
              <TableCell style={{ color: 'white',fontSize:"18px" }} scope="col">In Stock?</TableCell>
              <TableCell style={{ color: 'white',fontSize:"18px" }} align="center" scope="col">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody style={{backgroundColor:'#f1f1f1'}}>
            {newProduct.map((product, id) => (
              <TableRow key={id}  align="center" style={{fontSize:"16px"}}>
                <TableCell scope="row">{product.id}</TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.color}</TableCell>
                <TableCell>{NumberFormatPrice(product.price)}</TableCell>
                <TableCell>{(product.S==0 && product.M==0 && product.L==0 && product.XL==0 && product.XXL==0) ?"Out of Stock":"In Stock"}</TableCell>
                <TableCell  ml={8} align="center"> 
                  <Link class="btn btn-outline-inherit ml-3"   
                  style={{backgroundColor: '#FC3C80', color: '#FFFFFF'}}                
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
                    class="btn btn-outline-primary ml-3"                   
                    to={`./Product/EditUser/${product.id}`}
                    onClick={(e)=>{
                      e.preventDefault()
                      localStorage.setItem('product',JSON.stringify({product}))
                      localStorage.setItem('productId',JSON.stringify(product.id));
                      history.push(`Product/EditUser/${product.id}`)
                    }}         
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-outline-danger ml-3"
                    onClick={() => deleteUser(product.id)}
                  >
                    Delete
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
        </TableContainer>
       </div>
    }
    </div>
    </React.Fragment>
  );
};


export default TutorialsList;
