import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom'
import Image from '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Pictures/undraw_web_shopping_dd4l (1).svg'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  rootPage: {
    background: "`url(${Image})` no-repeat center center fixed",
    backgroundSize: "cover",

  },
  formControl: {
    margin: theme.spacing(1),
    width: '75%',
    backgroundColor: "white",
    color: "black",
    minHeight: "55px",

  },
  formControlSelect: {
    margin: theme.spacing(1),
    width: '75%',

  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%'
    },
    display: 'flex',
  },
  rootButton: {
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: "pink",
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    marginTop: '5%',
    padding: '10px 30px',
  },
  margin: {
    margin: theme.spacing(1),
    width: '75%'
  },
  marginQuantity: {
    margin: theme.spacing(1),
    width: '25%'
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));


export default function AddProduct() {
  const classes = useStyles();
  const history = useHistory();
  const [refresh, setRefresh] = useState(false);
  const [product, setProduct] = useState({
    id: 0,
    title: '',
    description: '',
    price: '',
    image: '',
    category: '',
    color: '',
    collection: '',
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
  });

  const [stock, setStock] = useState([
    { product_id: 0, size: "S", quantity: 0 },
    { product_id: 0, size: "M", quantity: 0 },
    { product_id: 0, size: "L", quantity: 0 },
    { product_id: 0, size: "XL", quantity: 0 },
    { product_id: 0, size: "XXL", quantity: 0 }
  ]);

  var stocks = stock;


  const [Categories, setCategories] = useState([]);

  const [submitted, setSubmitted] = useState(false);

  //return all categories 
  const loadCategories = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/categories/");
    setCategories(result.data.reverse())

  };

  useEffect(() => {
    loadCategories();
    // console.log(product.id)
  }, [])

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleInputSizeChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });

    if (stocks.length != 0) {
      stocks.map(stock => {
        if (stock.size == name) {
          stock.quantity = value;
        }
      });
    }
  };




  const loadIdLastProduct = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/countProducts/");
    console.log('result', result.data)
    // return result.data;
    stocks.map((stock) => {
      var data = {
        'product_id': parseInt(result.data),
        'size': stock.size,
        'quantity': parseInt(stock.quantity),
      };
      console.log('data', data);

      axios.post('http://127.0.0.1:8000/api/stocks', data)
        .then(
          response => {
            // loadUsers()
            // setRefresh(!refresh)
          })
        .catch(error => {
          console.error('There was an error!', error);
        });

    });
  };

  //add product api
  const addUser = user => {
    const article = user;
    axios.post('http://127.0.0.1:8000/api/products', article)
      .then(
        response => {
          loadIdLastProduct();
        })
      .catch(error => {
        console.error('There was an error!', error);
      });

  };



  //when submit call post for add product api and return to homepage
  const Submit = () => {
    addUser(product);
    history.push("/Admin/HomePage")
  }


  return (
    <div className="container" style={{ minHeight: "900px", marginTop: "40px" }}>
      <div className="container submit-form  mx-auto shadow p-5" style={{ backgroundColor: '#E5DBE1', width: "80%", borderRadius: "25px", marginTop: "30px", backgroundImage: `url(${Image})` }}>
        <h2 className="text-center mb-4" >Add A Product</h2>
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div className="container">

            <form noValidate onSubmit={e => e.preventDefault}>
              <div >
                <TextField
                  required
                  type="text"
                  id="outlined-required"
                  label="Title"
                  variant="outlined"
                  className={classes.formControl}
                  value={product.title}
                  onChange={handleInputChange}
                  name="title"
                  multiline
                />

                <TextField
                  multiline
                  required
                  type="text"
                  id="description"
                  label="Description"
                  variant="outlined"
                  className={classes.formControl}
                  value={product.description}
                  onChange={handleInputChange}
                  name="description"
                />


                <FormControl className={classes.margin} variant="outlined" required>
                  <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={product.price}
                    type="number"
                    style={{ backgroundColor: "white" }}
                    onChange={handleInputChange}
                    startAdornment={<InputAdornment position="start">LBP</InputAdornment>}
                    labelWidth={60}
                    name="price"
                  />
                </FormControl>


                <TextField
                  required
                  id="outlined-required"
                  label="Color"
                  defaultValue="color"
                  variant="outlined"
                  value={product.color}
                  onChange={handleInputChange}
                  className={classes.formControl}
                  name="color"
                  type="text"
                />

                <TextField
                  multiline
                  label="Image Link"
                  defaultValue="please fill the link of the image "
                  variant="outlined"
                  required
                  id="outlined-required"
                  value={product.image}
                  onChange={handleInputChange}
                  className={classes.formControl}
                  name="image"
                  type="link"
                  fullHeight
                />
                <hr />


                <FormControl className={classes.formControlSelect}>
                  <Typography >Select Collection</Typography>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    inputProps={{
                      name: 'collection',
                      id: 'age-native-simple',
                    }}
                    name="collection"
                    value={product.collection}
                    onChange={handleInputChange}
                    style={{ backgroundColor: "white", color: 'black' }}
                  >
                    <MenuItem value={"Light"}>Light</MenuItem>
                    <MenuItem value={"Dark"}>Dark</MenuItem>
                  </Select>
                </FormControl>

                <FormControl className={classes.formControlSelect}>
                  <Typography  >Select Category</Typography>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    inputProps={{
                      name: 'category',
                      id: 'age-native-simple',
                    }}
                    name="category"
                    value={product.category}

                    onChange={handleInputChange}

                    style={{ backgroundColor: "white", color: 'black' }}
                  >
                    {Categories.map((cat) => (
                      <MenuItem value={cat.name} id={cat.id}>{cat.name}</MenuItem>))}
                  </Select>
                </FormControl>

                <hr />

                <div className="form-group">
                  <h4>Select Quantity of each size</h4>
                  <FormControl className={classes.marginQuantity} variant="outlined" required>
                    <InputLabel htmlFor="outlined-adornment-amount">Small</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={product.S}
                      type="number"
                      name="S"
                      style={{ backgroundColor: "white" }}
                      onChange={handleInputSizeChange}
                      startAdornment={<InputAdornment position="start">S</InputAdornment>}
                      labelWidth={60}
                    />

                  </FormControl>
                  <FormControl className={classes.marginQuantity} variant="outlined" required>
                    <InputLabel htmlFor="outlined-adornment-amount">Medium</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={product.M}
                      style={{ backgroundColor: "white" }}
                      onChange={handleInputSizeChange}
                      type="number"
                      name="M"
                      startAdornment={<InputAdornment position="start">M</InputAdornment>}
                      labelWidth={60}
                    />
                  </FormControl>

                  <FormControl className={classes.marginQuantity} variant="outlined" required>
                    <InputLabel htmlFor="outlined-adornment-amount">Large</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={product.L}
                      onChange={handleInputSizeChange}
                      name="L"
                      style={{ backgroundColor: "white" }}
                      startAdornment={<InputAdornment position="start">L</InputAdornment>}
                      type="number"
                      labelWidth={60}
                    />
                  </FormControl>
                  <FormControl className={classes.marginQuantity} variant="outlined" required>

                    <InputLabel htmlFor="outlined-adornment-amount">XLarge</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={product.XL}
                      style={{ backgroundColor: "white" }}
                      onChange={handleInputSizeChange}
                      name="XL"
                      type="number"
                      startAdornment={<InputAdornment position="start">XL</InputAdornment>}
                      labelWidth={60}
                    />

                  </FormControl>
                  <FormControl className={classes.marginQuantity} variant="outlined" required>
                    <InputLabel htmlFor="outlined-adornment-amount">XXLarge</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={product.XXL}
                      type="number"
                      name="XXL"
                      style={{ backgroundColor: "white" }}
                      onChange={handleInputSizeChange}
                      startAdornment={<InputAdornment position="start">XXL</InputAdornment>}
                      labelWidth={60}
                    />
                  </FormControl>
                </div>

                <div>
                  <button className="btn btn-block shadow"
                    onClick={Submit}
                    style={{ backgroundColor: 'rgb(240, 18, 155)', color: 'black' }}>
                    Add A New Product</button>
                </div>

              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );

};

