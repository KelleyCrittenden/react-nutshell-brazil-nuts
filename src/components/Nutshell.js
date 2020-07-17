import React from "react";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";


const Nutshell = () => {
return (
    <>
    {/*userState !== null {<welcome w. login component /> } : {<dashboard w. lists & logout component />} */}
    {/* if hasUser {return <Dashboard w.lists & logout component} else {return <Welcome w. login component />}  */}
      <ApplicationViews />
    </>
  );
};

export default Nutshell;