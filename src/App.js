import React, { useState } from "react";


//Style:
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from './components/Admin'
import Customer from './components/Customer'


//Admin Pages:
//login:
import SignInSideAdmin from './Admin/components/SignInAdmin'

//switch
import { Switch, Route, Link } from "react-router-dom";


function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />

  );
}


function App() {

  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  // const [Products, setProduct] = useState([
  //   { id: 1, title: "SE Factory T-shirt", description: "You've now found the staple t-shirt of your wardrobe. It's made of a thicker, heavier cotton, but it's still soft and comfy. And the double stitching on the neckline and sleeves add more durability to what is sure to be a favorite!", color: "black", collection: "dark", categoryId: 2, category: "Shirts", price: 110000, image: 'https://i.etsystatic.com/22448275/r/il/e2e607/2759566682/il_1140xN.2759566682_mz2e.jpg', inStock: true, S: 4, M: 1, L: 2, XL: 3, XXL: 1 },
  //   { id: 2, title: "Denim Skirt", description: "This flared pintucked denim skirt is a staff favoriteâ€¦ So we produced it in another quality denim fabric! The elegant lines and stitching make for a slenderizing silhouette, and the denim wash can easily be matched with anything. Stylish and flattering, pair it with any of our tunics, tops, or blouses. Note: This design is an Inventory Item, ready for immediate despatch.", color: "white", collection: "light", categoryId: 5, category: "Skirts", price: 220000, image: 'https://i.pinimg.com/564x/97/62/0f/97620f26c8f6ea7d2f00f9476e9876ed.jpg', inStock: true, S: 4, M: 1, L: 2, XL: 3, XXL: 1 },
  //   { id: 3, title: "Ruffle Dress ", description: "Browse our full collection of dresses perfect for any occasion. Whether it's a party or a weekend getaway, you will surely fall in love with our collection", color: "rose", collection: "light", categoryId: 3, category: "Dresses", price: 300000, image: 'https://i.pinimg.com/564x/6e/43/74/6e4374af339d40180e366d295e2bc769.jpg', inStock: true, S: 4, M: 1, L: 2, XL: 3, XXL: 1 },
  //   { id: 4, title: "MSGM Single Breasted Blazer", description: "2019 Spring Autumn Blazers Women Small suit Plus size Long sleeve jacket Casual tops female Slim Wild Blazers Windbreaker coat - yellow X719 - 4O4116300433-6", color: "Yelllow", collection: "light", categoryId: 11, category: "Jackets", price: 280000, image: "https://i.pinimg.com/564x/93/a6/aa/93a6aa7b5daff2939f2882838616da79.jpg", inStock: true, S: 4, M: 1, L: 2, XL: 3, XXL: 1 },
  //   { id: 5, title: "Velvet Skirt", description: "In sensual silk and viscose velvet, this longer length skirt has a great easy fit with a deep elasticated waistband and silk-trimmed, angled side-pockets. 82% viscose 18% silk, Trim 100% silk/100%", color: "blue ", collection: "light", categoryId: 5, category: "Skirts", price: 160000, image: 'https://i.pinimg.com/564x/06/6c/f1/066cf1275a96f883d20ee96bd548ce60.jpg', inStock: true, S: 4, M: 1, L: 2, XL: 3, XXL: 1 },
  //   { id: 6, title: "Boyfriend Pant", description: " Relaxed fit trousers with adjustable waistband and Tsuki logo embroidery.  Felix wears a size 30. Looking for Marzia's fit? That's our Black Moon trousers in Slim Fit.", color: "black", collection: "dark", categoryId: 1, category: "Pants", price: 200000, image: 'https://i.pinimg.com/564x/88/dc/5a/88dc5a987913a12049e5d50c3e0d3a1c.jpg', inStock: false, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
  //   { id: 7, title: "Jumpsuit", description: "The ultimate statement alternative to a maxi dress, the One Shoulder Cape Sleeve Jumpsuit is all you need to master the glam dress code this season. Make sure you’re the best-dressed guest for a stylish wedding, races or VIP party in our dramatic Cape Sleeve Jumpsuit worked in a classic black and cinched at the waist to flatter your curves. Where to WearThis jumpsuit is perfect for nights out, graduation, or special occasions. Style With Elongate your legs by wearing this wide-leg jumpsuit with a killer heel and a chic low pony for maximum impact. Underwear SolutionsNude Lace Be Honest Bra.Product DetailsStretch Jersey (95% Polyester 5% Elastane)Stretch Factor: Stretchy Model is 5’8 ", color: "black", collection: "dark", categoryId: 6, category: "Jumpsuits", price: 300000, image: 'https://i.pinimg.com/564x/2b/ec/89/2bec89c1e051e2fcd4b9c740c1b28a0f.jpg', inStock: true, S: 4, M: 1, L: 2, XL: 3, XXL: 1 },
  //   { id: 8, title: "Unisex Programmer Shirt", description: "Funny Programmer Shirt, Unisex Heavy Cotton Tee, Programmers Problem T-Shirt, Programmer Gift Idea, Programming Shirt, Computer Shirt", color: "black", collection: "dark", categoryId: 2, category: "Shirts", price: 110000, image: 'https://i.etsystatic.com/23281173/r/il/3fe1f7/2750774460/il_794xN.2750774460_9oyc.jpg', inStock: true, S: 4, M: 1, L: 2, XL: 3, XXL: 1 },
  //   { id: 9, title: "Debugging Definition T-Shirt", description: "Debugging Definition: Being a detective in a crime movie where you are also the murderer.This eco-friendly shirt is a great gift idea for every developer, programmer, software engineer, and coding maniac out there. This t-shirt is everything you've dreamed of and more. It feels soft and lightweight, with the right amount of stretch. Its comfortable and flattering for both men and women. Its sure to be your next favorite shirt!", color: "black", collection: "dark", categoryId: 2, category: "Shirts", price: 110000, image: 'https://i.etsystatic.com/26054897/r/il/5fbe5c/2706441580/il_794xN.2706441580_1l1s.jpg', inStock: true, S: 4, M: 1, L: 2, XL: 3, XXL: 1 },
  //   { id: 10, title: "Lilac - Modest Dress", description: "40% Polyester, 60% CottonThere is approximately 4 cm difference between sizes", color: "lilac", collection: "light", categoryId: 3, category: "Dresses", price: 110000, image: 'https://www.gizce.com/image/cache/catalog/products_2021/BS7T5698-800x1200.jpg', inStock: true, S: 4, M: 1, L: 2, XL: 3, XXL: 1 },

  // ]);


  return (
    <div className="App" style={{ width: '100%' }}>
      <Switch>
        <Route path="/Customer/">
          <Customer user={user} setUser={setUser}/>
        </Route>

        {/* Admin */}
        <Route path="/Admin/">
          <Admin
            admin={admin} setAdmin={setAdmin}
            //  Products={Products} 
             />
        </Route>
        <Route path={["/AdminLogin"]} component={SignInSideAdmin} />

      </Switch>
      <footer
        style={{ background: '#1E1D1D', marginTop: '1%', padding: '1%', color: '#FFFFFF' }}
        className="footer"
      >@2021 by Yuga</footer>
    </div>
  );
}

export default App;
