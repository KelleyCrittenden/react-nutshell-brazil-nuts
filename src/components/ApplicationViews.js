import { Route } from "react-router-dom";
import React from "react";
import MessageList from "./message/MessageList";

const ApplicationViews = () => {
    
    return (
		<React.Fragment>

			<Route
				path="/"
				render={() => {
					return <>
                    <MessageList /> 
                    </>
				}}/>
            
        </React.Fragment>
	);
};

export default ApplicationViews;