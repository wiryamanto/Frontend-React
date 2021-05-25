import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./pages/Home";
import detail from './pages/FoodDescription'
// import Lifecomps from "./pages/Lifecomps";
function App() {
  return (
   <BrowserRouter>
    <Route path ="/" exact component = {Home} />
    <Route path ="/details/:id" exact component={detail}/>
   </BrowserRouter>
    );
}

export default App;
