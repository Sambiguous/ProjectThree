import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from './firebase';


if (!firebase.auth().currentUser) {
    let hasLocalStorageUser = false;
    for (let key in localStorage) {
        if (key.startsWith("firebase:authUser:")) {
            //console.log(localStorage[key])
            ReactDOM.render(<App auth={localStorage[key]} />, document.getElementById('root'));
        }
    }
    if (!hasLocalStorageUser) {
        ReactDOM.render(<App auth={null} />, document.getElementById('root'));
    }
} else {
    ReactDOM.render(<App auth={firebase.auth().currentUser} />);
}