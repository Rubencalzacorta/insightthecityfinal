import axios from "axios"

class mapServices {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/notes`,
            withCredentials: true
        })
    }

    postNote = note => this.service.post("/create", note).then(response => response.data)

}

export default mapServices 