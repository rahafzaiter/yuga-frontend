import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

//Filter:
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'black',
  },
  formControl: {
    margin: theme.spacing(2),
    // Width: "100%",
    minWidth: "60%",
    fontSize: "100%",
    align: "left"
  },
}));




export default function ProductDetails({ card, addItem }) {
  const classes = useStyles();

  // const products=props.product
  // const [product,setProduct]  =useState(" ");
  const [count, setCount] = useState(0);

  const [state, setState] = useState({


    product: {
      id: 1,
      title: 'jeans Skirt',
      price: 220,
      description: 'This flared pintucked denim skirt is a staff favoriteâ€¦ So we produced it in another quality denim fabric! The elegant lines and stitching make for a slenderizing silhouette, and the denim wash can easily be matched with anything. Stylish and flattering, pair it with any of our tunics, tops, or blouses. Note: This design is an Inventory Item, ready for immediate despatch.',
      image: 'https://i.pinimg.com/564x/97/62/0f/97620f26c8f6ea7d2f00f9476e9876ed.jpg',
      collection: 'color',
      quantity: {
        id: null,
        XS: '1',
        S: '3',
        M: '2',
        L: '3',
        XL: '5'
      },
      category: {
        id: null,
        name: 'skirt'
      },
      inStock: true,
    }


  });

  const handleChangeColor = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  // useEffect(() => {
  //   setProduct (p);
  // });

  return (
    <div className="container" style={{ width: '80%' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} height="20%">
          <img src={state.product.image} style={{ width: '50%', height: '300px', }} />
        </Grid>
        <Grid item xs={7} >

          <Paper className={classes.paper} bold >
            <h3 align="left" marginButton="2px"> {state.product.title}</h3>
            <h5 align="left" marginButton="2px"> Product Info</h5>
            <p align="left" marginButton="2px">{state.product.description}</p>
            <p align="left" marginButton="2px">{state.product.collection}</p>
          </Paper>
        </Grid>
        <Grid item xs={5} style={{ align: "left", display: 'flex' }} >
          <Paper className={classes.paper}>
            <p align="left">{state.product.price} L.L.P</p>
            <p align="left">Quantity: </p>
            <div><input type="number" style={{ align: "left" }} /></div>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Select Size</InputLabel>
              <Select
                native
                value={state.collection}
                onChange={handleChangeColor}
                inputProps={{
                  name: 'collection',
                  id: 'age-native-simple',
                }}
                style={{ align: "left", width: "100%" }}

              >
                <option aria-label="None" value="" />
                <option value={"S"}>S</option>
                <option value={"M"}>M</option>
                <option value={"L"}>L</option>
                <option value={"XL"}>MXL</option>
                <option value={"XXL"}>XXL</option>

              </Select>
            </FormControl>

           <Link href="/Customer/CustCart"> 
           <button display="block" onClick={() => props.addItem(state.product)}>
              Add to Cart</button>
            </Link>
          </Paper>


        </Grid>

      </Grid>

    </div>
  );

}

