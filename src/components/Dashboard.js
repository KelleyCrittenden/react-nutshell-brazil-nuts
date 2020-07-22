import { Route } from "react-router-dom";
import React from "react";
import ArticleList from "./article/ArticleList";
import FriendList from "./friend/FriendList";
import MessageList from "./message/MessageList";

const Dashboard = () => {
    return (
		<React.Fragment>

			<Route
				exact path="/"
				render={props => {
					return (
					<>
						
							<div className="user-content-container-main">
								<MessageList {...props} />
								<ArticleList
								{ ...props }/>
							</div>	
							<div className="user-content-container-friends">
								<FriendList 
								{ ...props } />
							</div>
							
                    </>
					)
				}}/>
            
        </React.Fragment>
	);
};

export default Dashboard;