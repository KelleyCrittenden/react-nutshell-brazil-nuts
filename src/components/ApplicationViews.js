import { Route, Redirect } from "react-router-dom";
import React from "react";
import MessageCard from "./message/MessageCard";
import Login from "./auth/LoginForm";

const isAuthenticated = () => 
	sessionStorage.getItem("credentials") !== null;

const ApplicationViews = () => {
    return (
		<React.Fragment>

			<Route 
				path="/login" 
				component={Login} 
			/>

			<Route
				path="/"
				render={() => {
					return <> 
                    <MessageCard /> 
                    </>
				}}/>
            
        </React.Fragment>
	);
};

export default ApplicationViews;