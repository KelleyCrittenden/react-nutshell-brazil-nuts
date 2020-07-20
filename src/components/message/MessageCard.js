import React, { useState } from "react";
import "./Message.css"
import messageEditForm from "./MessageEditForm"
import MessageManager from "../../modules/MessageManager";
//Created by: Brett Stoudt
//function that created indivdual cards for each message in the database
// API request of messages expands on users table.
const MessageCard = (props) => {
  const [friends, setFriends] = useState([])  
  const hasUser = {
      id: 1
    }
    
    const getFriends = () => {
      console.log("Message List")
      // After the data comes back from the API, we
      //  use the setMessages function to update state
      return MessageManager.getFriendsData(props.message.userId).then(friendsFromAPI => {
          console.log("what is inital value of get friends", friendsFromAPI)
          setFriends(friendsFromAPI.followingId)
      });
  };
  getFriends()

  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-petname">
        {props.message.user.username}
        </span></h3> <p><span>{props.message.message}</span></p>
        {hasUser.id === props.message.userId ?  
         (
          <>
        <span>
            <button type="button" onClick={messageEditForm} id="messageEdit">Edit</button>
        </span>
        </>
        ) : null}
        {props.message.userId !== friends ?  
         (
          <>
        <span>
            <button type="button" onClick={messageEditForm} id="messageEdit">Add to Friends</button>
        </span>
        </>
        ) : null}
        
      </div>
    </div>
  )
}
export default MessageCard