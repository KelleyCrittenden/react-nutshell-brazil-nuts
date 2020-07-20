import React, { useState, useEffect } from 'react';
import MessageCard from "./MessageCard";
import MessageForm from "./MessageForm";
import MessageManager from "../../modules/MessageManager";
//Created by: Brett Stoudt
//MessageList is the parent component of MessageCard & MessageForm
const MessageList = (props) => {
    const [messages, setMessages] = useState([]);

    //Function to Handle API Call on messages that includes an expand on the users table to access username
    const getMessages = () => {
        console.log("Message List")
        // After the data comes back from the API, we
        //  use the setMessages function to update state
        return MessageManager.getMessagesData().then(messageFromAPI => {
            console.log("what is inital value", messageFromAPI)
            setMessages(messageFromAPI)
        });
    };

    //If getMessages chanages, re-render
    useEffect(() => {
        console.log("useEffect")
      getMessages()
    }, []);

    //create new array of messageCards using .map to organize our data for each object to be displayed
    //display all messageCards created
    //display MessageForm Component as a child element to MessageList, making sure to include the props and the function to re-render the list by fetching is redeclaring the setMessage(invoked with the response)
    return (
        <>
        <div className="container-cards">
          {messages.map(message => 
          <MessageCard key={message.id} message={message} {...props}/>)}
        </div>
        <section className="section-content">
          <MessageForm {...props} getMessages={getMessages} />
        </section>
      </>
    )
}

export default MessageList