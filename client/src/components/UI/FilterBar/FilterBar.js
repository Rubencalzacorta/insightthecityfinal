
import React, { Component } from 'react'


// import mapboxgl from 'mapbox-gl';


// import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'

import GoogleServices from "../../../services/google.services"


class MapFilterBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filters: {},

        }
        this.GoogleServices = new GoogleServices()

    }

    getPlaces = () => {
        console.log("llega a la barra")
        this.GoogleServices.getPlaces()
    }

    render() {


        return (

            <>
                <h1>Buscador</h1>
                <form>
                    <input></input>
                    <button type="button" onClick={this.getPlaces} >Busca Lugares</button>

                </form>
            </>
        )
    }
}

export default MapFilterBar