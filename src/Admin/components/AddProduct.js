import React, { useState,useEffect } from "react";
//import TutorialDataService from "../services/TutorialService";
import { makeStyles } from '@material-ui/core/styles';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
// import Checkbox from '@material-ui/core/Checkbox';
// import Chip from '@material-ui/core/Chip';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
// import Box from '@material-ui/core/Box';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import ImageUpload from 'image-upload-react'
import {useHistory} from 'react-router-dom'
//important for getting nice style.
// import 'image-upload-react/dist/index.css'
// import ImageUploader from 'react-images-upload';
// import { SketchPicker } from 'react-color';
// import { HistoryOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '75%',
    backgroundColor: "white",
    color:"black",
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




export default function AddProduct (props) {
  const classes = useStyles();
  const history=useHistory();
  // const initialTutorialState = {
  //   id: null,
  //   title: "",
  //   description: "",
    
  //   Category: " ",
  //   collection: "",
  // };

  // const [ProductLocal,setProductLocal]=useState(
  //   JSON.parse(localStorage.getItem("product")) 
   
  // )
  const [prodLength]=useState(JSON.parse(localStorage.getItem("Products")).length);
  const [product, setProduct] = useState({
    id: parseInt(prodLength,10)+1,
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

 
  const [pictures, setPictures] = useState(null);
  const [quantity, setQuantity] = useState({
    id: parseInt(prodLength,10)+1,
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
  });

  const Categories = [
    { id: 1, name: "Pants" },
    { id: 2, name: "Shirts"},
    { id: 3, name: "Dresses" },
    { id: 4, name: "Suits" },
    { id: 5, name: "Skirts" },
    { id: 6, name: "Jumpsuits" },
    { id: 7, name: "Outerwear" },
    { id: 8, name: "Sweat-shirt" },
    { id: 9, name: "Sportswear" },
    { id: 10, name: "Tunics" }

  ];


  // const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);


useEffect (()=>{
  console.log(product.id)
})

  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   setTutorial({ ...product, [name]: value });
  // };

  // const handleImageSelect = (e) => {
  //   setImageSrc(URL.createObjectURL(e.target.files[0]))
  // }


  // const saveTutorial = () => {
  //   var data = {
  //     title: tutorial.title,
  //     description: tutorial.description
  //   };
  //   setSubmitted(true);
  //   console.log(submitted);

  //   //   TutorialDataService.create(data)
  //   //     .then(response => {
  //   //       setTutorial({
  //   //         id: response.data.id,
  //   //         title: response.data.title,
  //   //         description: response.data.description,
  //   //         published: response.data.published
  //   //       });
  //   //       setSubmitted(true);
  //   //       console.log(response.data);
  //   //     })
  //   //     .catch(e => {
  //   //       console.log(e);
  //   //     });
  // };

  // const onSubmit = e => {
  //   e.preventDefault();
  //   saveTutorial();
  // };

  // const newTutorial = () => {
  //   setTutorial(initialTutorialState);
  //   setSubmitted(false);
  // };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  // const onDrop = (pictureFiles, pictureDataURLs) => {

  //   setPictures(pictureFiles);
  //   console.log("picture added");
  //   console.log(pictureFiles);
  //   console.log(pictures)
  // };

  const handleChangeSize = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setQuantity({ ...quantity, [name]: value });
  };

  const Submit=()=>{
    // setProduct({ ...product, id: parseInt(prodLength,10)+1 });
    props.addProducts(product)
    history.push("/Admin/tutorials")

  }


  return (
    <div className="container"  style={{minHeight:"900px",marginTop:"40px"}}>

      <div className="container submit-form  mx-auto shadow p-5" style={{ backgroundColor: '#E5DBE1', width: "80%" }}>
        <h2 className="text-center mb-4">Add A Product</h2>
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newTutorial}>
              Add
          </button>
          </div>
        ) : (
          <div className="container">

            <form noValidate onSubmit={e=>e.preventDefault}>
              {/* style={{ marginLeft:'20%',marginRight:'20%'}} */}
              <div >


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
                  required
                  type="text"
                  id="description"
                  label="Description"
                  defaultValue="title"
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
                    // className={classes.formControl}
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
                  // style={{backgroundColor:"white"}}
                  className={classes.formControl}
                  name="color"
                  type="text"
                />


                <hr />


                <FormControl className={classes.formControlSelect}>
                <Typography lassName={classes.formControlSelect} >Select Collection</Typography>

                  {/* <InputLabel htmlFor="age-native-simple">Select Collection </InputLabel> */}
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
                <Typography className={classes.formControlSelect} >Select Category</Typography>

                    {/* <InputLabel htmlFor="age-native-simple" style={{fontWeight:"400",fontSize:"20px",marginButton:"20px",color:"black",backgroundColor:"white"}} className={classes.formControlSelect}>Select Category</InputLabel> */}

                
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
                    {Categories.map((cat)=>(
                    <MenuItem value={cat.name}>{cat.name}</MenuItem>))}
                    {/* <MenuItem value={"Skirt"}>Skirt</MenuItem>
                    <MenuItem value={"Dress"}>Dress</MenuItem>
                    <MenuItem value={"Pant"}>Pant</MenuItem>
                    <MenuItem value={"Set"}>Set</MenuItem>
                    <MenuItem value={"Chemis"}>Dress</MenuItem> */}

                  </Select>
                </FormControl>




                <TextField
                  required
                  id="outlined-required"
                  label="Image Link"
                  defaultValue="color"
                  variant="outlined"
                  value={product.image}
                  onChange={handleInputChange}
                  // style={{backgroundColor:"white"}}
                  className={classes.formControl}
                  name="image"
                  type="link"
                />

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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      startAdornment={<InputAdornment position="start">XXL</InputAdornment>}
                      labelWidth={60}
                    />
                  </FormControl>

                </div>

                <div>
                  <button className="btn btn-block shadow" 
                  onClick={Submit} 
                  style={{backgroundColor:'#FC3C80',color:'white'}}>
                      Add new product</button>
                </div>

              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );

};

