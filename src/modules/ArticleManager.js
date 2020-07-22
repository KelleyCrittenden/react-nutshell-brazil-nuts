
const remoteURL = "http://localhost:8088"

// This module contains the "articles" API calls. Other components, in the future, may need the ability to make their own API calls. So we eliminate the possibility of duplicate code by making a module whose sole responsibility is to interact with the API.

export default {
    get(id) {
        return fetch(`${remoteURL}/articles/${id}`)
            .then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/articles`)
            .then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/articles/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newArticle) {
        return fetch(`${remoteURL}/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticle)
        }).then(data => data.json())
    }
}