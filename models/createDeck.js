// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var DeckSchema = new Schema({

  deckName: { // unique identifier for the deck of cards
    type: String,
    required: true,
    unique: true
  },
  numCards: { // how many cards are in the deck
    type: Number,  
    required: true 
  },
  numFields: { // how many information fields will be on each card
    type: Number,
    required: true 
  },
  cardInfo: []

});

// Create the Article model with the ArticleSchema
var Deck = mongoose.model("Deck", DeckSchema);

// Export the model
module.exports = Deck;
