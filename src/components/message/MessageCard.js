import React from "react";
import "./Message.css"

//img src={require...} means {} is used to wrap the source since its local... "require" is used because we are using "webpack" and it is a "commonjs" ... 
//"require" is a function that is a commonjs ?????????? and actually imports modules or other dependant files in the directory (sich as photos)
const MessageCard = () => {
  return (
      <div> Hello World</div>
  )
}
export default MessageCard