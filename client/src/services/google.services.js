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

        let newKeyword = ""

        if (keyword) {
            newKeyword = keyword.replace(" ", "20%")
        }

        return this.service.get(`nearbysearch/json?location=40.414295,-3.706348&radius=6000&keyword=${newKeyword}&key=AIzaSyA4kSlF_U7Jn2kZLB6bsUaLlnSqt7UJLL4`)
            .then(response => {


                //creating geoJson to return to app. 
                const geojson = {
                    type: 'FeatureCollection',
                    features: []

                }

                response.data.results.forEach((elm, idx) => {

                    let name = elm.name
                    let lat = elm.geometry.location.lat
                    let lng = elm.geometry.location.lng

                    let place = {
                        type: "Feature",
                        geometry: {
                            type: 'Point',
                            coordinates: [lng, lat]
                        },
                        properties: {
                            title: name,
                        }
                    }

                    geojson.features.push(place)
                })

                console.log(geojson)

                return geojson

            })

            .catch(err => {
                console.log("Errores")
                console.log(err)                     //Axios entire error message
                console.log(err.response.data.error) //Google API error message 
            })
    }

}
