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
  const [productId]=useState(JSON.parse(localStorage.getItem("productId")))
  const [productB,setproductB] = useState(null);
  const [product, setProduct] = useState(ProductLocal.product);

  //image stuff to be implemented in future
  const [imageSrc, setImageSrc] = useState();

  //not needed now 
  const [pictures, setPictures] = useState(null);
  const [changed, setChange] = useState(false);
  const [Categories,setCategories] = useState([]);
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  //return all categories 
  const loadUsers = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/categories/");
    setCategories(result.data.reverse())    
  };

  //return this product by id
  const loadProductById = async (id) => {
    const result = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
    setproductB(result.data)
    console.log(result.data);
    
  };


  //when type new input 
  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
    setChange(true);
  };

  //when type new size 
  const handleSizeChange=event=>{
    const { name, value } = event.target;
    setProduct({ ...product, [name]: Number(value) });
    setChange(true);
  }

  //when type new price 
  const handlePriceChange=event=>{
    const { name, value } = event.target;
    setProduct({ ...product, [name]: Number(value) });
    setChange(true);
  }


  //stuffs for picture to be implemented for future 
  // const handleImageSelect = (e) => {
  //   setImageSrc(URL.createObjectURL(e.target.files[0]))
  // }

  //to load the product when refresh page
  useEffect(()=>{
    loadProductById(productId);
    loadUsers();
    console.log('product to be edited',productB)

  },[])



  //update product to backend 
  const updateProducts = async (id,updateduser) => {
    console.log('in updateUser id ',id)
    console.log('in updateUser method',updateduser)
    await axios.put(`http://127.0.0.1:8000/api/products/${id}`,updateduser)
    .then(response => {
      console.log(response.data)
      console.error('all cat',response.data)
    }).catch(error => {
            console.error(error.response.data);
          });  
  };


  const saveTutorial = () => {
    var data = {
      title: tutorial.title,
      description: tutorial.description
    };
    setSubmitted(true);
    console.log(submitted);

  };



  //submit when fill all data 
  const submit = () => {
      e.preventDefault();
    updateProducts(product.id,product);
  }

  //stuffs for picture to be implemented for future 
  // const onDrop = (pictureFiles, pictureDataURLs) => {
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
          <form noValidate onSubmit={submit} className={classes.form}>
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
                style={{ backgroundColor: "white" }}
                onChange={handlePriceChange}
                // className={classes.formControl}
                startAdornment={<InputAdornment position="start">LBP</InputAdornment>}
                labelWidth={60}
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
              // style={{backgroundColor:"white"}}
              className={classes.formControl}
              name="color"
              type="text"
            />
            <TextField
              required
              multiline
              id="outlined-required"
              label="Image Link"
              defaultValue={product.image}
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
                <MenuItem value={"light"}>Light</MenuItem>
                <MenuItem value={"dark"}>Dark</MenuItem>


              </Select>
            </FormControl>




            <FormControl className={classes.formControlSelect} >
              <Typography  >Select Category</Typography>
              <Select

                // className={classes.formControl}
                value={product.category}

                required
                style={{ backgroundColor: "white", color: 'black' }}

                inputProps={{
                  name: 'category',
                  id: 'age-native-simple',


                }}
                onChange={handleInputChange}

              >
                {Categories.map((cat) => (
                  <option align="center"  value={cat.name}>{cat.name}</option>))}
              
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
                  // onClick={() => { history.push("/Admin/tutorials") }}
                  onClick={submit}
                // {() =>Edit
                //   history.push("/Admin/tutorials")} 
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

