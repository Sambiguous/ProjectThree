import React from "react";
import "./LoginForm.css";
import firebase from '../../firebase';
import { database } from "firebase";


//this is a regex function literally copy/pasted from stack overflow. it checks 
//to see if a given string is a valid email address. I have no idea how it works
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class LoginForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      emailOrUsername: "",
      password: "",
    }
  };

  handleInputChange = event => {

    const{name, value} = event.target;

    this.setState({[name]: value});
  };

  handleLogin = event => {
    event.preventDefault();

    let pass = this.state.password;
    let user = this.state.emailOrUsername;

    if(user === ""){
      console.log("username or email is blank");
      return;
    }

    if(validateEmail(user)){
      const promise = firebase.auth().signInWithEmailAndPassword(user, pass);
      promise.catch(e => {
        if(e.code === "auth/wrong-password"){
          console.log('incorrect email or password');
        } else {
          console.log(e.message);
        }
      });
    } else {
      firebase.database().ref().child('users').child(user).once('value', snap => {
        let email = snap.val();

        if(email){
          const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
          promise.catch(e => {
            if(e.code === "auth/wrong-password"){
              console.log('incorrect username or password');
            } else {
              console.log(e.message);
            }
          });
        } else {
          console.log('incorrect username or password');
        }
      });
    };
    this.setState({
      emailOrUsername: "",
      password: "",
    })
  };

  handleLogout = event => {
    event.preventDefault();

    let currentUser = firebase.auth().currentUser;

    if(currentUser){
      firebase.database().ref().child('loggedIn').child(currentUser.uid).remove()
      .then(      
        firebase.auth().signOut().then(e => {
        if(e){
          console.log(e);
        } else {
          console.log("user: " + currentUser.displayName + " is now logged out");
        }
      }));
    } else {
      console.log("user is already logged out");
    }

  }


  render = () =>
  <form className="login">
    <div className="form-group">

      <input
        value={this.state.emailOrUsername}
        type="text"
        className="form-control"
        placeholder="USERNAME"
        onChange={this.handleInputChange}
        name="emailOrUsername"
        id="emailOrUsername"
      />
      <datalist id="username">
        {/*props.logins.map(username => <option value={username} key={username} />)*/}
      </datalist>


      <input
        value={this.state.password}
        type="password"
        className="form-control"
        placeholder="PASSWORD"
        onChange={this.handleInputChange}
        name="password"
        id="password_login"
      />
      <datalist id="password">
        {/*props.logins.map(password => <option value={password} key={password} />)*/}
      </datalist>

      <button
        type="submit"
        onClick={this.handleLogin}
        className="btn" 
      >LOGIN
      </button>
      <button
        type="submit"
        onClick={this.handleLogout}
        className="btn"
        >temporary logout button
      </button>
    </div>
  </form>
}
export default LoginForm;
