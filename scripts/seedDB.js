const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/onDeck_DB");

const userSeed = [
  {
    username: 'devman1',
    password: '12345',
  }
]

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

  //then delete the User collection
  .then(db.User.remove({})

  //then insert the seed user
  .then(() => db.User.collection.insertOne(userSeed[0]))

  //then insert the seed deck
  .then(userData => db.Deck.collection.insertOne(deckSeed[0])

  //then...
  .then(deckData => {

    //update the seed user so that the inserted deck belongs to him
    db.User.findOneAndUpdate({_id: userData.insertedId}, {$set:{createdDecks: [deckData.insertedId]} }, {new: true}, function(err, doc){
      if(err) throw err

      console.log(doc)
    })

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
      db.Deck.findOneAndUpdate({deckName: deckData.ops[0].deckName}, {$set:{ allCards: ids }}, {new: true}, function(err, doc){

        if (err) {
          console.log(err);
          process.exit(0);
        } else {
          
          process.exit(0);
        };
      });
    });
  }))));