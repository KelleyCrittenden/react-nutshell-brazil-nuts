//Contains all of the API calls to the database

  
const remoteURL = "http://localhost:8088"

export default{

    get(id) {
        return fetch(`${remoteURL}/tasks/${id}`).then(result =>result.json())
    },

    getAll(){
        return fetch(`${remoteURL}/tasks`).then(result=>result.json())
    },

    delete(id) {
        return fetch(`${remoteURL}/tasks/${id}`,{
            method: "DELETE"
        }).then(result => result.json())
    },

    post(newTask) {
        return fetch(`${remoteURL}/tasks`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        }).then(data => data.json())
    },

    update(editedTask) {
        return fetch (`${remoteURL}/tasks/${editedTask.id}`, {
          method:"PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedTask)
        }).then(data=> data.json());
      },

    completedTask(editedTask){
        return fetch (`${remoteURL}/tasks/${editedTask.id}`,{
            method:"PATCH",
            body: JSON.stringify({
                completed: true 
            }),
            headers: {
                "Content-Type": "application/json"
            },
        }) .then(resp => resp.json());
    }
}