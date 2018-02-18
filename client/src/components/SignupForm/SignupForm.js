import React from "react";
import "./SignupForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SignupForm = props =>

  <form className="login">
    <div className="form-group">

      <input
        value={props.email}
        type="text"
        className="form-control"
        placeholder="EMAIL"
        id="email"
      />
      <datalist id="email">
        {/*props.logins.map(username => <option value={username} key={username} />)*/}
      </datalist>

      <input
        value={props.username}
        type="text"
        className="form-control"
        placeholder="USERNAME"
        id="username"
      />
      <datalist id="username">
        {/*props.logins.map(username => <option value={username} key={username} />)*/}
      </datalist>


      <input
        value={props.password}
        type="password"
        className="form-control"
        placeholder="PASSWORD"
        id="password"
      />
      <datalist id="password">
        {/*props.logins.map(password => <option value={password} key={password} />)*/}
      </datalist>

      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn" 
      >SIGN UP
      </button>
    </div>
  </form>;

export default SignupForm;
