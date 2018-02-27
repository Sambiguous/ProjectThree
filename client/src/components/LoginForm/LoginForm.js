import React from "react";
import "./LoginForm.css";

//this is a regex function literally copy/pasted from stack overflow. it checks 
//to see if a given string is a valid email address. I have no idea how it works
function validateEmail(email) {
  //eslint-disable-next-line
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

  componentDidMount(){
    console.log("login form mounted")
  }

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
      this.props.login(null, user, pass, (response) => {
        console.log(response);
        if(response.status === "success"){
          this.props.renderNewComponent("home", {user: response.user.displayName});
        };
      })
    } else {
      this.props.login(user, null, pass, response =>{
        console.log(response);
        if(response.status === "success"){
          this.props.renderNewComponent("home", {user: response.user.displayName});
        }
      }) 
    };

    this.setState({emailOrUsername: "", password: "",})
  };

  handleLogout = event => {
    event.preventDefault();

    this.props.logout(response => {
      console.log(response);
    });
  };


  render(){
    return(
  <form className="login">
    <div className="form-group">

      <input
        value={this.state.emailOrUsername}
        type="text"
        className="form-control"
        placeholder="EMAIL OR USERNAME"
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
      {/*<button
        type="submit"
        onClick={this.handleLogout}
        className="btn"
        >LOGOUT
      </button>*/}
    </div>
  </form>
    )
  }
}
export default LoginForm;
