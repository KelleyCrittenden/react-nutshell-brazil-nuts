import React, { useState, useEffect } from "react";
import FriendCard from "./FriendCard";
import FriendManager from "../../modules/FriendManager";
import FriendForm from "./FriendForm"


// This component will initiate the FriendManager getAll() call, hold on to the returned data, and then render the <FriendCard /> component for each friend.

const FriendList = props => {
    // The initial state is an empty array
    const [friends, setFriends] = useState([]);

    const getFriends = () => {
        FriendManager.getFriendsData(1)
        .then(friendsFromAPI => {
            setFriends(friendsFromAPI);
        });
    }

    const deleteFriend = id => {
        FriendManager.delete(id)
        .then(() => getFriends()
        
        )}

    useEffect(() => {
        getFriends();
    }, []);

        // Use map() to "loop over" the articles array to show a list of article cards
        return (

            <>  
                {/* Add the <ArticleForm> tag here in the rendered return in the ArticleList component. And then use  getArticles={getArticles}  as a key/value pair. *Do not call the function here*   */}
                <FriendForm
                    getFriends={getFriends}
                    />
                <div className="container-friend-cards">
                    {friends.map(friend =>
                        <FriendCard
                            key={friend.id}
                            friend={friend}
                            deleteFriend={deleteFriend}
                            { ...props }
                        />    
                    )}
                </div>
            </>
        );
}

export default FriendList;