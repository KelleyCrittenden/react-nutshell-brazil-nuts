import React from "react";
import "./Banner.css"


const Banner = props => {
         //clear the user then change the URL
  const handleLogout = () => {
        //came from the parent in dashboard.js
    props.clearUser();
    props.history.push('/');
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