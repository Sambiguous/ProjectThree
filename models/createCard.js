// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var CardSchema = new Schema({
  fieldInfo: [] 
});

// Create the Article model with the ArticleSchema
var Card = mongoose.model("Card", CardSchema);

// Export the model
module.exports = Card;
