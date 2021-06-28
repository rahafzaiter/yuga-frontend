import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

//Filter:
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Customer/ProductDetails.scss'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: 'black',
    display:'block',
    alignItems:'left',
    alignContent:'left',
    width:'100%'
    // marginLeft:'60px',
    // marginTop:'60px',
    // width:'100%'
  },
  formControl: {
    margin: theme.spacing(1),
    // Width: "100%",
    minWidth: "90%",
    fontSize: "100%"

    // display:'block'

},
}));




export default function ProductDetails({additem,user}) {
  const classes = useStyles();


  const [Product,setProduct]  =useState(JSON.parse(localStorage.getItem("product")));
  const [size,setSize]=useState('');
  const [quantity,setQuantity]=useState('');
  const [item,setItem]=useState(
    {
       Product,
       size:' ',
      //  quantity:' '
   }
  );

  const [state, setState] = useState({


    // product: {
    //   id: 1,
    //   title: 'jeans Skirt',
    //   price: 220,
    //   description: 'This flared pintucked denim skirt is a staff favoriteâ€¦ So we produced it in another quality denim fabric! The elegant lines and stitching make for a slenderizing silhouette, and the denim wash can easily be matched with anything. Stylish and flattering, pair it with any of our tunics, tops, or blouses. Note: This design is an Inventory Item, ready for immediate despatch.',
    //   image: 'https://i.pinimg.com/564x/97/62/0f/97620f26c8f6ea7d2f00f9476e9876ed.jpg',
    //   collection: 'color',
    //   quantity: {
    //     id: null,
    //     XS: '1',
    //     S: '3',
    //     M: '2',
    //     L: '3',
    //     XL: '5'
    //   },
    //   category: {
    //     id: null,
    //     name: 'skirt'
    //   },
    //   inStock: true,
    // }

  });

  const handleChangeSize= (event) => {
    setSize(event.target.value)
    const { name, value } = event.target;
    setItem({ ...item, size:value });
    
  };

  // const handleChangeQuantity= (event) => {
  //   setQuantity(event.target.value)
  //   const { name, value } = event.target;
  //   setItem({ ...item,quantity: value });
  // };

  var button;

  if(!user){
    button=(<button onClick={()=>alert("please login to buy")} background="secondary">Add to Cart</button>)
  }else{
    button=(<button display="block" onClick={() =>{
      if (!size ){
        alert("please fill size")
        return 
      }else{
         console.log(item)
        additem(item)
      }    }} >
        Add to Cart
    
      </button>)
  }

  

  useEffect(() => {
    // setItem({ ...item, Product: Product });

    
  
  },[] );

 
 


  return (
   
    <div className="container" style={{ width: '80%' }} >
      <Grid container spacing={2} className={classes.root}>
        <Grid item  xs={5} container  md={4} >
          <img src={Product.card.image} style={{objectFit: "cover",width:"100%",height:"100%",maxHeight:"100%"}} />
        </Grid>

        <Grid xs={7} item >

        <Grid  xs={12} className={classes.formControl}>
          <Paper className={classes.paper} bold >
            <h3  marginButton="2px"> {Product.card.title}</h3>
            <h5  marginButton="2px"> Product Info
            </h5>
            <p  marginButton="2px"> {Product.card.description}</p>
            <p  marginButton="2px">{Product.card.collection}</p>           
            <p marginButton="2px">Price: {Product.card.price} LBP</p>
           
          </Paper>
        </Grid>

        <Grid  xs={12}  marginTop="40">
          <Paper className={classes.paper}>
          

            <Grid  xs={12}  className={classes.formControl}>
           

            <form onSubmit={e => e.preventDefault()}
             noValidate
             
             >

           {/* <Grid  xs={12}  >
           
            <p  >Quantity: </p>

           
              <input  type="number" name="quantity" required onChange={handleChangeQuantity}/>
           </Grid> */}
           <Grid  xs={12} >
         

              <FormControl className={classes.formControl} >
                <InputLabel htmlFor="age-native-simple">Select Size</InputLabel>
                <Select
                  native
                  value={size}
                  onChange={handleChangeSize}
                  required
                  
                  inputProps={{
                    name: 'size',
                    id: 'age-native-simple',

                   
                  }}
                  
                  // style={{ align: "left", width: "100%" }}

                >
                  <option aria-label="None" value="" />
                  <option value={"S"}>S</option>
                  <option value={"M"}>M</option>
                  <option value={"L"}>L</option>
                  <option value={"XL"}>XL</option>
                  <option value={"XXL"}>XXL</option>

                </Select>
              </FormControl>
              </Grid>
              

             
              {/* <Link to={`/Customer/CustCart`}> */}
              {/* <button display="block" onClick={() =>{
                if (!size || !quantity){
                  alert("please fill size and quantity")
                  return 
                }else{
                   console.log(item)
                  additem(item)
                }    }} >
                  Add to Cart
              
                </button> */}

                {button}
              {/* </Link> */}
            </form>
            </Grid>
            </Paper>       
        </Grid>
        </Grid>

      </Grid>

    </div>
  );

}

