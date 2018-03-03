const router = require("express").Router();
const db = require("../../models")
const firebase = require("../../firebase");

function shuffle(originalArray) {
    var array = [].concat(originalArray);
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

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
              res.send("deck entered")
            };
          });
        });
    });
});

router.post('/deckpull', function(req, res){
    db.Deck.findOne({deckName: req.body.name}).populate('allCards').exec(function(err, doc) {
        if (err) throw err
        res.send(doc);

    });
})

router.post('/deckpullnewgame', function(req, res){
    // console.log("req.body"+req.body.gameName);
    db.Deck.findOne({deckName: req.body.gameName}).populate('allCards').exec(function(err, doc) {
        if (err) throw err
        // res.send(doc);
        console.log("pull new game deck information:", doc);

        //Check each card to see if null
        checkNull(doc); 

        // //build object that will be the base state of the game
        // const newGame = {
        //     maxPlayers: rec.body.gameNumPlayers,
        //     GM: rec.body.gameAdmin,
        //     players: [rec.body.gameAdmin],
        //     //allCards: allCards, //need to build this with no null fields
        //     discardPile: ["cards"],
        //     //cardPile: ["cards"].concat(shuffle(allCards)),
        //     hands: {}
        // }

        // newGame.hands[rec.body.gameAdmin] = ['cards']
        
        // console.log("new game: "+newGame);
    });
})

function checkNull (data) {
    // // console.log("Check Null Data: " + data);
    // console.log("data dot allcards: " + data.allCards);

    for (i in data.allCards) {
        console.log("check null: card#"+i);
    }
}

module.exports = router