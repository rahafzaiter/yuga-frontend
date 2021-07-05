import React, { useState,useEffect } from "react";
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


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '90%',
    backgroundColor: "white",
    height: "10%",
    color:"black"
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

  const [ProductLocal, setProductLocal] = useState(
    JSON.parse(localStorage.getItem("product"))

  )

  const [AllProducts,setAllProducts]=useState( JSON.parse(localStorage.getItem("Products")));
  const [newProducts,setnewProducts]=useState([0]);
  const [product, setProduct] = useState(ProductLocal.product);
  const [imageSrc, setImageSrc] = useState();
  const [colorHexCode, setColorHexCode] = useState('#000000');
  const [pictures, setPictures] = useState(null);
  const[changed,setChange]=useState(false);
  const [quantity, setQuantity] = useState({
    id: 0,
    S: 1,
    M: 2,
    L: 3,
    XL: 1,
    XXL: 0,
    productId: product.id


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
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);




  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({...product,[name]: value });
    setChange(true);
  };

  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]))
  }


var y="";

  // const Edit=()=>{

  //   if(AllProducts!=undefined){
   

  //     AllProducts.map((prod)=>{
  //     if(prod.id==product.id){

  //       // prod=product;
  //       const pr=newProducts.concat(product);
  //       setnewProducts(pr);
       
  //         // history.push("/Admin/tutorials");
       
  //       // return;
        
  //     }else{
       

  //       const pr=newProducts.concat(prod);
  //       setnewProducts(pr);


  //     }
  //   }) ; 
   

  //   //history.push("/Admin/tutorials");
  //   }else{
  //     console.log("empty")
  //   }

  // }

  // useEffect(()=>{
  //   setAllProducts(localStorage.getItem('Products').products)

  // },[y])

  // useEffect(()=>{
  //   localStorage.setItem('Products',JSON.stringify({newProducts}));
  //   y=localStorage.getItem('Products')
  //   console.log('new product',y)
  //   if (y!=""){
  //   history.push("/Admin/tutorials");
  //   }
    
  //   // console.log("all products in edit page",AllProducts);

  // },[newProducts])


  const saveTutorial = () => {
    var data = {
      title: tutorial.title,
      description: tutorial.description
    };
    setSubmitted(true);
    console.log(submitted);

    //   TutorialDataService.create(data)
    //     .then(response => {
    //       setTutorial({
    //         id: response.data.id,
    //         title: response.data.title,
    //         description: response.data.description,
    //         published: response.data.published
    //       });
    //       setSubmitted(true);
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
  };

  const onSubmit = e => {
    e.preventDefault();
    saveTutorial();
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setProduct({ ...tutorial, [name]: value });
  };

  const onDrop = (pictureFiles, pictureDataURLs) => {

    setPictures(pictureFiles);
    console.log("picture added");
    console.log(pictureFiles);
    console.log(pictures)
  };

  // const Submit=()=>{
  //   localStorage.setItem('product',JSON.stringify({product}))

  // }

  



  return (
    <div className="container" >

      <div className="container submit-form  mx-auto shadow p-5" style={{ backgroundColor: '#E5DBE1', width: "80%" }}>
        <h2 className="text-center mb-4">Edit A Product</h2>
        {/* {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newTutorial}>
              Add
          </button>
          </div>
        ) : ( */}
          <div className="container">

            <form noValidate onSubmit={onSubmit} className={classes.form}>
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
              //  // type="text"
              //     id="description"
              //     label="description"
              //     defaultValue={product.description}
                  multiline
                  variant="outlined"
              //     margin="normal"
              //     required
              //     fullWidth
              //     autoComplete="email"
              //     autoFocus

                  className={classes.formControl}
              //     value={product.description}
              //     onChange={handleInputChange}
              //     name="description"




                
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
                    onChange={handleInputChange}
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


                <hr />

                <FormControl className={classes.formControlSelect}>

                <Typography lassName={classes.formControlSelect} >Select Collection</Typography>
                  <Select
                   style={{ backgroundColor: "white", color: 'black' }}
                  label="Select Collection"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    inputProps={{
                      name: 'collection',
                      id: 'age-native-simple',
                    }}
                    value={product.collection}
                    onChange={handleInputChange}
                  >
                    <MenuItem value={"Light"}>Light</MenuItem>
                    <MenuItem value={"Dark"}>Dark</MenuItem>


                  </Select>
                </FormControl>


                <FormControl className={classes.formControlSelect} >
                <Typography className={classes.formControlSelect} >Select Category</Typography>
                  <Select
                    native
                    className={classes.formControl}
                    value={product.category}
                   
                    required
                    style={{ backgroundColor: "white", color: 'black' }}

                    inputProps={{
                      name: 'category',
                      id: 'age-native-simple',


                    }}
                     onChange={handleInputChange}

                  >
                    <option aria-label="None" value="" />

                     {Categories.map((cat)=>(
                    <option align="center" value={cat.name}>{cat.name}</option>))}
                    {/* <option aria-label="None" value="" />
                    <option value={"T-shirt"}>T-shirt</option>
                    <option value={"Skirt"}>Skirt</option>
                    <option value={"Dress"}>Dress</option>
                    <option value={"Pant"}>Pant</option>
                    <option value={"Set"}>Set</option>
                    <option value={"Chemis"}>Chemis</option> */}


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
                  className={classes.formControl}
                  name="color"
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
                      onChange={handleInputChange}
                      type="number"
                      startAdornment={<InputAdornment position="start">XL</InputAdornment>}
                      labelWidth={60}
                    />

                  </FormControl>
                  <FormControl className={classes.marginQuantity} variant="outlined" required>

                    <InputLabel htmlFor="outlined-adornment-amount">XX Large</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={product.XXL}
                      type="number"
                      style={{ backgroundColor: "white" }}
                      onChange={handleInputChange}
                      startAdornment={<InputAdornment position="start">XXL</InputAdornment>}
                      labelWidth={60}
                    />
                  </FormControl>

               

                <div>
                  <button className="btn btn-block shadow" 
                   style={{backgroundColor:'#FC3C80',color:'white'}}
                  onClick={ ()=>{history.push("/Admin/tutorials")}}
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

