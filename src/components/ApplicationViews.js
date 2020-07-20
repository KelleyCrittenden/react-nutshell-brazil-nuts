import { Route } from "react-router-dom";
import React from "react";
import MessageList from "./message/MessageList";

const ApplicationViews = (props) => {
    
    return (
		<React.Fragment>

			<Route
				path="/"
				render={(props) => {
					return <>
                    <MessageList {...props}  /> 
                    </>
				}}/>

            
        </React.Fragment>
	);
};

export default ApplicationViews;