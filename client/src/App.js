import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import Saved from "./components/pages/Saved";


const App = () =>
  <Router>
  	<div>
  		<Nav/>
  		<Route exact path="/search" component={Home}/>
  		<Route exact path="/saved" component={Saved}/>
  	</div>
  </Router>;

export default App;
