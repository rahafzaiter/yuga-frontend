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

  function createData(id, title, color, price) {
    return { id, title, color, price};
  }
  
  const products = [
    createData(1, 'floral dress', 'white', '25'),
    createData(2, 'velvet skirt', ' black', '9'),
    createData(3, 'floral chemis', 'light purple', '12'),
    createData(4, 'boyfriend pant', 'jeans', '12'),
    createData(5, ' v t-shirt', 'green', '8'),
  ];

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
    <div className="container">

      <div className=" py-2 shadow">
          <h3>All Products</h3>
          </div>
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
                  
                  <Link class="btn btn-primary mr-2" to={`/Product/${product.id}`}
                  
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
    </div>
    </React.Fragment>
  );
};


export default TutorialsList;
