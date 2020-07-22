const apiURL = "http://localhost:8088/events";

const API = {
    getWithId(userId) {
        return fetch(apiURL + "?userId=" + userId).then(entries => entries.json());
    },
    get() {
        return fetch(apiURL).then(entries => entries.json());
    },
    save(objToSave) {
        return fetch(apiURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToSave)
        })
    },
    delete(objToDeleteId) {
        return fetch(`${apiURL}/${objToDeleteId}`, {
            method: "DELETE"
        });
    },
    edit(objToEditId) {
        return fetch(apiURL + "/" + objToEditId).then(entry => entry.json());
    },
    update(objToEdit) {
        return fetch(`${apiURL}/${objToEdit.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToEdit)
        });
    }  
}
export default API;