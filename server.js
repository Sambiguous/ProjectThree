//Dependencies
var express        = require('express');
var bodyParser     = require("body-parser");
var mongoose       = require('mongoose');
var routes         = require("./routes/index.js");
var methodOverride = require("method-override");


var PORT = process.env.PORT || 3005;

//===============================================
//Initialize Express and set up middleware 
//===============================================
var app  = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(routes);

//===============================================
//Initialize mongoDB connection using mongoose
//===============================================

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/headlines";

//Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

//connect to database
mongoose.connect(MONGODB_URI);

//define mongo connection behavior
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Successfully connected to database");

    //if successfully connected to mongo, start server
    app.listen(PORT, function(){
        console.log("app listening on port", PORT);
    });
});

// Routes
// ======

// This POST route handles the creation of a new Card in our mongodb cards collection
app.post("/submitDeck", function(req, res) {

    var newDeck = new Deck(req.body);
  
  // Save the new Deck of Cards
    newDeck.save(function(err, doc) {
      // Send an error to the browser if there's something wrong
      if (err) {
        res.send(err);
      }
      // Otherwise...
      else {
        //create a new tableDB in the firebase here
      }
    });
  });
  
// This POST route handles the creation of a new Card in our mongodb cards collection
app.post("/submitCard", function(req, res) {

    // NEED TO DO
    // #1 find what deck to utilize... maybe the last one entered into FireBase
    // #2 loop through # cards in deck
    // #3 loop through # fields on each card, entering the information as it goes
    // #4 future nifty: make this live with React

    var newCard = new Card(req.body);
  
    // Save the new card to the deck
    newCard.save(function(err, doc) {
      // Send an error to the browser if there's something wrong
      if (err) {
        res.send(err);
      }
      // Otherwise...
      else {

  
      // ALSO: We need "{new: true}" in our call,
      // or else our query will return the object as it was before it was updated
        Deck.findOneAndUpdate({}, { $push: { "cards": doc._id } }, { new: true }, function(error, doc) {
          // Send any errors to the browser
          if (error) {
            res.send(error);
          }
          // Or send the doc to the browser
          else {
            res.send(doc);
          }
        });
      }
    });
  });


