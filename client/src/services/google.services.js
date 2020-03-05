import axios from 'axios'

export default class GoogleServices {

    constructor() {
        this.service = axios.create({
            baseURL: '/https://maps.googleapis.com/maps/api/place/nearbysearch',
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }


    // const endPoint = "/json?location=40.415843,%20-3.703589&radius=1500&keyword=chino&key=AIzaSyA4kSlF_U7Jn2kZLB6bsUaLlnSqt7UJLL4"

    getPlaces = () => this.service.get("/json?location=40.415843,%20-3.703589&radius=1500&keyword=chino&key=AIzaSyA4kSlF_U7Jn2kZLB6bsUaLlnSqt7UJLL4").then(response => console.log(response.data))







}