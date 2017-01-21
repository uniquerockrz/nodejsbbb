var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
	name: {
		type: 'String'
	}
});

module.exports = mongoose.model('users', usersSchema);