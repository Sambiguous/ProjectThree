// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true,
    }, 
    createdDecks: [{
        type: Schema.Types.ObjectId, 
        ref: 'Deck'
    }]
});


var User = mongoose.model("User", UserSchema);

module.exports = User;