const remoteURL = "http://localhost:8088"

//Created by Brett Stoudt

export default {
    // get specific message for edit (not in service)
    get(id) {
        return fetch(`${remoteURL}/messages/${id}`).then(result => result.json())
    },
    // get all messages
    getAll() {
        return fetch(`${remoteURL}/messages`).then(result => result.json())
    },
    //get mall messages and expand upon the user to get username from the users table
    getMessagesData: () => {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(messages => messages.json())
    },
    
    //post new message to database
    post(newMessage) {
        return fetch(`${remoteURL}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        }).then(data => data.json())
    },
    //put specific message back to the database after edit (not in service)
    update(editedMessage) {
        return fetch(`${remoteURL}/messages/${editedMessage.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedMessage)
        }).then(data => data.json());
    },

    //FriendsList (not in service)
    //followingId is our current user, userId is the user we can expand upon to view details from users table ..userId is a friend of the followingId and would be displayed on followingId's list
    //removed no working functions that were linked to this api call
    getFriendsData: (currentUserId) => {
        return fetch(`${remoteURL}/friends?followingId=${currentUserId}&_expand=user`)
            .then(friends => friends.json())
    },
    //Add Friend to Friend Table while navigation on messages
    newFriendsEntry: (friendsObject) => {
        return fetch(`${remoteURL}/friends`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(friendsObject),
        });
    },
    
    
}