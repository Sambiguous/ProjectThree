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
        
        console.log("logged in");
        let id = user.uid;
        let email = user.email;

        let userRef = firebase.database().ref().child('loggedIn').child(id)
        userRef.onDisconnect().remove();
        userRef.set(email, e =>{ 
            if(e){
                console.log(e);
            };
        });
    } else {
        console.log("logged out");
        
    };
});

function login(user, email, pass, cb){

    if(email){
        firebase.auth().signInWithEmailAndPassword(email, pass)
        .catch(e => {
          if(e.code === "auth/wrong-password"){
             cb({status: "failed", code: 'incorrect email or password'});
          } else {
            cb({status: "failed", code: e.message});
          }
        })
        .then(() =>{
            cb({status: "success", user: firebase.auth().currentUser});
        })
    } else if(user){
        firebase.database().ref().child('users').child(user).once('value', snap => {
            if(snap.val()){
                firebase.auth().signInWithEmailAndPassword(snap.val(), pass)
                .catch(e => {
                    if(e.code === "auth/wrong-password"){
                        cb({status: "failed", code: 'incorrect email or password'});
                      } else {
                        cb({status: "failed", code: e.message});
                      };
                })
                .then(() =>{
                    cb({status: "success", user: firebase.auth().currentUser})
                });
            } else {
              cb({status: "failed", code: 'incorrect email or password'})
            };
        });
    };
};

function logout(cb){
    let currentUser = firebase.auth().currentUser;
    if(currentUser){
        firebase.database().ref().child('loggedIn').child(currentUser.uid).remove()
        .then(      
            firebase.auth().signOut().then(e => {
            if(e){
                cb({status: "failed", code: e.message});
            } else {
                cb({status: "success", code: currentUser.displayName + " is now logged out"});
            };
      }));
    } else {
     cb({status: "failed", code: "user is already logged out"});
    };
};

function createUser(username, email, pass, cb){
    const promise = firebase.auth().createUserWithEmailAndPassword(email, pass);
    promise.catch(e => cb({status: "failed", code: e.message}));
    promise.then(user =>{
      user.updateProfile({displayName: username}).then(() =>{
        firebase.database().ref().child('users').child(username).set(user.email, e =>{
            if(e){
                cb({status: "failed", code: e.message})
            } else {
                cb({status: "success", user: user})
            };
        });
      });
    });
};

function findGame(code, cb){
    if(code.length < 5){
        cb({status: "failed", code: "game code too short"});
        return;
    }
    firebase.database().ref().child('games').child(code).once('value', snap => {
        const game = snap.val()
        if(!game){
            cb({status: "failed", code: "No game found with that password"})
        } else if(Object.keys(game.players).length < game.maxPlayers){
            firebase.database().ref().child('games').child(code).child('players').push(firebase.auth().currentUser.displayName, e => {
            if(e){
                cb({status: "failed", code: e.message});
            }else{
                cb({status: "success"})
            };
            });
        } else{
            cb({status: "failed", code: "game is full"});
        }
    });
};

function connectToGame(code, cb){
    firebase.database().ref().child('games').on('value', snap => {
        cb(snap.val())
    })
}

export default firebase;

export {login}
export {logout}
export {createUser}
export {findGame}
export {connectToGame}