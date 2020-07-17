import { Route } from "react-router-dom";
import React from "react";
import MessageCard from "./message/MessageCard";
import ArticleList from "./article/ArticleList";
import ArticleForm from "./article/ArticleForm";

const ApplicationViews = (props) => {
    return (
		<React.Fragment>

			<Route
				path="/"
				render={() => {
					return <> 
                    <MessageCard />
					<ArticleList />
					<ArticleForm { ...props } />
                    </>
				}}/>
            
        </React.Fragment>
	);
};

export default ApplicationViews;