var express = require('express');

var mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost:27017/nodejsbb');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  	console.log('db connected');
});

Users = require('./models/Users.js');

app.get('/', (req, res) => {
	var user = new Users();
	user.name = 'Saurav';
	user.save((err, u ) => {
		console.log(err);
		if(err){
			console.log(err);
		}
		else{
			console.log(u);
			res.send('Hello');
		}
	});
});
 
app.listen(3000, () => {
	console.log('App is running!');
});