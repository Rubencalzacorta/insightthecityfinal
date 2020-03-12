import React, { Component } from 'react'

import mapboxgl from 'mapbox-gl';

import "./MapPageId.css"

import Map from "../../UI/maps/Map"
import MapFilterBar from "../../UI/FilterBar/FilterBar"
import NotesBar from "../../UI/Notes/NotesBar"


import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'


import UserServices from "../../../services/user.services"
import MapServices from "../../../services/maps.services"

import Button from 'react-bootstrap/Button';

mapboxgl.accessToken = 'pk.eyJ1IjoicnViZW5jYWx6YWNvcnRhIiwiYSI6ImNrNmtubnJyaTA1dGozbGxrcDF4M3BpbjQifQ.MQlFgG0opOtC1mDZD5yPRA';


class MapPageId extends Component {

    constructor(props) {
        super(props)
        this.state = {
            creator: "",
            active: [],
            googleKWords: "",
            lng: -3.70,
            lat: 40.4115,
            zoom: 11,
            notes: [],
            searchPoints: {}


        }
        this.UserServices = new UserServices()
        this.MapServices = new MapServices()

    }



    componentDidMount = () => this.getMap()


    getMap = () => {

        this.MapServices.getMap(this.props.match.params.id)
            .then(theMap => {
                this.setState({ ...theMap, creator: theMap.creator._id, updated: true })
            })
            .catch(err => console.log("error montando el estado", err))
    }


    postFilters = (filters) => {
        this.setState({ ...this.setState, ...filters, creator: this.props.loggedInUser._id })
    }


    updateMap = () => {

        this.MapServices.updateMap(this.props.match.params.id, this.state)
            .then(updatedMap => console.log(updatedMap))
            .catch(err => console.log("error al hacer update al map"))

    }


    render() {
        return (

            <>
                <Container className="map-wrapper" fluid={true}>
                    <Row>

                        {this.state.updated ? <Map postFilters={this.postFilters} state={this.state} /> : null}

                        <Col md={3} >

                            <MapFilterBar postFilters={this.postFilters} state={this.state} />

                            <NotesBar loggedInUser={this.props.loggedInUser} postFilters={this.postFilters} state={this.state} />
                        </Col>

                    </Row>

                    <Button variant="primary" type="button" onClick={this.updateMap}>save map</Button>
                </Container>
            </>
        )
    }
}

export default MapPageId