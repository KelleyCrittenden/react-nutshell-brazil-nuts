import React from "react";
import Dashboard from "./Dashboard";
import "./Nutshell.css";
//import Login from "./auth/Login"



// const Nutshell = (props) => {

//   const isAuthenticated = () => 
//   sessionStorage.getItem("credentials") !== null;
  
// return (
//     <>
//           {isAuthenticated ? <Dashboard {...props} /> : <Login {...props}/>}
          

//     </>
//   );
// };

// export default Nutshell;

const Nutshell = (props) => {
return (
    
    <>
      <Dashboard
      { ...props } />
    </>
  );
};


export default Nutshell;