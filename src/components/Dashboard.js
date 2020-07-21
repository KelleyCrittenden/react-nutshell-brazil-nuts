import { Route } from "react-router-dom";
import React from "react";
import ArticleList from "./article/ArticleList";
import MessageList from "./message/MessageList";

const Dashboard = () => {
    return (
		<React.Fragment>

			<Route
				exact path="/"
				render={props => {
					return <> 
                    <MessageList {...props} />
					<ArticleList
					{ ...props } />
                    </>
				}}/>
            
        </React.Fragment>
	);
};

export default Dashboard;