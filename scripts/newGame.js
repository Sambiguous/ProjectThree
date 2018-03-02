const firebase = require('../firebase');
const gameCode = require('../credentials.json').gameCode;

console.log(gameCode);

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

const allCards = [
  {
    fieldInfo0: "Bang",
    fromDeck: "USSR jest"
  },
  {
    fieldInfo0: "Blank",
    fromDeck: "USSR jest"
  },
  {
    fieldInfo0: "Blank",
    fromDeck: "USSR jest"
  },
  {
    fieldInfo0: "Blank",
    fromDeck: "USSR jest"
  },
  {
    fieldInfo0: "Blank",
    fromDeck: "USSR jest"
  },
  {
    fieldInfo0: "Blank",
    fromDeck: "USSR jest"
  }
]

//build object that will be the base state of the game
const newGame = {
  maxPlayers: 1000,
  players: ["SamBiguous", "FloridaMan", "NutBar", "Normie"],
  allCards: allCards,
  cardPile: shuffle(allCards),
  hands: {
    SamBiguous: ["cards"],
    FloridaMan: ["cards"],
    Normie: ["cards"],
    NutBar: ["cards"]
  }
}

//send object to firebase
firebase.firebase.database().ref().child('games').child(gameCode).set(newGame).then(() => {
  process.exit(0);
})