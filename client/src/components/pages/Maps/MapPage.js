import React, { Component } from 'react'

import mapboxgl from 'mapbox-gl';

import Map from "../../UI/maps/Map"
import MapFilterBar from "../../UI/FilterBar/FilterBar"
import NotesBar from "../../UI/Notes/NotesBar"


import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'

import options from "./../../UI/maps/options"

import UserServices from "../../../services/user.services"
import MapServices from "../../../services/maps.services"

import Button from 'react-bootstrap/Button';

mapboxgl.accessToken = 'pk.eyJ1IjoicnViZW5jYWx6YWNvcnRhIiwiYSI6ImNrNmtubnJyaTA1dGozbGxrcDF4M3BpbjQifQ.MQlFgG0opOtC1mDZD5yPRA';

class MapPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            creator: this.props.loggedInUser._id,
            googleKWords: "",
            lng: -3.70,
            lat: 40.4115,
            zoom: 11,
            notes: [],
            active: options[0],
            searchPoints: null
        }
        this.UserServices = new UserServices()
        this.MapServices = new MapServices()

    }


    //pass it to the components to update state
    postFilters = (filters) => {
        this.setState({ ...this.setState, ...filters, creator: this.props.loggedInUser._id })
    }

    //create map in database and send to profile
    postMap = () => {
        this.MapServices.postMap(this.state)
            .then(newMap => this.UserServices.addMap(newMap))
            .then(addedMap => {
                console.log(addedMap)
                this.props.history.push(`/profile/${this.state.creator}`)
            })

    }


    render() {

        return (

            <>
                <Container>
                    <Row>
                        {this.state ? <Map postFilters={this.postFilters} state={this.state} /> : "loading"}
                        <Col md={3} style={{ height: 800 }}>

                            <aside className="filters-bar">
                                <MapFilterBar postFilters={this.postFilters} state={this.state} />

                                <NotesBar loggedInUser={this.props.loggedInUser} />

                                <Button style={{ marginTop: 30 }} variant="outline-info" type="button" onClick={this.postMap}>Create map</Button>

                                <Link to={`/profile/${this.state.creator}`}> <button type="button" className="home-buttons map-buttons">Back to your profile</button></Link>

                            </aside>
                        </Col>
                    </Row>

                </Container>
            </>
        )
    }
}

export default MapPage