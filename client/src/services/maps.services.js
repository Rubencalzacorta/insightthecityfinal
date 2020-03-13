import axios from "axios"

class mapServices {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/maps`,
            withCredentials: true
        })
    }

    postMap = (map) => this.service.post("/create", map).then(response => response.data)

    // getMap = mapId => this.service.post("/getmap", mapId).then(response => response.data)

    getMap = mapId => this.service.get(`/getmap/${mapId}`).then(response => response.data)

    updateMap = (mapId, map) => this.service.post(`/getmap/${mapId}`, map).then(response => response.data)

    addNotes = objectToUpdate => this.service.post("/addnote", objectToUpdate).then(response => response.data)

    removeMap = id => this.service.post("/removemap", { id }).then(response => response.data)



    // this.service.get("/getmap", mapId).then(response => response.data)


    // getUser = (id) => this.service.get(`/${id}`).then(response => response.data)


    // login = ({ username, password }) => this.service.post("/login", { username, password })
    // logout = () => this.service.post('/logout').then(response => response.data)
    // loggedin = () => this.service.get('/loggedin').then(response => response.data)

}

export default mapServices