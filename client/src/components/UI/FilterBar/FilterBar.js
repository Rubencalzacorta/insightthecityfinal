
import React, { Component } from 'react'


// import mapboxgl from 'mapbox-gl';


// import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import GoogleServices from "../../../services/google.services"


class MapFilterBar extends Component {

    constructor() {
        super()
        this.state = {
            demografic: "",
            googleKWords: "",

        }
        this.GoogleServices = new GoogleServices()

    }

    getPlaces = (keywords) => {
        console.log("llega a la barra")
        this.GoogleServices.getPlaces(keywords)
    }

    searchPlaces = () => this.getPlaces(this.state.googleKWords)

    sendFilters = () => this.props.postFilters(this.state)

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ ...this.state, [name]: value })
        this.sendFilters()
    }




    render() {

        return (

            <>
                <Col md={3}>
                    <h1> Filters</h1>

                    <Form id="profile-edit-form" onSubmit={this.handleSubmit}>

                        <Form.Group>
                            <Form.Label>search</Form.Label>
                            <Form.Control type="text" name="googleKWords" onChange={this.handleChange} onClick={this.searchPlaces} placeholder="search for keywords" />
                        </Form.Group>

                        <Button variant="dark" type="button">Search</Button>
                    </Form>

                </Col>
            </>
        )
    }
}

export default MapFilterBar