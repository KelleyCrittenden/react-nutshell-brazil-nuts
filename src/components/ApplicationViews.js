import { Route } from "react-router-dom";
import React from "react";
import MessageCard from "./message/MessageCard";
import ArticleCard from "./article/ArticleCard";

const ApplicationViews = () => {
    return (
		<React.Fragment>

			<Route
				path="/"
				render={() => {
					return <> 
                    <MessageCard />
					<ArticleCard />
                    </>
				}}/>
            
        </React.Fragment>
	);
};

export default ApplicationViews;