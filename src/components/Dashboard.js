import { Route } from "react-router-dom";
import React from "react";
import Banner from "./banner/Banner";
import ArticleList from "./article/ArticleList";
import MessageList from "./message/MessageList";
import TaskList from "./task/TaskList";

const Dashboard = (props) => {
	const hasUser = props.hasUser;
	const setUser = props.setUser;
    return (
		<React.Fragment>

			<Route
				exact path="/"
				render={props => {
					return <> 
					<Banner {...props} setUser={setUser} hasUser={hasUser} />
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
