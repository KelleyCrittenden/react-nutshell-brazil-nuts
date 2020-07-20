import { Route } from "react-router-dom";
import React from "react";
import MessageCard from "./message/MessageCard";
import ArticleList from "./article/ArticleList";

const Dashboard = () => {
    return (
		<React.Fragment>

			<Route
				exact path="/"
				render={props => {
					return <> 
                    <MessageCard />
					<ArticleList
					{ ...props } />
                    </>
				}}/>
            
        </React.Fragment>
	);
};

export default Dashboard;