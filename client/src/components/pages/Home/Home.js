import React, { Component } from "react";
import SearchContainer from "../../SearchContainer";
import ResultsContainer from "../../ResultsContainer";
import API from "../../../utils/API";

class Home extends Component {
	state = {
    topic: "",
    beginDate: "",
    endDate: "",
    results: []
  };

  componentDidMount() {
  	// this.searchArticles("soccer", "20171001", "20180202");
  }

  searchArticles = (query, beginDate, endDate) => {
  	API.search(query, beginDate, endDate)
  	.then(res => this.setState({ results: res.data.response.docs}))
  	.catch(err => console.log(err));

  };

  saveArticle = articleData => {
  	API.saveArticle(articleData)
  	.then(res => alert("Article Saved"))
  	.catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    var beginDate = (this.state.beginDate).replace(/-/g, "");
    var endDate = (this.state.endDate).replace(/-/g, "");
    if(this.state.topic !== "" && this.state.beginDate !=="" && this.state.endDate !== ""){
    this.searchArticles(this.state.topic, beginDate, endDate)
}else{
	alert("Fill all the required fields");
}
  };

	render() {
		return (
			<div className="container">
				<SearchContainer
					topic={this.state.topic}
					beginDate={this.state.beginDate}
					endDate={this.state.endDate}
					handleFormSubmit={this.handleFormSubmit}
					handleInputChange={this.handleInputChange}
				/>
				<ResultsContainer 
				results={this.state.results}
				saveArticle ={this.saveArticle}
				/>
			</div>
			);
	}
}

export default Home;