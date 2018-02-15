const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/onDeck_DB",
  {
    useMongoClient: true
  }
);

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
  .remove({})
  .then(() => db.Deck.collection.insertMany(deckSeed))
  .then(data => {

    for (var i = 0; i < cardSeed.length; i++) {
      tempCard = new db.Card (cardSeed[i])
      
      tempCard.save(function(err, doc) {
        if (err) {
          console.log(err);
        } else {
          // db.Deck.findOneAndUpdate({"deckName":doc.fromDeck}, {$push:{"allCards":doc._id}}, {new: true}, function(err,doc) {
          //   if (err) {
          //     console.log(err);
          //   } else {
          //     console.log(doc);
          //   }
          // })
          console.log(tempCard);
        };
      })
    };

    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
