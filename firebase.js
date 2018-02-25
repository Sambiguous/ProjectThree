//================================================
//THIS IS THE API SERVER FIREBASE CONNECTION FILE
//================================================
var firebase = require('firebase')
var credentials = require("./credentials.json");

var config = {
    apiKey: "AIzaSyDPwMmbvrCll1xgRRMjMAUFgwUA6_b_c14",
    authDomain: "on-deck-1595d.firebaseapp.com",
    databaseURL: "https://on-deck-1595d.firebaseio.com",
    storageBucket: "on-deck-1595d.appspot.com",
};

let activeGameCodes = [];

firebase.initializeApp(config);

firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
.catch(e => {
    console.log(e);
})
.then((user, failure) =>{
    if(user){
        firebase.database().ref().child('games').on('child_added', snap => {
            activeGameCodes.push(snap.key);
            console.log(activeGameCodes);
        })

        firebase.database().ref().child('games').on('child_removed', snap => {
            let code = snap.key;
            let index = activeGameCodes.indexOf(code)

            activeGameCodes.splice(index, 1);

            console.log(activeGameCodes);
        })
    }
    if(failure){
        console.log("failure:", failure)
    }
})