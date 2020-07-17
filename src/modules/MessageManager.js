const remoteURL = "http://localhost:8088"

//return the fetcht
//return the result after paring with json (no return written but its still happening since itsneeded to pass the proinse along)
export default {

    get(id) {
        return fetch(`${remoteURL}/messages/${id}`).then(result => result.json())
    },

    getAll() {
        return fetch(`${remoteURL}/messages`).then(result => result.json())
    },

    getMessagesData: () => {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(messages => messages.json())
    },

    post(newMessage) {
        return fetch(`${remoteURL}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        }).then(data => data.json())
    }

}