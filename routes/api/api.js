const router = require("express").Router();
const db = require("../../models")
const firebase = require("../../firebase");


router.get("/", function(req, res){
    console.log(req.body);
    res.send("test route worked")
});

router.post("/", function(req, res){
    console.log(req.body);
    res.send("test route worked")
});

router.get("/decks", function(req, res){
    
    db.Deck.find({}).exec(function(err, docs){
        if(err) throw err
        
        const deckNames = docs.map(deck => deck.deckName);

        res.json(deckNames);
    });
});

router.get("/creategame", function(req, res){
    const code = firebase.generateGameCode()
    res.send(code);
})

router.post("/deckcreate", function(req, res) {
    console.log(req.body);
    const deck = new db.Deck(req.body.deckInfo)
    db.Deck.collection.insertOne(deck, (err, docs) => {
        if(err) throw err
        console.log(docs.ops);

        //building the cards out
        let cards = req.body.cards.map(card => new db.Card(card));
    
        //insert all the cards into the cards collection
        db.Card.insertMany(cards, function(err, insertedDocs){
          if(err) throw err;
            let name = req.body.deckInfo.deckName
            
            let ids = insertedDocs.map(card => card._id)

            db.Deck.findOneAndUpdate({deckName: name}, {$set:{ allCards: ids}}, {new: true}, function(err, doc){
    
              if (err) {
                console.log(err);    
              } else {                
                console.log("deck complete");
              };
            });
        })
    })
})

router.post('/deckpull', function(req, res){

    db.Deck.collection.findOne({deckName: req.body.id}).populate('decks').exec(function(error, doc) {
      if (error) {
        res.send(error);
      }
      else {
        res.send(doc);
        console.log(doc);
      }
    });
})

module.exports = router