// load mongoose since we need it to define a model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
userSchema = new Schema({
    name : String,
    salary : Number,
	age : Number
});
module.exports = mongoose.model('User', userSchema);

