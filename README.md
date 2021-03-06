# E-commerce React Template 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) on a [VS code editor](https://code.visualstudio.com/download).

In this project you will get a starting point and a stepping stone towards creating an e-commerce project with the help of ReactJS library.
For starting lets clone the project and have it in our local machine . I am on Windows 10 and using VScode as editor but even on Mac or linux distro,
you don't have to worry it will work perfectly so let's go :rocket:.

### Start React project 
In VS code Press ``ctrl + J`` to get the terminal then create a folder where our project is going to sit on by ``mkdir name of folder`` then  we navigate to the path of our project folder is located by ``cd Path of folder``,
after we alive at the directory of our project you write ``npx create-react-app`` to create a new react project that we will work on,if you see the **Happy hacking** in the 
end of installation then your good to go . Now to see where we are we write ``npm start`` and the react starter page will start on the browser,now the work starts.

## Project file management
For ease of understanding we remove some files which are not needed now, which luckly they are all in ``src/``directory.
- App.Test.js
- setupTest.js
- logo.svg

It will bring an error since in the App.js there is **import** of logo.svg we remove that ,
Now direct to the App.js everything that is between ``<div className="App"></div>`` should be discarded and we should have a blank page that means we are good to go.

In src/ we will create basically six component that will serve us with home page and checkout page
- Header.js : For our header.
- Home.js : For our home page.
- Product.js : For the product display.
- Cart.js : For Basket items.
- Checkout.js : For checkout page.
- Subtotal.js : For total amount  of product.

 ### App.js
 We start with the core of the app where our components will be united to make a meaningfull web app .

``import Header from "./Header.js";``

   ``import Home from "./Home.js";``
   
  `` import { BrowserRouter as Router, Switch, Route }``
   
  `` from "react-router-dom";``
   
 `` import Checkout from "./Checkout";``
  
  The above peace of code is the one that is responsible for importing the header, homepage and checkout page components as well as react router
  which will help us with the routing of links and the navigation bar as well.But this won't work until you ``npm install react-router-dom`` make sure it is done on the project directory. 
  
 ``function App() {``
 
 `` return (``
 
   `` <Router>``
   
      <div className="App">
        <Header />
        <Switch>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </div>
    </Router>

Notice the wrapping of all app class in a router tag which will act like a guider to the inner route tags of the specific links.
The header is outside switch tag so as to be renderend no matter what router is called .
So as to say switch tag takes the burden of switching the route at your command but always remember ***Important*** the path="/"
always stay at the bottom route must so if any root fails there will be redirecting to root page.

### Header.js

``import React from "react";``

``import "./Header.css";``

``import SearchIcon from "@material-ui/icons/Search";``

``import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";``

``import MenuIcon from "@material-ui/icons/Menu";``

``import { Link } from "react-router-dom";``

The above lines dictate that we create a css file that will style the header component as every component to look good it need styling :wink:
and it is linked to the component.
And then there are those three icons search, basket and menu which we leverage from [Material-ui](https://material-ui.com/components/material-icons/), 
with the link importation from react router so we can create link.

``<div className="header">``

      ``<MenuIcon className="menu" />``
      
     `` <Link to="/">
        <img className="logo" src="https://www.jd-pharmacy.com/img/logo.png" />``

      </Link>

      <div className="search">
        <input
          className="search_input"
          type="text"
          placeholder="Search medicine here..."
        />
        <SearchIcon className="search_icon" />
      </div>


This snippet shows the linking of logo to the home route and some of the arrrangement of the header by the help of flex box from the css below

``.header {
  height: 60px;
  display: flex;
  align-items: center;
  background-color: cornflowerblue;
  position: sticky;
  top: 0;
  z-index: 100;
}
``

### Home.js

``import "./Home.css";``

``import Product from "./Product.js";``
 In Home component the important import is the css file and the product component since this is an e-commerce pretty much the products,
  should be displayed on the home page .
  
 `` <img
          className="banner"
          src="https://www.adroitinfosystems.com/images/siteimages/pages/finalImgforpages/epharmacy1.jpg"
          alt=" "
        />
        <div className="row">
          <Product
            id={1}
            title="Aspirin"
            price={19.99}
            image="https://i5.walmartimages.ca/images/Enlarge/432/325/6000198432325.jpg"
            rating={4}
          />``
          
 The above code tells that home page have a banner and rows of product which thanks to flex box they stay pretty much good though i really advice you should
 know your way around css but nevertheless is the sample css of this home page.
 
``.home {
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
}
``


### Product.js

``function Product({ id, title, image, price, rating })``

Well the function for product is a little different we pass some parameters so just to avoid every time tampering with the 
product component and just pass the data from the home component as you had observed.

``<div className="product">
      <div className="info">
        <p><strong>{title}</strong></p>
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>``
   
   Basically, all the place with the {parameter}  is the place where the data passed by  the function is going to stay.
   the ``.map((_, i) => ( <p>⭐</p>`` is the place that deals with the ratings of the product.
   
   
  
