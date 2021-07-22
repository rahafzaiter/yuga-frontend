import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link,useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

//Filter:
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Customer/ProductDetails.scss'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Modal from '@material-ui/core/Modal';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: 'black',
    display: 'block',
    alignItems: 'left',
    alignContent: 'left',
    width: '100%'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "90%",
    fontSize: "100%"
  },

  paperModel: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
export default function ProductDetails({ additem, user,cart }) {
  const classes = useStyles();
  const history=useHistory();
  const [modalStyle] = React.useState(getModalStyle);
  const [Product]=useState(JSON.parse(localStorage.getItem('product')));
  const [size, setSize] = useState('');
  const [item, setItem] = useState({
      id: 0,
      Product,
      size: ' ',
    }
  );

  const [open, setOpen] = React.useState(false);

  const handleChangeSize = (event) => {
    setSize(event.target.value)
    const { name, value } = event.target;
    setItem({ ...item, size: value });

  };


  //retated to modal feature
  const handleOpen = () => {
    setOpen(true);
  };

  //retated to modal feature
  const handleClose = () => {
    setOpen(false);
  };

  var button;

  //when click on button we have condition 
  //if user not loggedt in :
  const body = (
    <div style={modalStyle} className={classes.paperModel}>
      <h2 id="simple-modal-title">Yuga: Login</h2>
      <p id="simple-modal-description">
        Please login in order to buy
      </p>
    </div>
  );
 //if user didnt fill size :
  const bodyAfterLogin = (
    <div style={modalStyle} className={classes.paperModel}>
      <h2 id="simple-modal-title">Yuga</h2>
      <p id="simple-modal-description">
        Please Fill The Size
      </p>
    </div>
  );

   //if all validation are true the item will be added (text will be item added):
  const bodyAfterAdd = (
    <div style={modalStyle} className={classes.paperModel}>
      <h2 id="simple-modal-title">Yuga</h2>
      <p id="simple-modal-description">
        Item is Added
      </p>
    </div>
  );


  //these codes below identify which button id be displayed 
  if (!user) {
    button = (
      <div>
        <button onClick={handleOpen} style={{ backgroundColor: "grey", color: "white" }}> <ShoppingCartIcon /> ADD TO CART</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>);
  }
  else if (!size) {
    button = (
      <div>
        <button className="button" onClick={handleOpen}>  <ShoppingCartIcon /> ADD TO CART</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {bodyAfterLogin}
        </Modal>
      </div>)
  }
  else {
    button = (
      <div>
        <button className="button" onClick={() => {
          handleOpen();
          setItem({ ...item, id: cart.length+1 });

        }}> 
         <ShoppingCartIcon /> ADD TO CART</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {bodyAfterAdd}
        </Modal>
      </div>
    )
  }



  useEffect(() => {
    console.log('cart in products details',cart)
  }, []);

  //when user choose size and item is ready call the additem props method to add to cart 
  useEffect(() => {
    if(item.id!=0){
    additem(item);
    history.push("/Customer/CustCart");
    }
  }, [item.id]);

  //method add comma to the price ex:2000000 becomes
  const NumberFormatPrice = (y) => {
    var price = new Intl.NumberFormat();
    return price.format(y);
  }



  return (
    <div className="container" style={{ width: '80%' }} >
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={5} md={4} >
          <img src={Product.card.image} style={{ objectFit: "cover", width: "100%", height: "100%", maxHeight: "100%" }} />
        </Grid>

        <Grid xs={7} item >
          <Grid xs={12} className={classes.formControl}>
            <Paper className={classes.paper} bold >
              <h3 marginButton="2px" style={{ fontWeight: "700", fontSize: "26px" }}> {Product.card.title}</h3>
              <h5 marginButton="2px" > Features
              </h5>
              <p marginButton="2px"> {Product.card.description}</p>
              <p marginButton="2px">{Product.card.collection}</p>
              <p marginButton="2px" style={{ fontWeight: "400", fontSize: "23px" }}>{NumberFormatPrice(Product.card.price)} LBP</p>
            </Paper>
          </Grid>

          <Grid xs={12} marginTop="40">
            <Paper className={classes.paper}>
              <Grid xs={12} className={classes.formControl}>
                <form onSubmit={e => e.preventDefault()}
                  noValidate>
                  <Grid xs={12} >
                    <FormControl className={classes.formControl} >

                      <InputLabel htmlFor="age-native-simple" style={{ fontWeight: "400", fontSize: "17px", marginButton: "20px", color: "black" }}>Select Size</InputLabel>
                      <Select
                        native
                        value={size}
                        onChange={handleChangeSize}
                        required

                        inputProps={{
                          name: 'size',
                          id: 'age-native-simple',
                        }}>

                        <option aria-label="None" value="" />
                        <option value={"S"}>S</option>
                        <option value={"M"}>M</option>
                        <option value={"L"}>L</option>
                        <option value={"XL"}>XL</option>
                        <option value={"XXL"}>2XL</option>

                      </Select>
                    </FormControl>
                  </Grid>
                  {button}
                
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

      </Grid>

    </div>
  );

}

