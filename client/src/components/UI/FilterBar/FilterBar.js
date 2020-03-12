
import React, { Component } from 'react'


// import mapboxgl from 'mapbox-gl';

import "./FilterBar.css"

// import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import GoogleServices from "../../../services/google.services"



class MapFilterBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            demografic: "",
            googleKWords: "",
            // searchpoints: "",

        }
        this.GoogleServices = new GoogleServices()

    }


    componentDidMount = () => this.initialState()

    initialState = () => {

        this.props.state &&

            this.setState({

                googleKWords: this.props.state.googleKWords,
                searchPoints: this.props.state.searchPoints,

            })

    }


    // this.setState({ ...this.state, searchPoints: searchResults })
    getPlaces = (keywords) => {
        this.GoogleServices.getPlaces(keywords)
            .then(searchResults => this.setState({ ...this.state, searchPoints: searchResults }))
            .then(() => this.sendFilters())
    }

    searchPlaces = () => this.getPlaces(this.state.googleKWords)

    sendFilters = () => this.props.postFilters(this.state)

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ ...this.state, [name]: value })
        this.sendFilters()
    }

    handleSubmit = e => {
        e.preventDefault()
        this.searchPlaces()

    }
    render() {

        return (

            <>

                <div className="filter-bar">
                    <h1> Filters</h1>

                    <Form id="profile-edit-form" onSubmit={this.handleSubmit}>

                        <Form.Group>
                            <Form.Label>search</Form.Label>
                            <Form.Control type="text" name="googleKWords" onChange={this.handleChange} placeholder="search for keywords" />
                        </Form.Group>

                        <Button variant="dark" type="button" onClick={this.searchPlaces} >Search</Button>
                    </Form>
                </div>

            </>
        )
    }
}

export default MapFilterBar