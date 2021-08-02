import React, { useState, useEffect } from "react";
//import TutorialDataService from "../services/TutorialService";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ImageUpload from 'image-upload-react'
import { useHistory } from 'react-router-dom'
//important for getting nice style.
import 'image-upload-react/dist/index.css'
import ImageUploader from 'react-images-upload';
import { SketchPicker } from 'react-color';
import { HistoryOutlined } from "@material-ui/icons";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '90%',
    backgroundColor: "white",
    height: "10%",
    color: "black"
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%'
    },
    display: 'flex',
    // flexWrap: 'wrap',
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
    width: '90%'
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  formControlSelect: {
    margin: theme.spacing(1),
    width: '75%',

  },

}));


export default function EditProduct() {
  const classes = useStyles();
  const history = useHistory();
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    category: " ",
    collection: "",
    price: " ",
    color: " ",
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0
  };

  const [ProductLocal, setProductLocal] = useState(JSON.parse(localStorage.getItem("product")))
  const [productId] = useState(JSON.parse(localStorage.getItem("productId")))
  const [productB, setproductB] = useState(null);
  const [product, setProduct] = useState(ProductLocal.product);
  const [stock, setStock] = useState({});
  const [allStock, setAllStock] = useState([]);

  //image stuff to be implemented in future
  const [imageSrc, setImageSrc] = useState();

  //not needed now 
  const [pictures, setPictures] = useState(null);
  const [changed, setChange] = useState(false);
  const [Categories, setCategories] = useState([]);
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  //return all categories 
  const loadUsers = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/categories/");
    setCategories(result.data.reverse())
  };

  //return stock  by product id
  const loadStockById = async (id) => {
    await axios.get(`http://127.0.0.1:8000/api/stocks/${id}`).then((result) => {
      console.log('results of stock in loadStockById method', result.data)
      var arr2 = result.data;
      setAllStock(arr2);
      console.log('allStock in loudStockById', allStock);
      goThroughArrt(arr2, id, product);
    })
  };


  //return this product by id
  const loadProductById = async (id) => {
    const result = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
    setproductB(result.data[0])
    setProduct(result.data[0])
    console.log("product by id ", result.data[0]);

  };


  //when type new input 
  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
    setChange(true);
  };


  const changeStockSize = (stocks, pSize, pQuantity) => {
    console.log('allStock, size, and quantity', allStock, pSize, pQuantity);
    var stockss = allStock;
    stockss.map((stocket) => {
      if (stocket.size == pSize) {
        stocket.quantity = parseInt(pQuantity);
      }
    });
    console.log('stockss', stockss);
    setAllStock(stockss);
  };

  //when type new size 
  const handleSizeChange = event => {
    const { name, value } = event.target;
    changeStockSize(allStock, name, value);
    setProduct({ ...product, [name]: parseInt(value) });
    console.log('all stock',allStock);
    setChange(true);
  }

  //when type new price 
  const handlePriceChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: parseInt(value) });
    setChange(true);
  }


  //stuffs for picture to be implemented for future 
  // const handleImageSelect = (e) => {
  //   setImageSrc(URL.createObjectURL(e.target.files[0]))
  // }



  const goThroughArrt = (list, productId, productsAll) => {

    console.log('in the method', list);
    const singleStock = { product_id: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0, inStock: false };
    singleStock.product_id = productId;
    list.map((stock) => {
      if (stock.size == "S") {
        singleStock.S = stock.quantity
      } else
        if (stock.size == "M") {
          singleStock.M = stock.quantity
        } else
          if (stock.size == "L") {
            singleStock.L = stock.quantity
          } else
            if (stock.size == "XL") {
              singleStock.XL = stock.quantity
            } else
              if (stock.size == "XXL") {
                singleStock.XXL = stock.quantity
              }
      if (stock.quantity != 0) {
        singleStock.inStock = true;
      }
    }
    );

    setStock(singleStock);
    const products = product;
    console.log('products before fill the products', products)
    products.S = singleStock.S;
    products.M = singleStock.M;
    products.L = singleStock.L;
    products.XL = singleStock.XL;
    products.XXL = singleStock.XXL;
    console.log('products after fill', products);
    setProduct(products);
  }


  //to load the product when refresh page
  useEffect(() => {
    loadProductById(productId);
    loadUsers();
    loadStockById(productId);
    console.log('product to be edited', productB);

  }, [])


  useEffect(() => {

  }, [stock])



  //update product to backend 
  const updateProducts = async (id, updatedproduct) => {
    console.log('in updatedproduct id ', id)
    console.log('in updatedproduct method', updatedproduct)
    await axios.put(`http://127.0.0.1:8000/api/products/${id}`, updatedproduct)
      .then(response => {
        console.log(response.data)
        console.error('all cat', response.data)
      }).catch(error => {
        console.error(error.response.data);
      });
  };


  //update stocka to backend 
  const updateStocks =  () => {
    allStock.map((stockes)=>{
    console.log('in updatedstock id ', stockes.id)
    console.log('in updatedstock method', stockes.updatedstock)
     axios.put(`http://127.0.0.1:8000/api/stocks/${stockes.id}`, stockes)
      .then(response => {
        console.log(response.data)
        console.error('all cat', response.data)
      }).catch(error => {
        console.error(error.response.data);
      });

    });
  };

  const sendStockToAPI=()=>{
    allStocks.map((stockes)=>{
      updateStocks(stockes.id,stockes);

    })
  }




  //submit when fill all data 
  const submit = (event) => {
    event.preventDefault();
    updateProducts(product.id, product);
    updateStocks();
    // history.push("/Admin/HomePage")
  }

  //stuffs for picture to be implemented for future 
  const onDrop = (pictureFiles, pictureDataURLs) => {
    setPictures(pictureFiles);
    console.log("picture added");
    console.log(pictureFiles);
    console.log(pictures)
  };


  return (
    <div className="container" >

      <div className="container submit-form  mx-auto shadow p-5" style={{ backgroundColor: '#E5DBE1', width: "80%", borderRadius: "25px", marginTop: "30px" }}>
        <h2 className="text-center mb-4">Edit A Product</h2>
        <div className="container">
          <form noValidate className={classes.form}>
            {/* style={{ marginLeft:'20%',marginRight:'20%'}} */}
            <TextField
              required
              type="text"
              id="outlined-required"
              label="Title"
              defaultValue="title"
              variant="outlined"
              className={classes.formControl}
              value={product.title}
              onChange={handleInputChange}
              name="title"
            />

            <TextField

              multiline
              variant="outlined"

              className={classes.formControl}
              id="description"
              name="description"
              value={product.description}
              label="Description"
              fullWidth
              autoComplete="given-name"
              onChange={handleInputChange}
            />

            <FormControl className={classes.formControl} variant="outlined" required>
              <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={product.price}
                type="number"
                name="price"
                style={{ backgroundColor: "white" }}
                onChange={handlePriceChange}
                startAdornment={<InputAdornment position="start">LBP</InputAdornment>}
                labelWidth={60}
              />
            </FormControl>

            <TextField
              required
              id="outlined-required"
              label="Color"
              variant="outlined"
              value={product.color}
              onChange={handleInputChange}
              className={classes.formControl}
              name="color"
              type="text"
            />
            <TextField
              required
              multiline
              id="outlined-required"
              label="Image Link"
              variant="outlined"
              value={product.image}
              name="image"
              onChange={handleInputChange}
              className={classes.formControl}

              type="link"
            />
            <hr />


            <FormControl className={classes.formControlSelect}>

              <Typography >Select Collection</Typography>
              <Select
                style={{ backgroundColor: "white", color: 'black' }}
                label="Select Collection"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                inputProps={{
                  name: 'collection',
                  id: 'age-native-simple',
                }}
                name="collection"
                value={product.collection}
                onChange={handleInputChange}
              >
                <option align="center" value="light" >light</option>
                <option align="center" value="dark">dark</option>
              </Select>
            </FormControl>




            <FormControl className={classes.formControlSelect} >
              <Typography  >Select Category</Typography>
              <Select
                value={product.name}
                required
                style={{ backgroundColor: "white", color: 'black' }}
                inputProps={{
                  name: 'name',
                  id: 'age-native-simple',
                }}
                onChange={handleInputChange}
              >
                {Categories.map((cat) => (
                  <option align="center" value={cat.name}>{cat.name}</option>))}
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
                  onChange={handleSizeChange}
                  startAdornment={<InputAdornment position="start">S</InputAdornment>}
                  labelWidth={60}

                />

              </FormControl>
              <FormControl className={classes.marginQuantity} variant="outlined" required>

                <InputLabel htmlFor="outlined-adornment-amount">Medium</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={product.M}
                  name="M"
                  style={{ backgroundColor: "white" }}
                  onChange={handleSizeChange}
                  type="number"
                  startAdornment={<InputAdornment position="start">M</InputAdornment>}
                  labelWidth={60}

                />

              </FormControl>
              <FormControl className={classes.marginQuantity} variant="outlined" required>

                <InputLabel htmlFor="outlined-adornment-amount">Large</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={product.L}
                  name="L"
                  onChange={handleSizeChange}

                  style={{ backgroundColor: "white" }}
                  startAdornment={<InputAdornment position="start">L</InputAdornment>}
                  type="number"
                  labelWidth={60}

                />
              </FormControl>
              <FormControl className={classes.marginQuantity} variant="outlined" required>

                <InputLabel htmlFor="outlined-adornment-amount">X Large</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={product.XL}
                  style={{ backgroundColor: "white" }}
                  onChange={handleSizeChange}
                  type="number"
                  startAdornment={<InputAdornment position="start">XL</InputAdornment>}
                  labelWidth={60}
                  name="XL"
                />

              </FormControl>
              <FormControl className={classes.marginQuantity} variant="outlined" required>

                <InputLabel htmlFor="outlined-adornment-amount">XX Large</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={product.XXL}
                  type="number"
                  style={{ backgroundColor: "white" }}
                  onChange={handleSizeChange}
                  startAdornment={<InputAdornment position="start">XXL</InputAdornment>}
                  labelWidth={60}
                  name="XXL"
                />
              </FormControl>



              <div>
                <button className="btn btn-block shadow"
                  style={{ backgroundColor: 'rgb(240, 18, 155)', color: 'black' }}
                  onClick={submit}
                
                >
                  Update
                </button>
              </div>

            </div>
          </form>
        </div>
        {/* )} */}
      </div>
    </div>
  );

};

