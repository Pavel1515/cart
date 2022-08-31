import Cart from "./components/pages/Cart";
import {Route,Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Reviews from "./components/pages/Reviews";
import Naw from "./components/pages/Naw";

const App = () => {

  return (
      <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
          <Route path={'/contact'} element={<Contact/>}/>
          <Route path={'/revies'} element={<Reviews/>}/>
          <Route path={'/naw'} element={<Naw/>}/>
       </Routes>
      )


};

export default App;
