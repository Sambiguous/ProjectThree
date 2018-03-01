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
    const deck = new db.Deck(req.body)
    db.Deck.collection.insertOne(deck, (err, docs) => {
        if(err) throw err

        console.log("this is the deck info:" + docs.ops);
        res.send('deck inserted');
    })

})

router.post('/deckpull', function(req, res){

    // db.Deck.collection.findOne({link: req.body.link}).populate('').exec(function(error, doc) {
    //   if (error) {
    //     res.send(error);
    //   }
    //   else {
    //     res.send(doc);
    //     console.log(doc);
    //   }
    // });
})

module.exports = router