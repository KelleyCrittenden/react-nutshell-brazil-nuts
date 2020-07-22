import React, { useState, useEffect } from "react";
import FriendManager from "../../modules/FriendManager";
import "./FriendForm.css"
import FriendCard from "./FriendCard"

const FriendForm = props => {
    const [friend, setFriend] = useState({
        
    });

    const [users, setUsers] = useState([]);

    const getUsers = () => {

        FriendManager.getAllUsers()
            .then(usersFromAPI => {
                setUsers(usersFromAPI);
            });
    }

    useEffect(() => {
        getUsers();
    }, []);

    //   isLoading is a boolean value that will indicate whether or not the component is loading. A value of true should disable the button and a value of false should enable it. By putting isLoading in the component's state, we can trigger a re-render by changing its value.
    const [isLoading, setIsLoading] = useState(false);


    // This is setting the state of showForm to "false". Because we want to hide the form when the page loads. And then reveal it when the user clicks the button. It works in combination with handleClick (found a few lines down)
    const [showForm, setShowForm] = useState(false);

    // ** handleFieldChange watches the input fields for any change and triggers the useState to re-render. You will need to set this function inside the tag (in the rendered return) of each input you wish to monitor. It is added with this: 
    // onChange={handleFieldChange}
    const handleFieldChange = e => {
        const stateToChange = { ...friend };
        stateToChange[e.target.id] = e.target.value;
        console.log("test", stateToChange);
        setFriend(stateToChange);
    };

    // ** handleClick is triggered by a click event. It creates a show/hide toggle feature that shows/hides an elment. To create this functionality you need to place this: className={ showForm ? 'show':'hidden'}  inside the tag of the element you wish to toggle. Then add a css selector class of  ".hidden" and set the display property to "display: none".
    const handleClick = e => {
        setShowForm(!showForm);
    };

    const hasUser = {
        id: 1
    };

    const myFriend = {
        userId: friend.userId,
        followingId: hasUser.id
    };

    const addFriend = e => {
        e.preventDefault();
        
            setIsLoading(true);
            FriendManager.addNewFriend(myFriend)
                .then(() => {
                    props.getFriends()
                }) 
    }

    return (
        <>
            <button type="button"
                id="showHiddenArticlesButton"
                onClick={handleClick}>
                Find Friends
            </button>
            <div className={showForm ? 'show' : 'hidden'}>
                <label for="friend-select">Choose a Friend:</label>
                <select name="friends"
                    id="username"
                    onChange={handleFieldChange} >
                    <option value="">--Select a Friend--</option>
                    {users.map(user => <option value={user.username}>{user.username}</option>)}
                </select>
            </div>
            <button
                type="button"
                id="selectFriend"
                disabled={isLoading}
                onClick={addFriend}>
                Add Friend
                </button>
        </>

    )
}

export default FriendForm;