import React from "react";
import "./Banner.css"
//import Login from "../auth/Login"


const Banner = props => {
 //Log out button clears session storage
  const handleLogout = (props) => {
		sessionStorage.clear();
		// {<Login />}
	  }
  return (
    <header>

      <h1 className="site-title">
        Nutshell
      </h1>

          <h3>
            <span 
              className="nav-link" 
              onClick={handleLogout}> 
              Logout </span>
          </h3>

    </header>
  );
};

export default Banner;