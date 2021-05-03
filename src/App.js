import React from "react";
import Home from './Home'
import Profile from "./Profile"
import {BrowserRouter, Route} from 'react-router-dom'
function App() {
  return (
   <BrowserRouter>
    <Route path ="/" exact component = {Home} />
    <Route path="/profile" component = {Profile} />
   </BrowserRouter>
    );
}

export default App;
