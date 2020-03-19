import axios from "axios"

class authServices {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/profile`,
            withCredentials: true
        })
    }

    getUser = (id) => this.service.get(`/${id}`).then(response => response.data)

    postUser = user => this.service.post("/update", user).then(response => response.data)

    addMap = map => this.service.post("/addmap", map).then(response => response.data)

    addProject = id => this.service.post("/addproject", { id }).then(response => response.data)

    removeMap = id => this.service.post("/removemap", { id }).then(response => response.data)

    removeProject = id => this.service.post("/removeproject", { id }).then(response => response.data)

}

export default authServices 