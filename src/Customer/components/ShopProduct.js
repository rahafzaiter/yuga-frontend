import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
import SearchBar from './SearchBar'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import ProductDetails from '../components/ProductDetails'

import {Link} from 'react-router-dom';

import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Customer/ShopProduct.scss'


//Filter:
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';


const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    // width:'100%',
    // padding:"1%",
    minWidth:"100%",
    // height:'100%'
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
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '80.25%', // 16:9
  },
  cardContent: {
    flexGrow: 2,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  grids:{
    flexGrow: 1,
  },
   formControl: {
    margin: theme.spacing(2),
    // Width: "100%",
    minWidth:"60%",
    fontSize:"100%"
   
    // display:'block'
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function Album(props) {
  const classes = useStyles();

  // const [productTest,setProductTest]=useState([]);
  // setProductTest({productTest:props.products});
  const [prod,setProd]=useState({});
  const [product,setProduct]=useState(props.products)
  
 

  const [state, setState] = useState({
    price: '',
    collection:'',
    categories:props.cat,
    selectedCategory:" ",
    inStock:true

  });

  const handleChangePrice = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleChangeColor = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleChangeCategory = (e) => {
    setState({
      ...state,
      selectedCategory: e.target.value
    });
  };

  useEffect(() => {
   
  },[]);

  const remove=()=>{
    localStorage.removeItem("product");
  };



  return (    
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
            <SearchBar />
        
        </div>
      
        <Container className={classes.cardGrid} maxWidth="lg">
        <Grid spacing={6} className={classes.grids} container >

          {/* End hero unit */}
          <Grid item xs={3} >
          <h3>Filter by</h3>
          <Box borderRadius={16} {...defaultProps} >

          {/* Price */}
          <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Select price-range </InputLabel>
        <Select
          native
          value={state.price}
          onChange={handleChangePrice}
          inputProps={{
            name: 'price',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"high"}>Fom high to low</option>
          <option value={"low"}>From low to high</option>
          
        </Select>
      </FormControl>

      {/* collection */}

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Select Color </InputLabel>
        <Select
          native
          value={state.collection}
          onChange={handleChangeColor}
          inputProps={{
            name: 'collection',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"colored"}>Colored</option>
          <option value={"black"}>Black</option>
          
        </Select>
      </FormControl>

      {/* Category */}
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Select Category </InputLabel>
        <Select
          native
          value={state.selectedCategory}
          onChange={handleChangeCategory}
        >
        <option aria-label="None" value="" />
          { state.categories.map(category => {
                  return (
                    <option 
                    key={category.id} 
                    name={category.name} 
                    value={category.name}
                   >
                      {category.name}
                  </option>
                  )
              })
          }
          
        </Select>
      </FormControl>
          </Box>
          </Grid>



          {/* All Items */}

          <Grid container spacing={4} xs={9}>
            {product.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card} style={{backgroundColor:"#F3E0E0"}}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.title}
                    color={card.color}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card.title}                                              
                    </Typography>
                    <Typography>
                     {card.color} {card.title}
                    </Typography>
                    <Typography>
                     {card.price} L.B.P
                    </Typography>

                    <Typography>  
                      <Link 
 
                      to={{
                       pathname:`/Customer/ProductDetails/${card.id}`,
                       card:{card} ,
                       

                       aboutProps:{
                         card:{card} 
                        //  prodname:{card.name}
                       }
                      }}  
                    >
                      <button shadow onClick={(()=>{ 
                        remove();
                        localStorage.setItem('product',JSON.stringify({card}))})
                       
                        }> View </button>
                    </Link>                              
                    </Typography>
                   
                  </CardContent>
                  <CardActions> 
                  <Typography>                
                    <h6>{card.inStock?"InStock":"Sold Out"} </h6>
                 
                    </Typography>
                    
                </CardActions>  
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