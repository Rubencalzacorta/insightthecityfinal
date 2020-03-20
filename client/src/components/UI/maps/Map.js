import React, { Component } from 'react'

import './Map.css'

import mapboxgl from 'mapbox-gl';
import data from "./madridVectors.json"
import demografics from "./demografia.json"

import UserServices from "../../../services/user.services"

import options from "./options"

mapboxgl.accessToken = process.env.MAPBOX_KEY


class Map extends Component {

    // create a ref for the map to be in 
    mapRef = React.createRef();
    map;

    constructor(props) {
        super(props)

        this.state = {
            lng: this.props.state ? this.props.state.lng : -3.70,
            lat: this.props.state ? this.props.state.lat : 40.4115,
            zoom: this.props.state ? this.props.state.zoom : 11,
            active: this.props.state.active ? this.props.state.active : options[0],
            searchPoints: this.props.state.searchPoints ? this.props.state.searchPoints : null

        }
        this.UserServices = new UserServices()

    }

    //Mergin all data from the demographis and madrid vectors to a unique geoJson to work on 
    mergedata = () => {
        for (let i = 0; i < data.features.length; i++) {
            for (let y = 0; y < demografics.length; y++) {
                if (data.features[i].properties.name == demografics[y].code) {
                    data.features[i].properties = { ...data.features[i].properties, ...demografics[y] }
                }
            }
        }

    }

    //send to parent the filters being used
    sendFilters = () => this.props.postFilters({ ...this.state, searchPoints: this.props.state.searchPoints })

    componentDidUpdate() {
        // when the component updates, we retrieve the pointSource dataset and change its data to props.searchpoints
        this.props.state.searchPoints && this.map.getSource('pointSource').setData(this.props.state.searchPoints)
        this.setFill()
    }

    setFill() {
        const { property, stops } = this.state.active;
        this.map.setPaintProperty('countries', 'fill-color', {
            property,
            stops
        })
    }

    componentDidMount() {

        //merge the date to be used
        this.mergedata()

        //initialize mapbox map, insise the ref created before. give the desired lng lat and zoom
        this.map = new mapboxgl.Map({
            container: this.mapRef.current,
            style: 'mapbox://styles/mapbox/light-v9',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })

        //everytime the map moves will update the state and send the filters to parent
        this.map.on('move', () => {
            this.setState({
                ...this.state,
                lng: this.map.getCenter().lng.toFixed(4),
                lat: this.map.getCenter().lat.toFixed(4),
                zoom: this.map.getZoom().toFixed(2)

            })

            this.sendFilters()
        })

        //when the map is loaded, add the vector layers from the GeoJson
        this.map.on('load', () => {
            this.map.addSource('countries', {
                type: 'geojson',
                data
            });

            this.map.addLayer({
                id: 'countries',
                type: 'fill',
                source: 'countries',
            }, 'country-label-md')

            this.setFill()
        });

        //if we have searchpoints from the props, then add another layers of points in the seachpoints locations
        if (this.props.state.searchPoints) {
            this.map.on('load', () => {
                this.map.addSource('pointSource', {
                    type: 'geojson',
                    data: this.props.state.searchPoints

                });

                this.map.addLayer({
                    id: 'points',
                    type: 'circle',
                    source: 'pointSource',
                })

                this.setFill()
            })

        } else {

            //is there are no srachpoints in props the we initialize as null the points layer
            this.map.on('load', () => {
                this.map.addSource('pointSource', {
                    type: 'geojson',
                    data: this.state.searchPoints

                });

                this.map.addLayer({
                    id: 'points',
                    type: 'circle',
                    source: 'pointSource',
                })

                this.setFill()
            })
        }
    }




    render() {

        const { name, description, stops, property } = this.state.active;

        const renderLegendKeys = (stop, i) => {
            return (
                <div key={i} className='txt-s'>
                    <span className='mr6 round-full w12 h12 inline-block align-middle' style={{ backgroundColor: stop[1] }} />
                    <span>{`${stop[0].toLocaleString()}`}</span>
                </div>
            );
        }

        const renderOptions = (option, i) => {
            return (
                <label key={i} className="toggle-container">
                    {/* when the toggle container changes, it sets the state "active" to the correct option */}
                    <input onChange={() => {
                        this.setState({ active: options[i] }, () => this.sendFilters())
                    }} checked={option.property === property} name="toggle" type="radio" />
                    <div className="toggle txt-s py3 toggle--active-white">{option.name}</div>
                </label>
            );
        }

        return (
            <div>
                <div id="mapbox"><div ref={this.mapRef} className="absolute top right left bottom" /></div>
                <div className="toggle-group absolute top left ml12 mt12 border border--2 border--white bg-white shadow-darken10 z1">
                    {options.map(renderOptions)}
                </div>
                <div className="bg-white absolute bottom right mr12 mb24 py12 px12 shadow-darken10 round z1 wmax180">
                    <div className='mb6'>
                        <h2 className="txt-bold txt-s block">{name}</h2>
                        <p className='txt-s color-gray'>{description}</p>
                    </div>
                    {stops.map(renderLegendKeys)}
                </div>
            </div>
        );
    }
}

export default Map
