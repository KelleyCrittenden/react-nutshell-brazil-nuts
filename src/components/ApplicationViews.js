import { Route } from "react-router-dom";
import React from "react";
import MessageCard from "./message/MessageCard";

const ApplicationViews = () => {
    return (
		<React.Fragment>

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