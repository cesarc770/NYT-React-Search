const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const routes = require("./routes");
require('./models');

// Set up promises with mongoose
mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI);


const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(routes);

if (process.env.NODE_ENV === 'production'){
	// Express will serve up production assets
	app.use(express.static('client/build'));

	//Express will serve up the index.html file
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);



