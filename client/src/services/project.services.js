import axios from "axios"

class ProjectServices {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/projects`,
            withCredentials: true
        })
    }

    createProject = (project) => this.service.post("/create", project).then(response => response.data)

    getProject = (id) => this.service.get(`/${id}`).then(response => response.data)

    addTeamMember = (projectId, memberId) => this.service.post("/addteammember", { projectId, memberId }).then(response => response.data)

    // getMap = mapId => this.service.post("/getmap", mapId).then(response => response.data)

    // this.service.get("/getmap", mapId).then(response => response.data)


    // getUser = (id) => this.service.get(`/${id}`).then(response => response.data)


    // login = ({ username, password }) => this.service.post("/login", { username, password })
    // logout = () => this.service.post('/logout').then(response => response.data)
    // loggedin = () => this.service.get('/loggedin').then(response => response.data)

}

export default ProjectServices