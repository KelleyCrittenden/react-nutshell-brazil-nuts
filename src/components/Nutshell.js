import React, {useState} from "react";
import Dashboard from "./Dashboard";
import "./Nutshell.css";
import Login from "./auth/Login"


const Nutshell = (props) => {
  //Boolean value, false if session storage does not have credentials, true if session storage does contain credentials
  const isAuthenticated = () => 
sessionStorage.getItem("credentials") !== null;

//user state passed along to components to verify user is authenticated
const [hasUser, setHasUser] = useState(isAuthenticated());

//function that returns the Login.js result and sets it into session storage.
const setUser = user => {
  sessionStorage.setItem("credentials", JSON.stringify(user));
  setHasUser(isAuthenticated());
  console.log(isAuthenticated())
};

//function to determine component to render based on boolean value of isAuthenticated
// function invoked in the return 
//Created by Brett Stoudt
const vantagePoint = () => {
  if (!isAuthenticated()) {
    return <Login {...props} setUser={setUser}/>
  } else {return <Dashboard {...props} hasUser={hasUser} />}
}
return (
    
    vantagePoint()
  );
};


export default Nutshell;