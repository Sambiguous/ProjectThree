import React from "react";
import "./SignupForm.css";
import firebase from '../../firebase';

//this is a regex function literally copy/pasted from stack overflow useed to 
//see if a given string is a valid email address. I have no idea how it works
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


class SignupForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };
  };

  handleInputChange = event => {
    const{name, value} = event.target

    this.setState({[name]: value});
  };

  handleSignUp = event => {
    event.preventDefault();

    let email = this.state.email;
    let username = this.state.username;
    let password = this.state.password;
    //--------validations go here--------------
    //TODO: ensure email is valid email address
    //pasword is at least 6 characters long
    //username is not blank
    //-----------------------------------------
    
    const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
    promise.then(user =>{
      user.updateProfile({displayName: username}).then(() =>{
        firebase.database().ref().child('users').child(username).set(user.email)
      })
    });
  };
  render = () =>
  <form className="login">
    <div className="form-group">

      <input
        value={this.state.email}
        type="text"
        className="form-control"
        placeholder="EMAIL"
        onChange={this.handleInputChange}
        name="email"
        id="email_input"
      />
      <datalist id="email">
        {/*props.logins.map(username => <option value={username} key={username} />)*/}
      </datalist>

      <input
        value={this.state.username}
        type="text"
        className="form-control"
        placeholder="USERNAME"
        onChange={this.handleInputChange}
        name="username"
        id="username_input"
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
        id="password_input"
      />
      <datalist id="password">
        {/*props.logins.map(password => <option value={password} key={password} />)*/}
      </datalist>

      <button
        type="submit"
        onClick={this.handleSignUp}
        className="btn" 
      >SIGN UP
      </button>
    </div>
  </form>;
}
export default SignupForm;
