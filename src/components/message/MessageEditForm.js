import React, { useState, useEffect } from "react"
import MessageManager from "../../modules/MessageManager"
import "./MessageForm.css"

const MessageEditForm = props => {
  //include additional table to include as a paramater to expect in the state with useState([])
  const [message, setMessage] = useState({ id: props.id, message: props.message, userId: props.userId, timestamp: props.timestamp});
  const [isLoading, setIsLoading] = useState(false);


  const handleFieldChange = evt => {
    const stateToChange = { ...message };
    stateToChange[evt.target.id] = evt.target.value;
    setMessage(stateToChange);
  };

  const updateExistingMessage = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we had an additional table included we would need the ...Id here as well as our state
         //employeeId: parseInt(message.employeeId)
    const editedMessage = {
      id: message.messageId,
      message: message.message,
      userId: message.userId,
      timestamp: message.timestamp,
    };

    MessageManager.update(editedMessage)
      .then(() => props.setMessage)
  }
  // gets messages, but also needs to get employees
  useEffect(() => {
    // get 1 single message
    MessageManager.get(props.match.params.messageId)
      .then(message => {
        // then when we have the single message, we need the employees
          
            //then we set our messages + any other tables brought in as properties.. and change setisLoading for these useStates
            setMessage(message);
            setIsLoading(false);    
      });
  }, [props.match.params.messageId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="message"
              value={message.message}
            />
            <label htmlFor="message">Message</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingMessage}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default MessageEditForm