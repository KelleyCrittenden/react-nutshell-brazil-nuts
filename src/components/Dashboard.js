import { Route } from "react-router-dom";
import React from "react";
import MessageCard from "./message/MessageCard";
import ArticleList from "./article/ArticleList";
import ArticleForm from "./article/ArticleForm";

const ApplicationViews = () => {
    return (
		<React.Fragment>

			<Route
				path="/"
				render={() => {
					return <> 
                    <MessageCard />
					<ArticleList />
					<ArticleForm />
                    </>
				}}/>
            
        </React.Fragment>
	);
};

export default ApplicationViews;