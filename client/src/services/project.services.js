import axios from "axios"

class ProjectServices {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/projects`,
            withCredentials: true
        })
    }

    createProject = project => this.service.post("/create", project).then(response => response.data)

    getProject = id => this.service.get(`/${id}`).then(response => response.data)

    addTeamMember = (projectId, memberId) => this.service.post("/addteammember", { projectId, memberId }).then(response => response.data)

    updateProject = project => this.service.post("/updatemain", project).then(response => response.data)

    removeProject = id => this.service.post("/removeproject", { id }).then(response => response.data)

    addMap = (projectId, mapId) => this.service.post("/addmap", { projectId, mapId }).then(response => response.data)

    removeMap = (projectId, mapId) => this.service.post("/removemap", { projectId, mapId }).then(response => response.data)

    addPictures = (projectId, images) => this.service.post("/addpictures", { projectId, images }).then(response => response.data)



}

export default ProjectServices