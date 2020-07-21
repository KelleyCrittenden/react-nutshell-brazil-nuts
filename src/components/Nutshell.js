import React from "react";
import Dashboard from "./Dashboard";
import "./Nutshell.css";
import Login from "./auth/Login"



// const Nutshell = (props) => {

//   const isAuthenticated = () => 
//   sessionStorage.getItem("credentials") !== null;
  
// return (
//     <>
//           {isAuthenticated ? <Login {...props} /> : <Dashboard {...props}/>}
          

//     </>
//   );
// };

// export default Nutshell;

const Nutshell = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentias") !==null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("credentials", json.stringifiy(user))
    setHasUser(isAuthenticated())
  };

  return (
    <>
    <Login hasUser={hasUser}/>
    <Dashboard hasUser={hasUser} setUser={setUser}/>
    </>
  )
};

export default Nutshell;