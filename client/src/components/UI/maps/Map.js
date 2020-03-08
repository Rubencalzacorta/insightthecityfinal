
import React, { Component } from 'react'

import './Map.css'

import mapboxgl from 'mapbox-gl';
import data from "./madridVectors.json"


// import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'


import UserServices from "../../../services/user.services"

mapboxgl.accessToken = 'pk.eyJ1IjoicnViZW5jYWx6YWNvcnRhIiwiYSI6ImNrNmtubnJyaTA1dGozbGxrcDF4M3BpbjQifQ.MQlFgG0opOtC1mDZD5yPRA';


class Map extends Component {

    constructor(props) {
        super(props)

        this.state = {
            lng: -3.70,
            lat: 40.4115,
            zoom: 11

        }
        this.UserServices = new UserServices()

    }



    sendFilters = () => this.props.postFilters(this.state)


    componentDidMount() {

        let map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })


        map.on('move', () => {
            this.setState({
                ...this.state,
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)


            })

            this.sendFilters()
        })

        map.on('load', () => {
            map.addSource('madridVectors', {
                type: 'geojson',
                data
            });

            map.addLayer({
                id: 'madridVectors',
                type: 'line',
                source: 'madridVectors',
                paint: {
                    'line-color': '#877b59',
                    'line-width': 1
                }
            }); // ID metches `mapbox/streets-v9`

        });
    }


    render() {


        return (

            <>
                <Col md={6}>
                    <div className="map-container" ref={el => this.mapContainer = el}> </div>
                </Col>
            </>
        )
    }
}

export default Map