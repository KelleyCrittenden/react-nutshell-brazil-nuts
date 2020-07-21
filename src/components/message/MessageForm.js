import React, { useState } from 'react';
import MessageManager from '../../modules/MessageManager';
import './MessageForm.css'

const MessageForm = (props) => {
    const [singleMessage, setSingleMessage] = useState({ id: "", message: "", userId: 1, timestamp: Date.now() });

    const [isLoading, setIsLoading] = useState(false);



//anytime you have an event all of the stuff is passed along 
        //state to change set equal to value and pass it in
        // message values are inside our state, so any change to those values causes setMessage to run with stateToChange passed through
        // it watches you type into the input and holds onto that as stateToChange and then when you hit enter it subbmits those and creates a new database item.
    const handleFieldChange = evt => {
        console.log("what is evt", evt)
      const stateToChange = { ...singleMessage };
      console.log("stateToChange", stateToChange);
      stateToChange[evt.target.id] = evt.target.value;
      setSingleMessage(stateToChange);
    };


  /*  Local method for validation, set loadingStatus, create message object, invoke the MessageManager post method, and redirect to the full message list
  */
  const constructNewMessage = evt => {
    evt.preventDefault();
    if (singleMessage.message === "" ) {
      window.alert("You got to say something to be heard!");
    } else {
      setIsLoading(true);
      // Create the message
      MessageManager.post(singleMessage)
        //re-render the parent componet(MessageList) my invoking the function passed in as props.
        //set the is loading to false to keep the button from being clicked again 
      .then(() =>
        {props.getMessages() 
        setIsLoading(false)}
      );

    }
  };


  const messageInput = () => {
    if (singleMessage.id !== "") {
      console.log("this is editMessage",singleMessage.message)
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
                value={singleMessage.message}
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
    } else {console.log("this is emptyMessage",singleMessage.userId) 
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
    messageInput()

  );
};

export default MessageForm