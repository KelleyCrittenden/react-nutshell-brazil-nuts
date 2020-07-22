import React from "react";
import "./Message.css"
import MessageManager from "../../modules/MessageManager";
//Created by: Brett Stoudt
//function that created indivdual cards for each message in the database
// API request of messages expands on users table.
const MessageCard = (props) => {
 
  //variable to mock userId from setUser
  const simulatedUser = {
      id: 1
    }
    
  //variable hold the new friend relationshop key/value pairs
  const myFriend = {
    userId: props.message.userId,
    followingId: simulatedUser.id
  }

  //function to post the new friend data relationship to the database
  const addFriend = evt => {
    // Create the message using the variable declared with the data relationships
    MessageManager.newFriendsEntry(myFriend)
      //re-render the parent componet(MessageList) my invoking the function passed in as props.
    .then(() =>
      {props.getMessages() 
    });

  }

  return (
    <div className="card">
      <div className="card-content">
        <h3><span className="card-message">{props.message.user.username}: </span></h3> 
        <p><span>{props.message.message}</span></p>
        {/* if userId of the message is eqaul to UserId of the sessionstorage show edit else show add to friend */}
        {simulatedUser.id === props.message.userId ?  
         (
          <>
            <span className="MessageButton">
                <button type="button"  id={`messageEdit${props.message.id}`}>Edit</button>
            </span>
          </>
        ) : 
        (
          <>
            <span>
              <button type="button" onClick={addFriend} id="messageEdit">Add to Friends</button>
            </span>
          </>
        )}
        
      </div>
    </div>
  )
}
export default MessageCard