import axios from "axios"

class mapServices {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/maps`,
            withCredentials: true
        })
    }

    postMap = (map) => this.service.post("/create", map).then(response => response.data)

    // getUser = (id) => this.service.get(`/${id}`).then(response => response.data)


    // login = ({ username, password }) => this.service.post("/login", { username, password })
    // logout = () => this.service.post('/logout').then(response => response.data)
    // loggedin = () => this.service.get('/loggedin').then(response => response.data)

}

export default mapServices 