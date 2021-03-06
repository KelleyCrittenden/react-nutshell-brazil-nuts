import { Route } from "react-router-dom";
import React from "react";
import Banner from "./banner/Banner";
import ArticleList from "./article/ArticleList";
import FriendList from "./friend/FriendList";
import MessageList from "./message/MessageList";
import TaskList from "./task/TaskList";
import "./Dashboard.css"
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
					<div className="MainBanner">
						<Banner {...props} setUser={setUser} hasUser={hasUser} />
					</div>
					<div className="topContainer">	
						<div className="columnLeft">
							<FriendList {...props} />
						</div>
						<div className="columnRight">
							<MessageList {...props} />
						</div>
					</div>
					<div className="ArticlesRow">
					<ArticleList { ...props } />
					</div>
					<EventList {...props} />
                    <TaskList {...props} />
                    </>
				}}/>
            
        </React.Fragment>
	);
};

export default Dashboard;
