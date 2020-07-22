import { Route } from "react-router-dom";
import React from "react";
import Banner from "./banner/Banner";
import ArticleList from "./article/ArticleList";
import MessageList from "./message/MessageList";
import TaskList from "./task/TaskList";

const Dashboard = (props) => {
	const hasUser = props.hasUser;
	const setUser = props.setUser;
	console.log("hasUser", hasUser)
	console.log("setUser", setUser)

    return (
		<React.Fragment>

			<Route
				exact path="/"
				render={props => {
					return <> 
					<div className="MainBanner">
						<Banner {...props} setUser={setUser} hasUser={hasUser} />
					</div>
					<div>
                    <MessageList {...props} />
					</div>
					<ArticleList
					{ ...props } />
                    <TaskList {...props} />
                    </>
                    
				}}/>
            
        </React.Fragment>
	);
};

export default Dashboard;
