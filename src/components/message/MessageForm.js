import React, { useState } from 'react';
import MessageManager from '../../modules/MessageManager';
import './MessageForm.css'

const MessageForm = (props) => {
    const [message, setMessage] = useState({ id: "", message: "", userId: 1, timestamp: Date.now() });

    const [isLoading, setIsLoading] = useState(false);




    const handleFieldChange = evt => {

        console.log("what is evt", evt)
        //anytime you have an event all of the stuff is passed along 
        //state to change set equal to value and pass it in
        // message values are inside our state, so any change to those values causes setMessage to run with stateToChange passed through
        // it watches you type into the input and holds onto that as stateToChange and then when you hit enter it subbmits those and creates a new database item.
      const stateToChange = { ...message };
      console.log("stateToChange", stateToChange);
      stateToChange[evt.target.id] = evt.target.value;
      setMessage(stateToChange);
    };


  /*  Local method for validation, set loadingStatus, create message object, invoke the MessageManager post method, and redirect to the full message list
  */
  const constructNewMessage = evt => {
    evt.preventDefault();
    if (message.message === "" ) {
      window.alert("You got to say something to be heard!");
    } else {
      setIsLoading(true);
      // Create the message
      MessageManager.post(message)
      .then(() =>{
        //re-render the parent componet(MessageList) my invoking the function passed in as props.
        //set the is loading to false to keep the button from being clicked again 
        props.getMessages() 
        setIsLoading(false)}
    );

    }
  };


  const messageInput = () => {
    if (message.id !== "") {
      console.log("this is editMessage",message.message)
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={handleFieldChange}
                id="message"
                value={message.message}
              />
              <label htmlFor="message">Message</label>

            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={isLoading}
                onClick={constructNewMessage}
              >Submit</button>  
            </div>
          </fieldset>
        </form>
      </>
    )
    } else {console.log("this is emptyMessage",message.userId) 
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={handleFieldChange}
                id="message"
                placeholder="Start Typing!"
              />
              <label htmlFor="message">Message</label>

            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={isLoading}
                onClick={constructNewMessage}
              >Submit</button>  
            </div>
          </fieldset>
        </form>
      </>
    )}
  }

  return (
    <>
    <form>
      <fieldset>
        <div className="formgrid">
          <input
            type="text"
            required
            onChange={handleFieldChange}
            id="message"
            placeholder="Start Typing!"
          />
          <label htmlFor="message">Message</label>

        </div>
        <div className="alignRight">
          <button
            type="button"
            disabled={isLoading}
            onClick={constructNewMessage}
          >Submit</button>  
        </div>
      </fieldset>
    </form>
  </>

  );
};

export default MessageForm