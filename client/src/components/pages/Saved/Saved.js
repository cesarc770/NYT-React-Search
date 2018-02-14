import React, { Component } from "react";
import SavedContainer from "../../SavedContainer";
import API from "../../../utils/API";


class Saved extends Component {
	state = {
    results: []
  };

  componentDidMount(){
  	this.getArticles();
  };

  getArticles = () => {
  	API.getArticles()
  		.then(res =>
  			this.setState({ results: res.data })
  		)
  		.catch(err => console.log(err));
  };

  deleteArticle = id => {
  	API.deleteArticle(id)
  		.then(res => this.getArticles())
  		.catch(err => console.log(err));
  };

	render() {
		return (
			<div className="container">
				<SavedContainer
					results = {this.state.results}
					deleteArticle = {this.deleteArticle}
				/>				
			</div>
			);
	}
}

export default Saved;