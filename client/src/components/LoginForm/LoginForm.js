import React from "react";
import "./LoginForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const LoginForm = props =>

  <form className="login">
    <div className="form-group">

      <input
        value={props.username}
        type="text"
        className="form-control"
        placeholder="Username"
        id="username"
      />
      <datalist id="username">
        {/*props.logins.map(username => <option value={username} key={username} />)*/}
      </datalist>


      <input
        value={props.password}
        type="text"
        className="form-control"
        placeholder="Password"
        id="password"
      />
      <datalist id="password">
        {/*props.logins.map(password => <option value={password} key={password} />)*/}
      </datalist>

      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn" 
      >Login
      </button>
    </div>
  </form>;

export default LoginForm;
