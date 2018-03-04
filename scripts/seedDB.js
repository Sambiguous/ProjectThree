const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/onDeck_DB");

const userSeed = [
  {
    username: 'OnDeck',
    password: '12345',
    createdDecks: []
  }
]

const deckSeed = [
  {
    deckName: "USSR jest",
    numCards: 6,
    numFields: 1,
    createBy: "onDeck",
    handSize: 1,
    allCards: []
  },
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
    "fieldInfo0": "A",
    "fieldInfo1": "Spades",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "2",
    "fieldInfo1": "Spades",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "3",
    "fieldInfo1": "Spades",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "4",
    "fieldInfo1": "Spades",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "5",
    "fieldInfo1": "Spades",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "6",
    "fieldInfo1": "Spades",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "7",
    "fieldInfo1": "Spades",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "8",
    "fieldInfo1": "Spades",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "9",
    "fieldInfo1": "Spades",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "10",
    "fieldInfo1": "Spades",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "J",
    "fieldInfo1": "Spades",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "Q",
    "fieldInfo1": "Spades",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "K",
    "fieldInfo1": "Spades",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "A",
    "fieldInfo1": "Hearts",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "2",
    "fieldInfo1": "Hearts",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "3",
    "fieldInfo1": "Hearts",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "4",
    "fieldInfo1": "Hearts",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "5",
    "fieldInfo1": "Hearts",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "6",
    "fieldInfo1": "Hearts",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "7",
    "fieldInfo1": "Hearts",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "8",
    "fieldInfo1": "Hearts",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "9",
    "fieldInfo1": "Hearts",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "10",
    "fieldInfo1": "Hearts",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "J",
    "fieldInfo1": "Hearts",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "Q",
    "fieldInfo1": "Hearts",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "K",
    "fieldInfo1": "Hearts",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "A",
    "fieldInfo1": "Clubs",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "2",
    "fieldInfo1": "Clubs",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "3",
    "fieldInfo1": "Clubs",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "4",
    "fieldInfo1": "Clubs",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "5",
    "fieldInfo1": "Clubs",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "6",
    "fieldInfo1": "Clubs",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "7",
    "fieldInfo1": "Clubs",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "8",
    "fieldInfo1": "Clubs",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "9",
    "fieldInfo1": "Clubs",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "10",
    "fieldInfo1": "Clubs",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "J",
    "fieldInfo1": "Clubs",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "Q",
    "fieldInfo1": "Clubs",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "K",
    "fieldInfo1": "Clubs",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "A",
    "fieldInfo1": "Diamonds",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "2",
    "fieldInfo1": "Diamonds",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "3",
    "fieldInfo1": "Diamonds",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "4",
    "fieldInfo1": "Diamonds",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "5",
    "fieldInfo1": "Diamonds",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "6",
    "fieldInfo1": "Diamonds",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "7",
    "fieldInfo1": "Diamonds",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "8",
    "fieldInfo1": "Diamonds",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "9",
    "fieldInfo1": "Diamonds",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "10",
    "fieldInfo1": "Diamonds",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "J",
    "fieldInfo1": "Diamonds",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "Q",
    "fieldInfo1": "Diamonds",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "Classic Deck",
    "fieldInfo0": "K",
    "fieldInfo1": "Diamonds",
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "USSR jest",
    "fieldInfo0": "Loaded barrel",
    "fieldInfo1": null,
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "USSR jest",
    "fieldInfo0": "Loaded barrel",
    "fieldInfo1": null,
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "USSR jest",
    "fieldInfo0": "Loaded barrel",
    "fieldInfo1": null,
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "USSR jest",
    "fieldInfo0": "Loaded barrel",
    "fieldInfo1": null,
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "USSR jest",
    "fieldInfo0": "Loaded barrel",
    "fieldInfo1": null,
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
  },
  {
    fromDeck: "USSR jest",
    "fieldInfo0": "NOT Loaded barrel",
    "fieldInfo1": null,
    "fieldInfo2": null,
    "fieldInfo3": null,
    "fieldInfo4": null,
    "fieldInfo5": null
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
  .then(userData => db.Deck.collection.insertMany(deckSeed)

  //then...
  .then(deckData => {

    //create array of ids of inserted decks
    let deckIds = Object.keys(deckData.insertedIds).map(key => deckData.insertedIds[key])

    //update the seed user so that the inserted deck belongs to him
    db.User.findOneAndUpdate({_id: userData.insertedId}, {$set:{createdDecks: deckIds} }, {new: true}, function(err, doc){
      if(err) throw err
    });

    //fill cards array with instances of db.Card based on the info in cardSeed
    let cards = cardSeed.map(card => new db.Card(card));
    
    //insert all the cards into the cards collection
    db.Card.insertMany(cards, function(err, insertedDocs){
      console.log(deckData);
      if(err) throw err;
     
      //seperate _ids of cards into arrays based on the fromDeck property and put them in an object
      let ids = {
        "Classic Deck": insertedDocs.filter(element => element.fromDeck === "Classic Deck").map(element => element._id),
        "USSR jest": insertedDocs.filter(element => element.fromDeck === "USSR jest").map(element => element._id)
      }

      //find the deck that the cards belong to and set the deck's allCards property to the ids array
      for(var i=0; i < deckData.ops.length; i++){
        let name = deckData.ops[i].deckName

        db.Deck.findOneAndUpdate({deckName: name}, {$set:{ allCards: ids[name] }}, {new: true}, function(err, doc){

          if (err) {
            console.log(err);

          } else {
            
            console.log("all good yo");
          };
        });
      }
    });
  })
)));