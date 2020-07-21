import { Route } from "react-router-dom";
import React from "react";
import ArticleList from "./article/ArticleList";
import MessageList from "./message/MessageList";
import TaskList from "./task/TaskList";

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
                    <TaskList {...props} />
                    </>
                    
				}}/>
            
        </React.Fragment>
	);
};

export default Dashboard;
