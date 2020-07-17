import React, { useState } from 'react';
import MessageManager from '../../modules/MessageManager';
import './MessageForm.css'

const MessageForm = (props) => {
    const [message, setMessage] = useState({ message: "", userId: 1, timestamp: Date.now() });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
    
        console.log("what is evt", evt)
        //anytime you have an event all of the stuff is passed along 
        //state to change set equal to value and pass it in
        // message values are inside our state, so any change to those values causes setAnimal to run with stateToChange passed through
        // it watches you type into the input and holds onto that as stateToChange and then when you hit enter it subbmits those and creates a new database item.
      const stateToChange = { ...message };
      console.log("stateToChange", stateToChange);
      stateToChange[evt.target.id] = evt.target.value;
      setMessage(stateToChange);
    };
    


  /*  Local method for validation, set loadingStatus, create message object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewMessage = evt => {
    evt.preventDefault();
    if (message === "" ) {
      window.alert("You got to say something to be heard!");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      MessageManager.post(message)
        .then(() => 
        (setMessage));
    }
  };

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
            <label htmlFor="name">Message</label>
           
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