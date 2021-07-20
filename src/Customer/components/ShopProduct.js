import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Customer/ShopProduct.scss'

//Filter:
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
// import InputBase from '@material-ui/core/InputBase';
// const BootstrapInput = withStyles((theme) => ({
//   root: {
//     'label + &': {
//       marginTop: theme.spacing(3),
//     },
//   },
//   input: {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: "white",
//     color: "black",
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     padding: '10px 26px 10px 12px',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:focus': {
//       borderRadius: 4,
//       borderColor: '#80bdff',
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//     },
//   },
// }))(InputBase);

const defaultProps = {
  bgcolor: '#F3E0E0',
  borderColor: 'text.primary',
  color: "black",
  textSize: "20px",
  m: 1,
  minWidth: "100%",
};

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(9),
    paddingBottom: theme.spacing(9),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: "560px"
  },
  cardMedia: {
    paddingTop: '95.25%', // 16:9,
    height: "390px",
    objectFit: "cover"
  },
  cardContent: {
    flexGrow: 1,
    maxHeight: "260px"

  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  grids: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: "60%",
    fontSize: "100%"
  },
  radioPink: {
    border: "10px solid #EF959D",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "row",

  },
}));


export default function Album(props) {
  const classes = useStyles();
  const history = useHistory();
  const [newProductC, setnewProductC] = useState([]);
  const [product, setProduct] = useState(newProductC);
  const [refresh, setRefresh] = useState(false);
  const [state, setState] = useState({
    price: '',
    collection: '',
    categories: props.cat,
    selectedCategory: " ",
    inStock: true

  });

  const [categories, setCategories] = useState([]);

  //sort products by id 
  function dynamicSort(property) {
    return function (a, b) {
      return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    }}


  //get All products
  const loadProducts = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/products/");
    setProduct(result.data.sort(dynamicSort('id')))
    setnewProductC(result.data.sort(dynamicSort('id')))
    console.log(result.data.reverse())
    setRefresh(!refresh);
  };


  //get All categories
  const loadCategories = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/categories/");
    setCategories(result.data.reverse())

  };


  //to filter the products based on color
  const Add = async (collection) => {
    var List = []
    const addProducts = item => {
      const newList = List.concat(item);
      List = newList;
      setNewProduct(newList)
    };

    if (collection == "All") {
      newProductC.map((item) => {
        addProducts(item);
      })
    }

    else {
      newProductC.map((item) => {
        if (collection == item.collection) {
          console.log("collection in map", item.collection)
          addProducts(item);
        }
      })
    }
    setProduct(List);
  }


  //To filter products based on category:
  const AddCatagery = async (category) => {
    var List = []
    const addProducts = item => {
      const newList = List.concat(item);
      List = newList;
      setNewProduct(newList)
    };

    if (category == "All") {
      newProductC.map((item) => {
        addProducts(item);
      })}

    else {
      newProductC.map((item) => {
        if (category == item.name) {
          console.log("collection in map", item.collection)
          addProducts(item);
        }
      })
    }

    setProduct(List);
  }

  const handleChangeColor = (event) => {
    Add(event.target.value)
    setState({
      ...state,
      collection: event.target.value,
    });

  };

  const NumberFormatPrice = (y) => {
    var price = new Intl.NumberFormat();
    return price.format(y);
  }

  const handleChangeCategory = (e) => {
    AddCatagery(e.target.value)
    setState({
      ...state,
      selectedCategory: e.target.value
    });
  };

  useEffect(() => {
    loadProducts();
    loadCategories();
    // console.log('all prodcts in product page', product)
  }, [])

  const remove = () => {
    localStorage.removeItem("product");
  };





  return (
    <React.Fragment>
      <CssBaseline />
      <main style={{ minHeight: "1000px" }}>
        <Container className={classes.cardGrid} maxWidth="lg" width="90%" >
          <Grid spacing={3} className={classes.grids} container >

            <Grid item xs={2} >
              <Box
                borderRadius={16}
                {...defaultProps} >


                {/* filter by collection */}

                <FormControl component="fieldset" className={classes.formControl} >
                  <FormLabel component="legend" style={{ fontWeight: "bold" }}>Choose Color</FormLabel>
                  <RadioGroup row aria-label="gender" name="row-radio-buttons-group" style={{ display: "flex", flexDirection: "column", align: "left" }}
                  >
                    <FormControlLabel value="All" control={<Radio />} label="All" onChange={handleChangeColor} />
                    <FormControlLabel value="light" control={<Radio />} label="Light"
                      onChange={handleChangeColor}
                    />
                    <FormControlLabel value="dark" control={<Radio />} label="Dark" style={{ color: "black" }}
                      onChange={handleChangeColor} />
                  </RadioGroup>
                </FormControl>




               {/* filter by categories */}

                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Choose Category</FormLabel>
                  <RadioGroup aria-label="category" name="gender1" value={state.selectedCategory} onChange={handleChangeCategory}

                    className="circle"
                  >
                    <FormControlLabel value="All" control={<Radio />} label="All" />

                    {categories.map(category => {
                      return (
                        <FormControlLabel
                          key={category.id}
                          name={category.name}
                          value={category.name}
                          control={<Radio />}
                          label={category.name}

                        />
                      )
                    })
                    }


                  </RadioGroup>
                </FormControl>
              </Box>
            </Grid>



            {/* Display All Items */}
            <Grid container spacing={1}
              item
              xs={10}

            >
              {product.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={3}>
                  <Card className={classes.card} style={{ backgroundColor: "#F3E0E0" }}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.image}
                      title={card.title}
                      color={card.color}
                      onClick={(() => {
                        remove();
                        localStorage.setItem('product', JSON.stringify({ card }));
                        history.push(`/Customer/ProductDetails/${card.id}`)
                      })}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom style={{ fontSize: "18px" }} component="h2">
                        {card.title}
                      </Typography>
                      <Typography style={{ fontWeight: "700", fontSize: "20px" }} value="bold" fontWeight="800" color="Black" aria-label="bold">
                        {NumberFormatPrice(card.price)}  LBP
                      </Typography>
                      <Typography>

                        {(card.S && card.M && card.L && card.XL && card.XXL) ?
                          <div></div>
                          :
                          (
                            <Typography>
                              <h6 color="Black" disabled="true">Sold Out</h6>

                            </Typography>
                          )
                        }

                      </Typography>

                    </CardContent>
                  </Card>
                </Grid>

              ))}
            </Grid>
          </Grid>
        </Container>

      </main>

    </React.Fragment>
  );
}