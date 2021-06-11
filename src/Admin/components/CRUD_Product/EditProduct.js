import React, { useState, useEffect } from "react";
// import axios from "axios";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory, useParams } from "react-router-dom";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
const useStyles = makeStyles((theme) => ({
    formControl: {
      // margin: theme.spacing(1),
      // minWidth: 120,
      width: '25ch'
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '75ch'},
      display: 'flex',
      // flexWrap: 'wrap',
    },
    rootButton: {
      //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      background: "pink",
      //background: "linear-gradient(45deg,#87edfe,#ff77ed)",
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'black',
      height: 48,
      marginTop:'5%',
      padding: '10px 30px',
    },
    margin: {
      margin: theme.spacing(1),
      width: '75ch'
    },
    marginQuantity: {
      margin: theme.spacing(1),
      width: '25ch'
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    textField: {
      width: '75ch',
    },
  }));

  
const EditProduct = () => {
  const classes = useStyles();
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });

  const { name, username, email, phone, website } = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    // setTutorial({ ...tutorial, [name]: value });
  };


//   useEffect(() => {
//     loadUser();
//   }, []);

//   const onSubmit = async e => {
//     e.preventDefault();
//     await axios.put(`http://localhost:3003/users/${id}`, user);
//     history.push("/");
//   };

//   const loadUser = async () => {
//     const result = await axios.get(`http://localhost:3003/users/${id}`);
//     setUser(result.data);
//   };

  return (
   
    <div className="container" >
      <div className="w-75 mx-auto shadow p-5" style={{backgroundColor:'#e2dcdc'}}>
        <h2 className="text-center mb-4">Edit A Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter title"
              name="name"
              value={name}             
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter description"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Price"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter A Color"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
           
        <div className="form-group">
          <div   className="form-control form-control-lg">
          <InputGroup className="mb-4">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Pant</Dropdown.Item>
      <Dropdown.Item href="#">T-shirt</Dropdown.Item>
      <Dropdown.Item href="#">Dress</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Skirt</Dropdown.Item>
    </DropdownButton>
 
  </InputGroup>

          </div>
          </div>

          
          <div className="form-group">
        <h4>Quantity of size</h4>
        <FormControl  className={classes.marginQuantity} variant="outlined" required>
        
          
          <InputLabel htmlFor="outlined-adornment-amount">S</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={quantity.S}
            type="number"
            style={{backgroundColor:"white"}}
            // onChange={e => onInputChange(e)}
            startAdornment={<InputAdornment position="start">S</InputAdornment>}
            labelWidth={60}
          />

        </FormControl>
        <FormControl  className={classes.marginQuantity} variant="outlined" required>
          
          <InputLabel htmlFor="outlined-adornment-amount">M</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={quantity.M}
            style={{backgroundColor:"white"}}
            // onChange={e => onInputChange(e)}
            type="number"
            startAdornment={<InputAdornment position="start">M</InputAdornment>}
            labelWidth={60}
          />

        </FormControl>
        <FormControl  className={classes.marginQuantity} variant="outlined" required>
          
          <InputLabel htmlFor="outlined-adornment-amount">L</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={quantity.L}
            // onChange={e => onInputChange(e)}
            style={{backgroundColor:"white"}}
            startAdornment={<InputAdornment position="start">L</InputAdornment>}
            type="number"
            labelWidth={60}
          />
        </FormControl>
        <FormControl  className={classes.marginQuantity} variant="outlined" required>
          
          <InputLabel htmlFor="outlined-adornment-amount">XL</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={quantity.XL}
            style={{backgroundColor:"white"}}
            // onChange={e => onInputChange(e)}
            type="number"
            startAdornment={<InputAdornment position="start">XL</InputAdornment>}
            labelWidth={60}
          />

        </FormControl>
        <FormControl  className={classes.marginQuantity} variant="outlined" required>
          
          <InputLabel htmlFor="outlined-adornment-amount">XXL</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={quantity.XXL}
            type="number"
            style={{backgroundColor:"white"}}
            // onChange={e => onInputChange(e)}
            startAdornment={<InputAdornment position="start">XXL</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
       
        </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
            //   onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-block" style={{backgroundColor:'pink'}}>Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;