import { Route } from "react-router-dom";
import React from "react";
import MessageCard from "./message/MessageCard";
import ArticleCard from "./article/ArticleCard";
import ArticleForm from "./article/ArticleForm";

const ApplicationViews = () => {
    return (
		<React.Fragment>

			<Route
				path="/"
				render={() => {
					return <> 
                    <MessageCard />
					<ArticleCard />
					<ArticleForm />
                    </>
				}}/>
            
        </React.Fragment>
	);
};

export default ApplicationViews;