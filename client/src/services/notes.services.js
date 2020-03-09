import axios from "axios"

class mapServices {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/notes`,
            withCredentials: true
        })
    }

    postNote = note => this.service.post("/create", note).then(response => console.log(response.data))

    // getMap = mapId => this.service.post("/getmap", mapId).then(response => response.data)

    // this.service.get("/getmap", mapId).then(response => response.data)


    // getUser = (id) => this.service.get(`/${id}`).then(response => response.data)


    // login = ({ username, password }) => this.service.post("/login", { username, password })
    // logout = () => this.service.post('/logout').then(response => response.data)
    // loggedin = () => this.service.get('/loggedin').then(response => response.data)

}

export default mapServices 