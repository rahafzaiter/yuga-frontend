import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link, useHistory } from 'react-router-dom';

//Filter:
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Customer/ProductDetails.scss'
import Modal from '@material-ui/core/Modal';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    marginTop: '30px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: 'black',
    display: 'block',
    alignItems: 'left',
    alignContent: 'left',
    width: '100%',

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
export default function ProductDetails({ additem, user, cart }) {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const classes = useStyles();
  const history = useHistory();
  const [modalStyle] = React.useState(getModalStyle);
  const [Product] = useState(JSON.parse(localStorage.getItem('product')));
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
          setItem({ ...item, id: cart.length + 1 });

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
    //console.log('cart in products details',cart)
  }, []);


  //when user choose size and item is ready call the additem props method to add to cart 
  useEffect(() => {
    if (item.id != 0) {
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
    <div className="container" >
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={7} md={6} >
          <img src={Product.card.image} style={{ objectFit: "cover", width: "100%", height: "90%", maxHeight: "100%", borderRadius: "25px" }} />
        </Grid>

        <Grid xs={6} item md={6}>
          <Grid xs={12} className={classes.formControl}>
            <div className={classes.paper} bold >
              <h3 marginButton="2px" style={{ fontWeight: "700", fontSize: "26px" }}> {Product.card.title}</h3>
              <h5 marginButton="2px" > Features
              </h5>
              <p marginButton="2px"> {Product.card.description}</p>
              <p marginButton="2px">{Product.card.collection}</p>
              <p marginButton="2px" style={{ fontWeight: "400", fontSize: "23px" }}>{NumberFormatPrice(Product.card.price)} LBP</p>
            </div>
          </Grid>

          <Grid xs={12} marginTop="40">
            <div className={classes.paper}>
              <Grid xs={12} className={classes.formControl}>
                <form onSubmit={e => e.preventDefault()}
                  noValidate>


                  {(Product.card.S == "0" && Product.card.M == "0" && Product.card.L == "0" && Product.card.XL == "0" && Product.card.XXL == "0") ?
                    (<div>Sold Out</div>) :
                    (<div>
                      <Grid xs={12} style={{ marginButton: "50px" }}>

                        <ToggleButtonGroup
                          value={size}
                          onChange={handleChangeSize}
                          required
                          className={classes.formControl}
                          inputProps={{
                            name: 'size',
                            id: 'age-native-simple',
                          }}
                          exclusive
                          style={{ marginButton: "50px", color: "black" }}
                        >

                          <ToggleButton value="S" style={{ padding: "18px", fontSize: "20px",border: "1px solid black" }} disabled={Product.card.S == "0"} aria-label="left aligned">
                            S
                          </ToggleButton>
                          <ToggleButton value="M" style={{ padding: "18px", fontSize: "20px",border: "1px solid black"}} disabled={Product.card.M == "0"} aria-label="left aligned">
                            M
                          </ToggleButton>

                          <ToggleButton value="L" style={{ padding: "18px", fontSize: "20px",border: "1px solid black" }} disabled={Product.card.L == "0"} aria-label="left aligned">
                            L
                          </ToggleButton>

                          <ToggleButton value="XL" style={{ padding: "18px", fontSize: "20px",border: "1px solid black"}} disabled={Product.card.XL == "0"} aria-label="left aligned">
                            XL
                          </ToggleButton>

                          <ToggleButton value="XXL" style={{ padding: "18px", fontSize: "20px",border: "1px solid black"}} disabled={Product.card.XXL == "0"} aria-label="left aligned">
                            XXL
                          </ToggleButton>   
                            </ToggleButtonGroup>                      
                        </Grid>
                        {button}
                      </div>
                      )
                  }


                </form>
              </Grid>
            </div>
          </Grid>
          </Grid>

        </Grid>

    </div>
      );

}

