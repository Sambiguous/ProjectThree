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
    deckName: "Classic Deck",
    numCards: 52,
    numFields: 2,
    createdBy: "onDeck",
    handSize: 5,
    allCards: []
  }
];

const cardSeed = [
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["A", "Spades"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["1", "Spades"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["2", "Spades"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["3", "Spades"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["4", "Spades"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["5", "Spades"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["6", "Spades"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["7", "Spades"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["8", "Spades"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["9", "Spades"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["10", "Spades"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["J", "Spades"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["Q", "Spades"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["K", "Spades"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["A", "Hearts"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["1", "Hearts"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["2", "Hearts"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["3", "Hearts"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["4", "Hearts"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["5", "Hearts"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["6", "Hearts"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["7", "Hearts"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["8", "Hearts"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["9", "Hearts"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["10", "Hearts"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["J", "Hearts"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["Q", "Hearts"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["K", "Hearts"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["A", "Clubs"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["1", "Clubs"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["2", "Clubs"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["3", "Clubs"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["4", "Clubs"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["5", "Clubs"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["6", "Clubs"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["7", "Clubs"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["8", "Clubs"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["9", "Clubs"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["10", "Clubs"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["J", "Clubs"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["Q", "Clubs"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["K", "Clubs"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["A", "Diamonds"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["1", "Diamonds"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["2", "Diamonds"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["3", "Diamonds"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["4", "Diamonds"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["5", "Diamonds"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["6", "Diamonds"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["7", "Diamonds"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["8", "Diamonds"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["9", "Diamonds"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["10", "Diamonds"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["J", "Diamonds"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["Q", "Diamonds"]
  },
  {
    fromDeck: "Classic Deck",
    fieldInfo: ["K", "Diamonds"]
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