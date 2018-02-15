import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Saved from "./components/pages/Saved";
import Landing from "./components/pages/Landing";

const App = () =>
  <Router>
  	<div>
  		<Nav/>
  		<Route exact path="/" component={Landing}/>
  		<Route exact path="/search" component={Home}/>
  		<Route exact path="/saved" component={Saved}/>
  		<Footer/>
  	</div>
  </Router>;

export default App;
