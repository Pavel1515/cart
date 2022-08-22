import React from "react";
import Cart from "./components/Cart";
import {Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";

const App = () => {

  return (
      <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
          <Route path={'/contact'} element={<Contact/>}/>
          <Route path={'/revies'} element={<Reviews/>}/>
       </Routes>
      )


};

export default App;
