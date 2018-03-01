// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema This will need to change
var CardSchema = new Schema({
  fromDeck: {
    type: String,
    required: true,
  },
  fieldInfo0: {
    type: String,
    default: null
  },
  fieldInfo1: {
    type: String,
    default: null
  },
  fieldInfo2: {
    type: String,
    default: null
  },
  fieldInfo3: {
    type: String,
    default: null
  },
  fieldInfo4: {
    type: String,
    default: null
  },
  fieldInfo5: {
    type: String,
    default: null
  }
});

// Create the Article model with the ArticleSchema
var Card = mongoose.model("Card", CardSchema);

// Export the model
module.exports = Card;
