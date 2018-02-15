import React from "react";
import "./Landing.css";

const Landing = () =>
	<div className="text-center" id="container">
		<div style={{paddingTop: 100}}>
			<h1 id="landingTitle">NYT Scrubber</h1>
		<a style={{marginTop: 50}} className="btn btn-info" href="/search">START SEARCHING!</a>
		</div>
		
	</div>
  ;

export default Landing;