import React from "react";
import "./Nutshell.css";
//import Login from "./auth/Login"
import ApplicationViews from "./Dashboard"



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

const Nutshell = () => {
  return (
    <>
    <ApplicationViews />
    </>
  );
};


export default Nutshell;