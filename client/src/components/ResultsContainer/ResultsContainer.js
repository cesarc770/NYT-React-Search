import React from "react";


const ResultsContainer = (props) => 
  	<div className="card bg-info" style={{marginTop: 15, marginBottom: 15}}>
	  <div className="card-header text-center">
	  <h1>RESULTS</h1>
	  </div>
	  <div className="card-body bg-light">
	  {props.results.length ? (
	  	<div>
		{props.results.map(result =>
			<div className="card bg-info" key={result.web_url} style={{marginTop: 20}} >
				<div className="card-header">
					<div className="row">
					<div className="col-sm-9">
						{result.headline.main}
					</div>
					<div className="col-sm-3">
						<button className="btn btn-success" onClick={()=> props.saveArticle({
							title:result.headline.main,
							date: Date(Date.now()).toString(),
							url: result.web_url
						})}>Save</button>
					</div>
					</div>
				</div>
				<div className="card-body bg-light">
					<p>Publication Date : {result.pub_date.slice(0, 10)}</p>
					<p>{result.snippet}</p>
					<p><a href={result.web_url} target="_blank" className="btn btn-primary">ARTICLE</a></p>
				</div>
			</div>
		
			)}
			</div>
			) : (
			<div className="card bg-danger" style={{opacity: 0.8}}>
				<h3 className="text-center">No Results to Display</h3>
			</div>
			)}
		</div>
	</div>;

export default ResultsContainer;