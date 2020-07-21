import React from "react";
import Dashboard from "./Dashboard";
import "./Nutshell.css";


const Nutshell = (props) => {
return (
    
    <>
      <Dashboard
      { ...props } />
    </>
  );
};

export default Nutshell;