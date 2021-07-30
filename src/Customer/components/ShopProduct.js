import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    // maxHeight: "460px",
    marginTop: "10px"
  },
  cardMedia: {
    paddingTop: '95.25%', // 16:9,
    height: "auto",
    objectFit: "cover",
    minHeight: "290px"
  },
  cardContent: {
    flexGrow: 1,
    // maxHeight: "260px",
    height: "auto"

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
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [state, setState] = useState({
    price: '',
    collection: '',
    categories: props.cat,
    selectedCategory: " ",
    // inStock: true

  });


  //sort products by id 
  function dynamicSort(property) {
    return function (a, b) {
      return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    }
  }


var productsAll=[];

  //get All products
  const loadProducts = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/products/");
    setProduct(result.data.sort(dynamicSort('id')));
    setnewProductC(result.data.sort(dynamicSort('id')));
    productsAll=result.data.sort(dynamicSort('id'));
    
    console.log(result.data.reverse());
    result.data.map((product) => {
      loadStockById(product.id)
    })
  };


  var lists = [];
  const goThroughArrt = (list, productId,productsAll) => {

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

    productsAll.map((products)=>{
      if(products.id==singleStock.product_id){
        products.S=singleStock.S;
        products.M=singleStock.M;
        products.L=singleStock.L;
        products.XL=singleStock.XL;
        products.XXL=singleStock.XXL;

      };
    });

    setProduct(productsAll);
    setnewProductC(productsAll);
    lists.push(singleStock);
  }


  

  //return stock  by product id
  const loadStockById = async (id) => {
    await axios.get(`http://127.0.0.1:8000/api/stocks/${id}`).then((result) => {
      var arr2 = result.data;
      var prodId = id;
      goThroughArrt(arr2, prodId,productsAll);    
    })
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
      setProduct(newList)
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
      setProduct(newList)
    };

    if (category == "All") {
      newProductC.map((item) => {
        addProducts(item);
      })
    }

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


  const remove = () => {
    localStorage.removeItem("product");
  };



  useEffect(()=>{
    loadCategories();
    loadProducts();
  },[]);

 






  return (
    <div>
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
                    <FormControlLabel value="Light" control={<Radio />} label="Light"
                      onChange={handleChangeColor}
                    />
                    <FormControlLabel value="Dark" control={<Radio />} label="Dark" style={{ color: "black" }}
                      onChange={handleChangeColor} />
                  </RadioGroup>
                </FormControl>
              </Box>





              {/* filter by categories */}
              <Box
                borderRadius={16}
                {...defaultProps} >

                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Choose Category</FormLabel>
                  <RadioGroup aria-label="category" name="gender1" value={state.selectedCategory} onChange={handleChangeCategory} className="circle">
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
                <Grid item key={card.id} xs={12} sm={4} md={3}>
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
                        {
                          (card.S == 0 && card.M == 0 && card.L == 0 && card.XL == 0 && card.XXL == 0)
                            ?
                            (
                              <Typography component='h6' color="Black">
                                Sold Out
                              </Typography>
                            )
                            :
                            (<div></div>)
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

    </div>
  );
}