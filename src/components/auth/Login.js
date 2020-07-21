import React, { useState } from "react"

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

        // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

        //storing email and password that User enters into session storage without database information at this step
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(credentials)
    props.setUser(credentials);

  }


      //form that will appear in DOM for user with input fields
  return (
    <form onSubmit={handleLogin}>
      <fieldset>

        <h3>Please sign in</h3>

        <div className="formgrid">

          <label htmlFor="inputEmail">Email address</label>

          <input 
            onChange={handleFieldChange} 
            type="email"
            id="email"
            placeholder="Email address"
            required="" 
            autoFocus="" />

         <label htmlFor="inputPassword">Password</label>

          <input 
            onChange={handleFieldChange} 
            type="password"
            id="password"
            placeholder="Password"
            required="" />

        </div>

        <button type="submit">Login</button>

      </fieldset>
    </form>
  );
};

export default Login;