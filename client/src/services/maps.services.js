import axios from "axios"

class mapServices {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/maps`,
            withCredentials: true
        })
    }

    postMap = (map) => this.service.post("/create", map).then(response => response.data)

    getMap = mapId => this.service.get(`/getmap/${mapId}`).then(response => response.data)

    updateMap = (mapId, map) => this.service.post(`/getmap/${mapId}`, map).then(response => response.data)

    addNotes = objectToUpdate => this.service.post("/addnote", objectToUpdate).then(response => response.data)

    removeMap = id => this.service.post("/removemap", { id }).then(response => response.data)

}

export default mapServices