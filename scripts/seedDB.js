const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/onDeck_DB");

const deckSeed = [
  {
    deckName: "USSR jest",
    numCards: "6",
    numFields: "1",
    allCards: []
  }
];

const cardSeed = [
  {
    fromDeck: "USSR jest",
    fieldInfo: ["Loaded barrel"]
  },
  {
    fromDeck: "USSR jest",
    fieldInfo: ["Loaded barrel"]
  },
  {
    fromDeck: "USSR jest",
    fieldInfo: ["Loaded barrel"]
  },
  {
    fromDeck: "USSR jest",
    fieldInfo: ["Loaded barrel"]
  },
  {
    fromDeck: "USSR jest",
    fieldInfo: ["Loaded barrel"]
  },
  {
    fromDeck: "USSR jest",
    fieldInfo: ["NOT loaded barrel"]
  }
];

db.Deck

  //delete deck collection
  .remove({})

  //then delete cards collection
  .then(db.Card.remove({})

  //then insert the seed deck
  .then(() => db.Deck.collection.insertOne(deckSeed[0])

  //then...
  .then(data => {

    let cards = [];

    //fill cards array with instances of db.Card based on the info in cardSeed
    //(theres is probably a better way to go about this)
    for(card in cardSeed){
      cards.push(new db.Card(cardSeed[card]))
    };
    
    //insert all the cards into the cards collection
    db.Card.insertMany(cards, function(err, insertedDocs){

      if(err) throw err;

      //create array of ids of inserted cards
      const ids = insertedDocs.map(element => element._id)
      
      //find the deck that the cards belong to and set the deck's allCards property to the ids array
      db.Deck.findOneAndUpdate({deckName: data.ops[0].deckName}, {$set:{ allCards: ids }}, {new: true}, function(err, doc){

        if (err) {
          console.log(err);
          process.exit(0);
        } else {
          
          process.exit(0);
        };
      });
    });
  })));