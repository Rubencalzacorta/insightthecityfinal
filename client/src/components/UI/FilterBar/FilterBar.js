import React, { Component } from 'react'

import "./FilterBar.css"

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

                {this.props.state ?

                    <div className="filter-box">

                        <Form id="google-search-form" onSubmit={this.handleSubmit}>

                            <Form.Group>
                                <Form.Label>search</Form.Label>
                                <Form.Control type="text" value={this.state.googleKWords} name="googleKWords" onChange={this.handleChange} placeholder="search for keywords" />
                            </Form.Group>

                            <Button variant="outline-secondary" type="button" onClick={this.searchPlaces} >Search</Button>
                        </Form>
                    </div>
                    : "loading"}
            </>
        )
    }
}

export default MapFilterBar