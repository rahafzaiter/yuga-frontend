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

// const product=[
//     {id:1,title:"jeans Skirt",decription:"This flared pintucked denim skirt is a staff favoriteâ€¦ So we produced it in another quality denim fabric! The elegant lines and stitching make for a slenderizing silhouette, and the denim wash can easily be matched with anything. Stylish and flattering, pair it with any of our tunics, tops, or blouses. Note: This design is an Inventory Item, ready for immediate despatch.",color:"white",collection:"colored",categoryId:6,price:220,image:'https://i.pinimg.com/564x/97/62/0f/97620f26c8f6ea7d2f00f9476e9876ed.jpg',inStock:true},
//     {id:2,title:"Ruffle Dress ",decription:"Browse our full collection of dresses perfect for any occasion. Whether it's a party or a weekend getaway, you will surely fall in love with our collection",color:"rose",collection:"colored",categoryId:{id:4,name:"pant"},price:300,image:'https://i.pinimg.com/564x/6e/43/74/6e4374af339d40180e366d295e2bc769.jpg',inStock:true},
//     {id:3,title:"Blazer",decription:"2019 Spring Autumn Blazers Women Small suit Plus size Long sleeve jacket Casual tops female Slim Wild Blazers Windbreaker coat - yellow X719 - 4O4116300433-6",color:"Yelllow",collection:"colored",categoryId:7,price:280,image:"https://i.pinimg.com/564x/ea/32/6c/ea326c718e52c6c76afde0993985ec4a.jpg",inStock:true},
//     {id:4,title:"velvet Skirt",decription:"In sensual silk and viscose velvet, this longer length skirt has a great easy fit with a deep elasticated waistband and silk-trimmed, angled side-pockets. 82% viscose 18% silk, Trim 100% silk/100%",color:"blue ",collection:"colored",categoryId:6,price:160,image:'https://i.pinimg.com/564x/06/6c/f1/066cf1275a96f883d20ee96bd548ce60.jpg',inStock:true},
//     {id:5,title:"boyfriend pant",decription:" Relaxed fit trousers with adjustable waistband and Tsuki logo embroidery.  Felix wears a size 30. Looking for Marzia's fit? That's our Black Moon trousers in Slim Fit.",color:"black",collection:"black",categoryId:1,price:200,image:'https://i.pinimg.com/564x/88/dc/5a/88dc5a987913a12049e5d50c3e0d3a1c.jpg',inStock:false},
//     {id:6,title:"Jumpsuit",decription:"The ultimate statement alternative to a maxi dress, the One Shoulder Cape Sleeve Jumpsuit is all you need to master the glam dress code this season. Make sure you’re the best-dressed guest for a stylish wedding, races or VIP party in our dramatic Cape Sleeve Jumpsuit worked in a classic black and cinched at the waist to flatter your curves. Where to WearThis jumpsuit is perfect for nights out, graduation, or special occasions. Style With Elongate your legs by wearing this wide-leg jumpsuit with a killer heel and a chic low pony for maximum impact. Underwear SolutionsNude Lace Be Honest Bra.Product DetailsStretch Jersey (95% Polyester 5% Elastane)Stretch Factor: Stretchy Model is 5’8 ",color:"black",categoryId:3,price:300,image:'https://i.pinimg.com/564x/2b/ec/89/2bec89c1e051e2fcd4b9c740c1b28a0f.jpg',inStock:true},
    
// ]


export default function Album(props) {
  const classes = useStyles();

  // const [productTest,setProductTest]=useState([]);
  // setProductTest({productTest:props.products});
  const [prod,setProd]=useState({});
  const [product,setProduct]=useState(props.products)
  
 

  const [state, setState] = useState({
    price: '',
    collection:'',
    categories: [
        {id: '1', name: 'Pant'},
        {id: '2', name: 'Chemis'},
        {id: '3', name: 'Set'},
        {id: '4', name: 'Dress'},
        {id: '5', name: 'Short'},
        {id: '6', name: 'Skirt'},
        {id: '7', name: 'Jacket'}
    ],
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
    console.log(props.products)
    console.log(product)
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