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
//   {
//     deckName: "Classic Deck",
//     numCards: 52,
//     numFields: 2,
//     createdBy: "onDeck",
//     handSize: 5,
//     allCards: []
//   }
 ];

const cardSeed = [
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["A", "Spades"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["2", "Spades"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["3", "Spades"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["4", "Spades"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["5", "Spades"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["6", "Spades"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["7", "Spades"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["8", "Spades"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["9", "Spades"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["10", "Spades"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["J", "Spades"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["Q", "Spades"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["K", "Spades"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["A", "Hearts"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["2", "Hearts"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["3", "Hearts"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["4", "Hearts"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["5", "Hearts"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["6", "Hearts"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["7", "Hearts"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["8", "Hearts"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["9", "Hearts"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["10", "Hearts"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["J", "Hearts"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["Q", "Hearts"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["K", "Hearts"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["A", "Clubs"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["2", "Clubs"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["3", "Clubs"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["4", "Clubs"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["5", "Clubs"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["6", "Clubs"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["7", "Clubs"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["8", "Clubs"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["9", "Clubs"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["10", "Clubs"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["J", "Clubs"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["Q", "Clubs"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["K", "Clubs"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["A", "Diamonds"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["2", "Diamonds"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["3", "Diamonds"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["4", "Diamonds"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["5", "Diamonds"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["6", "Diamonds"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["7", "Diamonds"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["8", "Diamonds"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["9", "Diamonds"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["10", "Diamonds"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["J", "Diamonds"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["Q", "Diamonds"]
//   },
//   {
//     fromDeck: "Classic Deck",
//     fieldInfo: ["K", "Diamonds"]
//   },
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