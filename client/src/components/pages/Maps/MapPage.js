import React, { Component } from 'react'

import mapboxgl from 'mapbox-gl';

import Map from "../../UI/maps/Map"
import MapFilterBar from "../../UI/FilterBar/FilterBar"


import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'


import UserServices from "../../../services/user.services"
import MapServices from "../../../services/maps.services"

import Button from 'react-bootstrap/Button';

mapboxgl.accessToken = 'pk.eyJ1IjoicnViZW5jYWx6YWNvcnRhIiwiYSI6ImNrNmtubnJyaTA1dGozbGxrcDF4M3BpbjQifQ.MQlFgG0opOtC1mDZD5yPRA';


class MapPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            creator: "",
            demografic: "",
            googleKWords: "",
            lng: undefined,
            lat: undefined,
            zoom: undefined,
            notes: []

        }
        this.UserServices = new UserServices()
        this.MapServices = new MapServices()

    }

    // updateCreator = () => this.setState({ ...this.state, user: this.props.loggedInUser._id })

    postFilters = (filters) => {
        this.setState({ ...this.setState, ...filters, creator: this.props.loggedInUser._id })
    }


    postMap = () => {

        this.MapServices.postMap(this.state)
            .then(newMap => this.UserServices.addMap(newMap))
            .then(addedMap => console.log(addedMap))

    }


    render() {

        // this.props.loggedInUser._id ? this.setState({ ...this.setState, creator: this.props.loggedInUser._id }) : null


        // console.log(this.props)
        // console.log("this is the logged in id ", this.props.loggedInUser._id)
        return (

            <>
                <Container>
                    <Row>

                        <MapFilterBar postFilters={this.postFilters} />

                        <Map postFilters={this.postFilters} />

                    </Row>

                    <Button variant="primary" type="button" onClick={this.postMap}>save map</Button>
                </Container>
            </>
        )
    }
}

export default MapPage