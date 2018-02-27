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
    console.log("test route hit")
    
    db.Deck.find({}).exec(function(err, docs){
        if(err) throw err
        console.log(docs);
        
        const deckNames = docs.map(deck => deck.deckName);

        res.json(deckNames);
    });
});

router.get("/creategame", function(req, res){
    const code = firebase.generateGameCode()
    res.send(code);
})

module.exports = router