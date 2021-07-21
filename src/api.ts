import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001/api/user?page=1"
})

export const usersAPI = {
    getUsers() {
        return instance.get("http://localhost:3001/api/user?page=1")
            .then(response => {
                return response.data
            })
    }
}