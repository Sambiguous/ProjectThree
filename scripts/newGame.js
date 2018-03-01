const firebase = require('../firebase');

const newGame = {
  maxPlayers: 1000,
  players: ["SamBiguous", "FloridaMan", "NutBar", "Normie"],
  allCards: [
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
  ],
  cardPile: [
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
  ],
  hands: {
    SamBiguous: ["cards"],
    FloridaMan: ["cards"],
    Normie: ["cards"],
    NutBar: ["cards"]
  }
}

firebase.firebase.database().ref().child('games').child("12345").set(newGame)