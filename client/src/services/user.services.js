import axios from "axios"

class authServices {
    constructor() {
        this.service = axios.create({
            baseURL: "http://localhost:5000/api/profile",
            withCredentials: true
        })
    }

    getUser = (id) => this.service.get(`/${id}`).then(response => response.data)

    postUser = user => this.service.post("/update", user).then(response => response.data)


    // login = ({ username, password }) => this.service.post("/login", { username, password })
    // logout = () => this.service.post('/logout').then(response => response.data)
    // loggedin = () => this.service.get('/loggedin').then(response => response.data)

}

export default authServices 