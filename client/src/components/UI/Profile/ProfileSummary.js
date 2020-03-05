
import React, { Component } from 'react'

// import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
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
                <Col>

                    <figure>

                    </figure>

                </Col>
            </>

        )
    }
}

export default MapFilterBar