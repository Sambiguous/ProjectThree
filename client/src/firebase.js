import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDPwMmbvrCll1xgRRMjMAUFgwUA6_b_c14",
    authDomain: "on-deck-1595d.firebaseapp.com",
    databaseURL: "https://on-deck-1595d.firebaseio.com",
    storageBucket: "on-deck-1595d.appspot.com",
};

firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(user => {
    if(user){
        console.log("logged in successfully");
        console.log(user);

        let id = user.uid;
        let email = user.email;

        let userRef = firebase.database().ref().child('loggedIn').child(id)
        userRef.onDisconnect().remove()
        userRef.set(email, e =>{ 
            if(e){
                console.log(e)
            } else{
                //firebase.database().ref().child('loggedIn').once('value', snap => console.log(snap.val()))
            }
            
        });
    } else{
        
        console.log("user is not logged in");
    };
});

export default firebase;