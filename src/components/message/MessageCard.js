import React, { useEffect } from "react";
//import useState from "react";
import "./Message.css"
import messageEditForm from "./MessageEditForm"
import MessageManager from "../../modules/MessageManager";
//Created by: Brett Stoudt
//function that created indivdual cards for each message in the database
// API request of messages expands on users table.
const MessageCard = (props) => {
  //const [friends, setFriends] = useState([])  
  const hasUser = {
      id: 1
    }
    
  //   const getFriends = () => {
  //     //console.log("Message List", props.message.userId)
  //     // After the data comes back from the API, we
  //     //  use the setMessages function to update state
  //     return MessageManager.getFriendsData(props.message.userId).then(friendsFromAPI => {
  //       //  console.log("what is inital value of get friends", friendsFromAPI)
  //         if (hasUser.id === props.message.userId) {
  //         setFriends(friendsFromAPI.userId)}
          
  //     });
  // };

  // getFriends(props)

  const myFriend = {
    userId: hasUser.id,
    followingId: props.message.userId
  }
  const addFriend = evt => {
    // if (friends.followingId === "" ) {
    //   window.alert("No Worries! You are already friends!");
    // } else 
    // {
      // props.setIsLoading(true);
      // Create the message
      MessageManager.newFriendsEntry(myFriend)
        //re-render the parent componet(MessageList) my invoking the function passed in as props.
        //set the is loading to false to keep the button from being clicked again 
      .then(() =>
        {props.getMessages() 
        // props.setIsLoading(false)
      }
      );

    //}

  }
  useEffect(() => {
    //console.log("useEffect")
  props.getMessages()
  // getFriends()
}, []);
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
            <button type="button" onClick={messageEditForm} id={`messageEdit${props.message.id}`}>Edit</button>
        </span>
        </>
        ) : props.message.userId !== hasUser.id ? (<><button type="button" onClick={addFriend} id="messageEdit">Add to Friends</button></>) : null}
        {/* {props.message.userId !== friends ?  
         (
          <>
        <span>
            <button type="button" onClick={addFriend} id="messageEdit">Add to Friends</button>
        </span>
        </>
        ) : null} */}
        
      </div>
    </div>
  )
}
export default MessageCard