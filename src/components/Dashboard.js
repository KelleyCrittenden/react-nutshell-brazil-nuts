import { Route } from "react-router-dom";
import React from "react";
import Banner from "./banner/Banner";
import ArticleList from "./article/ArticleList";
import FriendList from "./friend/FriendList";
import MessageList from "./message/MessageList";
import TaskList from "./task/TaskList";
import EventList from "./event/EventList";

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
					<FriendList {...props} />
					<ArticleList { ...props } />
					<EventList {...props} />
                    <TaskList {...props} />
                    </>
				}}/>
            
        </React.Fragment>
	);
};

export default Dashboard;
