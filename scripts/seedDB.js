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

//====================================
//ABANDON ALL HOPE, YE WHO ENTER HERE
//====================================


db.Deck
  .remove({})
  .then(() => db.Deck.collection.insertOne(deckSeed[0]))
  .then(data => {
    console.log(".then for db.deck.collection.insertone() executing");

    for (var i = 0; i < cardSeed.length; i++) {

      let tempCard = new db.Card(cardSeed[i])
      
      tempCard.save(function(err, doc){
        console.log("tempcard.save() callback executing");

        if (err) {
          console.log(err);

        } else {

          db.Deck.findOneAndUpdate({"deckName":doc.fromDeck}, {$push:{"allCards":doc._id}}, {new: true}, function(err,doc){

            if (err) {

              console.log(err);
            } else {

              console.log("line 64", doc);
            }
          })
        
        };
      
      })

    };

    //console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
