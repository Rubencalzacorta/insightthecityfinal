import axios from 'axios'

export default class GoogleServices {

    constructor() {
        this.service = axios.create({
            baseURL: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/',
            // RUTAS PERSISTENTES
        })
    }


    // const endPoint = "/json?location=40.415843,%20-3.703589&radius=1500&keyword=chino&key=AIzaSyA4kSlF_U7Jn2kZLB6bsUaLlnSqt7UJLL4"

    getPlaces = (keyword) => {

        // keyword ? keyword = keyword.replace(" ", "20%") : null

        this.service.get(`nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&keyword=cruise&key=AIzaSyA4kSlF_U7Jn2kZLB6bsUaLlnSqt7UJLL4`)
            .then(response => {
                console.log("RESPONSES")
                console.log(response)
                console.log(response.data)
            })
            .catch(err => {
                console.log("Errores")
                console.log(err)                     //Axios entire error message
                console.log(err.response.data.error) //Google API error message 
            })
    }

}