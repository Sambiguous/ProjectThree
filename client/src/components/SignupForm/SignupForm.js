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
    let username = this.state.username.trim();
    let password = this.state.password.trim();


    if(!validateEmail(email)){
      //invalid email code goes here
      console.log("invalid email address");
    } else if(username.length < 1) {
      //username too short code goes here
      console.log("username can't be blank")
    } else if(password.length < 6){
      //password too short code goes here
      console.log("password must be at least 6 characters");
    } else {
      //if all validations are met, create a new user
      const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
      promise.catch(e => console.log(e.message));
      promise.then(user =>{
        user.updateProfile({displayName: username}).then(() =>{
          firebase.database().ref().child('users').child(username).set(user.email)
        });
      });
    };
    
    this.setState({
      email: "",
      username: "",
      password: ""
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
  </form>
}
export default SignupForm;
