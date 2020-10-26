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




  
