import React from "react";
import "./Message.css"

//Created by: Brett Stoudt
//function that created indivdual cards for each message in the database
// API request of messages expands on users table.
const MessageCard = (props) => {
    //const handleEdit
    
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-petname">
        {props.message.user.username}
        </span></h3> <p><span>{props.message.message}</span></p>

        <span>
            <button type="button" onClick={props.handleEdit} id="messageEdit">Edit</button>
        </span>
      </div>
    </div>
  )
}
export default MessageCard