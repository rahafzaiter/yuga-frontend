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
import Box from '@material-ui/core/Box';
import ProductDetails from '../components/ProductDetails'
import {Link,useHistory} from 'react-router-dom';

import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Customer/ShopProduct.scss'
import AnimatedButton from 'react-animated-buttons';

//Filter:
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: "white",
    color:"black",
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const defaultProps = {
    bgcolor: '#F3E0E0',
    borderColor: 'text.primary',
    color:"black",
    textSize:"20px",
    m: 1,
    // border: 1,
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
    paddingTop: theme.spacing(9),
    paddingBottom: theme.spacing(9),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    maxHeight:"560px"
  },
  cardMedia: {
    paddingTop: '95.25%', // 16:9,
    height:"390px",
    objectFit: "cover"
  },
  cardContent: {
    flexGrow: 1,
    maxHeight:"260px"

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
  radioPink: {
    border: "10px solid #EF959D",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(1),
    display:"flex",
    flexDirection:"row",
    
  },
}));


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function Album(props) {
  const classes = useStyles();
  const history=useHistory();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };


  // const [productTest,setProductTest]=useState([]);
  // setProductTest({productTest:props.products});
  const [prod,setProd]=useState({});
  const [product,setProduct]=useState(props.products);
  const [newProduct,setNewProduct]=useState([]);

  
 

  const [state, setState] = useState({
    price: '',
    collection:'',
    categories:props.cat,
    selectedCategory:" ",
    inStock:true

  });

//to filter the products based on color
  const Add=async(collection)=>{
    //  console.log("new Product after map",newProduct)
     var List=[]
    const addProducts = item => {
      const newList = List.concat(item);
      List=newList;
      // console.log("2");
      setNewProduct(newList)
      // console.log("3");
      // console.log("list",List);
  };

  if(collection=="All"){
    props.products.map((item)=> {      
        addProducts(item);
    })
  
   }
  
   else{
  
  props.products.map((item)=> {   
      if(collection==item.collection){
        console.log("collection in map",item.collection)
        addProducts(item);
      }
    })
  }
    setProduct(List);
  }



  //To filter products based on category:
  const AddCatagery=async(category)=>{
    // console.log("new Product after map",newProduct)
    var List=[]
   const addProducts = item => {
     const newList = List.concat(item);
     List=newList;
    //  console.log("2");
     setNewProduct(newList)
    //  console.log("3");
    //  console.log("list",List);
 };

 if(category=="All"){
  props.products.map((item)=> {      
      addProducts(item);
  })

 }

 else{
 
 props.products.map((item)=> {   
     if(category==item.category){
       console.log("collection in map",item.collection)
       addProducts(item);
     }
   })
  }

   setProduct(List);
 }

  const handleChangePrice = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  
  const handleChangeColor = (event) => {
    // const name = event.target.name;
    Add(event.target.value)
    setState({
      ...state,
      collection: event.target.value,
    });

  };

  const NumberFormatPrice=(y)=>{
    var price=new Intl.NumberFormat();
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
}, [newProduct])

  const remove=()=>{
    localStorage.removeItem("product");
  };





  return (    
    <React.Fragment>
      <CssBaseline />
      <main style={{minHeight:"1000px"}}>
        {/* Hero unit */}
        {/* <div className={classes.heroContent}>
            <SearchBar />
        
        </div>
       */}
        <Container className={classes.cardGrid} maxWidth="lg" width="90%" >
        <Grid spacing={3} className={classes.grids} container >

          {/* End hero unit */}
          <Grid item xs={2} >
          <Box
           borderRadius={16} 
           {...defaultProps} >

     
       {/* collection */}

       <FormControl component="fieldset" className={classes.formControl} >
      <FormLabel component="legend" style={{fontWeight:"bold"}}>Choose Color</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group"  style={{display:"flex",flexDirection:"column",align:"left"}}
      >
         <FormControlLabel value="All" control={<Radio />} label="All" onChange={handleChangeColor}/>
        <FormControlLabel value="light" control={<Radio />}  label="Light" 
        onChange={handleChangeColor}
      />
        <FormControlLabel value="dark" control={<Radio />} label="Dark"  style={{color:"black"}}
        onChange={handleChangeColor} />
       
      </RadioGroup>
    </FormControl>

  


      {/* Category2 */}

      <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Choose Category</FormLabel>
      <RadioGroup aria-label="category" name="gender1" value={state.selectedCategory} onChange={handleChangeCategory}
      
      className="circle"
      >
        <FormControlLabel value="All" control={<Radio />} label="All" />

        { state.categories.map(category => {
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



          {/* All Items */}

          <Grid container spacing={1} 
          item 
          xs={10}
          
          >
            {product.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={3}>
                <Card className={classes.card} style={{backgroundColor:"#F3E0E0"}}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.title}
                    color={card.color}

                    onClick={(()=>{ 
                      remove();
                      localStorage.setItem('product',JSON.stringify({card}));
                       history.push(`/Customer/ProductDetails/${card.id}`)
                    })
                     
                      }
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom style={{fontSize:"18px"}} component="h2">
                    {card.title}                                              
                    </Typography>
                    {/* <Typography>
                     {card.color} {card.title}
                    </Typography> */}
                    <Typography style={{fontWeight:"700",fontSize:"20px"}} value="bold" fontWeight="800" color="Black" aria-label="bold">
                    
                    {NumberFormatPrice(card.price)}  LBP
                    </Typography>

                    <Typography>  
                    
            { card.inStock ? 
            <div></div>
            // (
            //           <AnimatedButton color="rgb(250, 4, 156)"  width="300px"
            //           // style={{backgroundColor:"#FF00A7",width:'25%',marginTop:"4%",color:'white'}} 
                       
               
            //           // disabled={!card.inStock}
                      
                     
                      
            //           // shadow 
            //           onClick={(()=>{ 
            //             remove();
            //             localStorage.setItem('product',JSON.stringify({card}));
            //              history.push(`/Customer/ProductDetails/${card.id}`)
            //           })
                       
            //             }> 
            //             <span className="shop-prod_buttn">View </span>
                        
            //             </AnimatedButton>

                       // )
                        
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