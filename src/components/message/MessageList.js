import React, { useState, useEffect } from 'react';
import MessageCard from "./MessageCard";
import MessageForm from "./MessageForm";
import MessageManager from "../../modules/MessageManager";
import styles from "./Message.css"

//Created by: Brett Stoudt
//MessageList is the parent component of MessageCard & MessageForm
const MessageList = (props) => {
    const [messages, setMessages] = useState([]);

    //Function to Handle API Call on messages that includes an expand on the users table to access username
    const getMessages = () => {
       // console.log("Message List")
        // After the data comes back from the API, we
        //  use the setMessages function to update state
         MessageManager.getMessagesData().then(messageFromAPI => {
         //   console.log("what is inital value", messageFromAPI)
            setMessages(messageFromAPI)
        });
    };

    //If messages chanages, re-render by invoking getMessages()
    useEffect(() => {
      getMessages()
    }, []);

    //create new array of messageCards using .map to organize our data for each object to be displayed
    //display all messageCards created as a child element of MessageList
    //display MessageForm Component as a child element of MessageList, making sure to include the props and the function to re-render the list by fetching is redeclaring the setMessage(invoked with the response)
    return (
        <div className="messageList">
        <div>
          {messages.map(message => 
          <MessageCard key={message.id} message={message} {...props} getMessages={getMessages}/>)}
        </div>
        <section className="section-content">
          <MessageForm {...props} getMessages={getMessages} />
        </section>
      </div>
    )
}

export default MessageList