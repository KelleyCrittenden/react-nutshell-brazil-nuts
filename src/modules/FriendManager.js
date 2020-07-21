
const remoteURL = "http://localhost:8088"

// This module contains the "friends" API calls. Other components, in the future, may need the ability to make their own API calls. So we eliminate the possibility of duplicate code by making a module whose sole responsibility is to interact with the API.

export default {
    get(id) {
        return fetch(`${remoteURL}/friends/${id}`)
            .then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/friends`)
            .then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/friends/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    }

}