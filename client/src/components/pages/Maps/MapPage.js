import React, { Component } from 'react'

import mapboxgl from 'mapbox-gl';

import Map from "../../maps/Map"
import MapFilterBar from "../../UI/FilterBar/FilterBar"


// import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'


import UserServices from "../../../services/user.services"

mapboxgl.accessToken = 'pk.eyJ1IjoicnViZW5jYWx6YWNvcnRhIiwiYSI6ImNrNmtubnJyaTA1dGozbGxrcDF4M3BpbjQifQ.MQlFgG0opOtC1mDZD5yPRA';


class MapPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},

        }
        this.UserServices = new UserServices()

    }




    render() {


        return (

            <>
                <h1>Maps</h1>
                <MapFilterBar />
                <Map />
            </>
        )
    }
}

export default MapPage