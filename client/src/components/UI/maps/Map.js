import React, { Component } from 'react'

import './Map.css'

import mapboxgl from 'mapbox-gl';
import data from "./madridVectors.json"
import demografics from "./demografia.json"

import UserServices from "../../../services/user.services"

mapboxgl.accessToken = process.env.MAPBOX_KEY


// seetin up all the breakpoints for the map
const options = [{
    name: 'Area',
    description: 'Neighborhood area',
    property: 'Area(Hab)',
    stops: [
        [2106.38, "rgba(79, 238, 203, 0.15)"], [4187.88, "rgba(79, 238, 203, 0.2)"], [6269.37, "rgba(79, 238, 203, 0.28)"], [8350.87, "rgba(79, 238, 203, 0.35)"], [10432.36, "rgba(79, 238, 203, 0.40)"], [12513.86, "rgba(79, 238, 203, 0.47)"], [14595.35, "rgba(79, 238, 203, 0.55)"], [16676.85, "rgba(79, 238, 203, 0.62)"], [18758.34, "rgba(79, 238, 203, 0.69)"], [28137, "rgba(79, 238, 203, 0.74)"]
    ]
}, {
    name: 'Density',
    description: '',
    property: 'Density',
    stops: [
        [49.88, "rgba(79, 238, 203, 0.15)"], [99.59, "rgba(79, 238, 203, 0.2)"], [149.29, "rgba(79, 238, 203, 0.28)"], [199, "rgba(79, 238, 203, 0.35)"], [248.7, "rgba(79, 238, 203, 0.40)"], [298.41, "rgba(79, 238, 203, 0.47)"], [348.11, "rgba(79, 238, 203, 0.55)"], [397.82, "rgba(79, 238, 203, 0.62)"], [447.52, "rgba(79, 238, 203, 0.69)"], [671, "rgba(79, 238, 203, 0.74)"]
    ]
}, {
    name: 'Men',
    description: 'Number of male inhabitants',
    property: 'Men',
    stops: [
        [3797.11, "rgba(79, 238, 203, 0.15)"], [7104.22, "rgba(79, 238, 203, 0.2)"], [10411.33, "rgba(79, 238, 203, 0.28)"], [13718.44, "rgba(79, 238, 203, 0.35)"], [17025.56, "rgba(79, 238, 203, 0.40)"], [20332.67, "rgba(79, 238, 203, 0.47)"], [23639.78, "rgba(79, 238, 203, 0.55)"], [26946.89, "rgba(79, 238, 203, 0.62)"], [30254, "rgba(79, 238, 203, 0.69)"], [45381, "rgba(79, 238, 203, 0.74)"]
    ]
}
    , {
    name: 'Women',
    description: 'Number of male inhabitants',
    property: 'Women',
    stops: [
        [4371.89, "rgba(79, 238, 203, 0.15)"], [8288.78, "rgba(79, 238, 203, 0.2)"], [12205.67, "rgba(79, 238, 203, 0.28)"], [16122.56, "rgba(79, 238, 203, 0.35)"], [20039.44, "rgba(79, 238, 203, 0.40)"], [23956.33, "rgba(79, 238, 203, 0.47)"], [27873.22, "rgba(79, 238, 203, 0.55)"], [31790.11, "rgba(79, 238, 203, 0.62)"], [35707, "rgba(79, 238, 203, 0.69)"], [53560, "rgba(79, 238, 203, 0.74)"]
    ]
}
    , {
    name: 'Avg Age',
    description: 'Avg age of inhabitants',
    property: 'Avg Age',
    stops: [
        [34.68, "rgba(79, 238, 203, 0.15)"], [36.54, "rgba(79, 238, 203, 0.2)"], [38.39, "rgba(79, 238, 203, 0.28)"], [40.25, "rgba(79, 238, 203, 0.35)"], [42.11, "rgba(79, 238, 203, 0.40)"], [43.97, "rgba(79, 238, 203, 0.47)"], [45.82, "rgba(79, 238, 203, 0.55)"], [47.68, "rgba(79, 238, 203, 0.62)"], [49.54, "rgba(79, 238, 203, 0.69)"], [74, "rgba(79, 238, 203, 0.74)"]
    ]
}
    , {
    name: '0 - 14',
    description: '0 - 14 age group',
    property: '0 - 14',
    stops: [
        [1780.67, "rgba(79, 238, 203, 0.15)"], [3371.33, "rgba(79, 238, 203, 0.2)"], [4962, "rgba(79, 238, 203, 0.28)"], [6552.67, "rgba(79, 238, 203, 0.35)"], [8143.33, "rgba(79, 238, 203, 0.40)"], [9734, "rgba(79, 238, 203, 0.47)"], [11324.67, "rgba(79, 238, 203, 0.55)"], [12915.33, "rgba(79, 238, 203, 0.62)"], [14506, "rgba(79, 238, 203, 0.69)"], [21759, "rgba(79, 238, 203, 0.74)"]
    ]
}
    , {
    name: '15 - 29 age group',
    description: 'Estimate total GDP in millions of dollars',
    property: '15 - 29',
    stops: [
        [1177.78, "rgba(79, 238, 203, 0.15)"], [2205.56, "rgba(79, 238, 203, 0.2)"], [3233.33, "rgba(79, 238, 203, 0.28)"], [4261.11, "rgba(79, 238, 203, 0.35)"], [5288.89, "rgba(79, 238, 203, 0.40)"], [6316.67, "rgba(79, 238, 203, 0.47)"], [7344.44, "rgba(79, 238, 203, 0.55)"], [8372.22, "rgba(79, 238, 203, 0.62)"], [9400, "rgba(79, 238, 203, 0.69)"], [14100, "rgba(79, 238, 203, 0.74)"]
    ]
}
    , {
    name: '30 - 44',
    description: '30 -44 age group',
    property: '30 - 44',
    stops: [
        [2222.89, "rgba(79, 238, 203, 0.15)"], [4211.78, "rgba(79, 238, 203, 0.2)"], [6200.67, "rgba(79, 238, 203, 0.28)"], [8189.56, "rgba(79, 238, 203, 0.35)"], [10178.44, "rgba(79, 238, 203, 0.40)"], [12167.33, "rgba(79, 238, 203, 0.47)"], [14156.22, "rgba(79, 238, 203, 0.55)"], [16145.11, "rgba(79, 238, 203, 0.62)"], [18134, "rgba(79, 238, 203, 0.69)"], [27201, "rgba(79, 238, 203, 0.74)"]
    ]
}
    , {
    name: '45 - 64 age group',
    description: 'Estimate total GDP in millions of dollars',
    property: '45 - 64',
    stops: [
        [2089.78, "rgba(79, 238, 203, 0.15)"], [3999.56, "rgba(79, 238, 203, 0.2)"], [5909.33, "rgba(79, 238, 203, 0.28)"], [7819.11, "rgba(79, 238, 203, 0.35)"], [9728.89, "rgba(79, 238, 203, 0.40)"], [11638.67, "rgba(79, 238, 203, 0.47)"], [13548.44, "rgba(79, 238, 203, 0.55)"], [15458.22, "rgba(79, 238, 203, 0.62)"], [17368, "rgba(79, 238, 203, 0.69)"], [26052, "rgba(79, 238, 203, 0.74)"]
    ]
}
    , {
    name: '65 plus age group',
    description: 'Estimate total GDP in millions of dollars',
    property: '65 plus',
    stops: [
        [2242, "rgba(79, 238, 203, 0.15)"], [4448, "rgba(79, 238, 203, 0.2)"], [6654, "rgba(79, 238, 203, 0.28)"], [8860, "rgba(79, 238, 203, 0.35)"], [11066, "rgba(79, 238, 203, 0.40)"], [13272, "rgba(79, 238, 203, 0.47)"], [15478, "rgba(79, 238, 203, 0.55)"], [17684, "rgba(79, 238, 203, 0.62)"], [19890, "rgba(79, 238, 203, 0.69)"], [29835, "rgba(79, 238, 203, 0.74)"]
    ]
}
    , {
    name: 'Spaniards',
    description: 'Number of Spaniard recidents',
    property: 'Spaniards',
    stops: [
        [0.71, "rgba(79, 238, 203, 0.15)"], [0.74, "rgba(79, 238, 203, 0.2)"], [0.78, "rgba(79, 238, 203, 0.28)"], [0.81, "rgba(79, 238, 203, 0.35)"], [0.84, "rgba(79, 238, 203, 0.40)"], [0.87, "rgba(79, 238, 203, 0.47)"], [0.9, "rgba(79, 238, 203, 0.55)"], [0.94, "rgba(79, 238, 203, 0.62)"], [0.97, "rgba(79, 238, 203, 0.69)"], [1, "rgba(79, 238, 203, 0.74)"]
    ]
}
    , {
    name: 'Foreigners',
    description: 'Number of Foreigners residents',
    property: 'Foreigners',
    stops: [
        [0.06, "rgba(79, 238, 203, 0.15)"], [0.1, "rgba(79, 238, 203, 0.2)"], [0.13, "rgba(79, 238, 203, 0.28)"], [0.16, "rgba(79, 238, 203, 0.35)"], [0.19, "rgba(79, 238, 203, 0.40)"], [0.22, "rgba(79, 238, 203, 0.47)"], [0.26, "rgba(79, 238, 203, 0.55)"], [0.29, "rgba(79, 238, 203, 0.62)"], [0.32, "rgba(79, 238, 203, 0.69)"], [1, "rgba(79, 238, 203, 0.74)"]
    ]
}, {
    name: 'N Houses',
    description: 'Number of houses',
    property: 'N Houses',
    stops: [
        [3304.11, "rgba(79, 238, 203, 0.15)"], [6204.22, "rgba(79, 238, 203, 0.2)"], [9104.33, "rgba(79, 238, 203, 0.28)"], [12004.44, "rgba(79, 238, 203, 0.35)"], [14904.56, "rgba(79, 238, 203, 0.40)"], [17804.67, "rgba(79, 238, 203, 0.47)"], [20704.78, "rgba(79, 238, 203, 0.55)"], [23604.89, "rgba(79, 238, 203, 0.62)"], [26505, "rgba(79, 238, 203, 0.69)"], [39757, "rgba(79, 238, 203, 0.74)"]
    ]
}, {
    name: 'Avg people per household',
    description: 'Estimate total GDP in millions of dollars',
    property: 'Home size',
    stops: [
        [2.11, "rgba(79, 238, 203, 0.15)"], [2.28, "rgba(79, 238, 203, 0.2)"], [2.46, "rgba(79, 238, 203, 0.28)"], [2.63, "rgba(79, 238, 203, 0.35)"], [2.81, "rgba(79, 238, 203, 0.40)"], [2.99, "rgba(79, 238, 203, 0.47)"], [3.16, "rgba(79, 238, 203, 0.55)"], [3.34, "rgba(79, 238, 203, 0.62)"], [3.51, "rgba(79, 238, 203, 0.69)"], [5, "rgba(79, 238, 203, 0.74)"]]
}, {
    name: 'Natality rate',
    description: 'Natality rate of neighborhood',
    property: 'Natality rate',
    stops: [
        [8.37, "rgba(79, 238, 203, 0.15)"], [11.87, "rgba(79, 238, 203, 0.2)"], [15.38, "rgba(79, 238, 203, 0.28)"], [18.89, "rgba(79, 238, 203, 0.35)"], [22.39, "rgba(79, 238, 203, 0.40)"], [25.9, "rgba(79, 238, 203, 0.47)"], [29.41, "rgba(79, 238, 203, 0.55)"], [32.91, "rgba(79, 238, 203, 0.62)"], [36.42, "rgba(79, 238, 203, 0.69)"], [54, "rgba(79, 238, 203, 0.74)"]
    ]
}, {
    name: 'Growth rate',
    description: 'Growth rate in terms of inhabitants',
    property: 'Growth rate',
    stops: [
        [7.93, "rgba(79, 238, 203, 0.15)"], [17.79, "rgba(79, 238, 203, 0.2)"], [27.65, "rgba(79, 238, 203, 0.28)"], [37.51, "rgba(79, 238, 203, 0.35)"], [47.37, "rgba(79, 238, 203, 0.40)"], [57.22, "rgba(79, 238, 203, 0.47)"], [67.08, "rgba(79, 238, 203, 0.55)"], [76.94, "rgba(79, 238, 203, 0.62)"], [86.8, "rgba(79, 238, 203, 0.69)"], [130, "rgba(79, 238, 203, 0.74)"]
    ]
}, {
    name: 'Income per house',
    description: 'Avg yearly income of the household',
    property: 'Income per house',
    stops: [
        [29890.83, "rgba(79, 238, 203, 0.15)"], [40194.57, "rgba(79, 238, 203, 0.2)"], [50498.31, "rgba(79, 238, 203, 0.28)"], [60802.05, "rgba(79, 238, 203, 0.35)"], [71105.79, "rgba(79, 238, 203, 0.40)"], [81409.53, "rgba(79, 238, 203, 0.47)"], [91713.27, "rgba(79, 238, 203, 0.55)"], [102017.01, "rgba(79, 238, 203, 0.62)"], [112320.75, "rgba(79, 238, 203, 0.69)"], [168481, "rgba(79, 238, 203, 0.74)"]
    ]
}, {
    name: 'Unemployment',
    description: 'Unemployment rate',
    property: 'Unemployment',
    stops: [
        [0.07, "rgba(79, 238, 203, 0.15)"], [0.13, "rgba(79, 238, 203, 0.2)"], [0.19, "rgba(79, 238, 203, 0.28)"], [0.25, "rgba(79, 238, 203, 0.35)"], [0.32, "rgba(79, 238, 203, 0.40)"], [0.38, "rgba(79, 238, 203, 0.47)"], [0.44, "rgba(79, 238, 203, 0.55)"], [0.51, "rgba(79, 238, 203, 0.62)"], [0.57, "rgba(79, 238, 203, 0.69)"], [1, "rgba(79, 238, 203, 0.74)"]
    ]
}, {
    name: 'Students',
    description: 'Number of currently studying',
    property: 'Students',
    stops: [
        [1851.89, "rgba(79, 238, 203, 0.15)"], [3507.78, "rgba(79, 238, 203, 0.2)"], [5163.67, "rgba(79, 238, 203, 0.28)"], [6819.56, "rgba(79, 238, 203, 0.35)"], [8475.44, "rgba(79, 238, 203, 0.40)"], [10131.33, "rgba(79, 238, 203, 0.47)"], [11787.22, "rgba(79, 238, 203, 0.55)"], [13443.11, "rgba(79, 238, 203, 0.62)"], [15099, "rgba(79, 238, 203, 0.69)"], [22648, "rgba(79, 238, 203, 0.74)"]
    ]
}, {
    name: 'Vulnerability ranking',
    description: '',
    property: 'Vulnerability ranking',
    stops: [
        [15.11, "rgba(79, 238, 203, 0.15)"], [29.22, "rgba(79, 238, 203, 0.2)"], [43.33, "rgba(79, 238, 203, 0.28)"], [57.44, "rgba(79, 238, 203, 0.35)"], [71.56, "rgba(79, 238, 203, 0.40)"], [85.67, "rgba(79, 238, 203, 0.47)"], [99.78, "rgba(79, 238, 203, 0.55)"], [113.89, "rgba(79, 238, 203, 0.62)"], [128, "rgba(79, 238, 203, 0.69)"], [192, "rgba(79, 238, 203, 0.74)"]
    ]
}, {
    name: 'Avg house price',
    description: 'Avg price of appartment or house',
    property: 'Avg house price',
    stops: [
        [66836.95, "rgba(79, 238, 203, 0.15)"], [106797.11, "rgba(79, 238, 203, 0.2)"], [146757.26, "rgba(79, 238, 203, 0.28)"], [186717.42, "rgba(79, 238, 203, 0.35)"], [226677.57, "rgba(79, 238, 203, 0.40)"], [266637.73, "rgba(79, 238, 203, 0.47)"], [306597.88, "rgba(79, 238, 203, 0.55)"], [346558.04, "rgba(79, 238, 203, 0.62)"], [386518.19, "rgba(79, 238, 203, 0.69)"], [579777, "rgba(79, 238, 203, 0.74)"]
    ]
}, {
    name: 'Avg house size (m2)',
    description: 'Avg size of houses',
    property: 'Avg house size (m2)',
    stops: [
        [20.28, "rgba(79, 238, 203, 0.15)"], [40.55, "rgba(79, 238, 203, 0.2)"], [60.83, "rgba(79, 238, 203, 0.28)"], [81.1, "rgba(79, 238, 203, 0.35)"], [101.38, "rgba(79, 238, 203, 0.40)"], [121.65, "rgba(79, 238, 203, 0.47)"], [141.93, "rgba(79, 238, 203, 0.55)"], [162.2, "rgba(79, 238, 203, 0.62)"], [182.48, "rgba(79, 238, 203, 0.69)"], [273, "rgba(79, 238, 203, 0.74)"]
    ]
},
]

class Map extends Component {

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

    sendFilters = () => this.props.postFilters({ ...this.state, searchPoints: this.props.state.searchPoints })

    componentDidMount() {
        this.mergedata()

        console.log("if")
        this.map = new mapboxgl.Map({
            container: this.mapRef.current,
            style: 'mapbox://styles/mapbox/light-v9',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })

        this.map.on('move', () => {
            this.setState({
                ...this.state,
                lng: this.map.getCenter().lng.toFixed(4),
                lat: this.map.getCenter().lat.toFixed(4),
                zoom: this.map.getZoom().toFixed(2)

            })

            this.sendFilters()
        })

        this.map.on('load', () => {
            this.map.addSource('countries', {
                type: 'geojson',
                data
            });

            this.map.addLayer({
                id: 'countries',
                type: 'fill',
                source: 'countries',
            }, 'country-label-md')// ID metches `mapbox/streets-v9`



            this.setFill()
        });

        if (this.props.state.searchPoints) {
            console.log("pasa por el if interno")
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
            console.log("paso por el else interno")

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


    componentDidUpdate() {
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
                    <input onChange={() => {
                        this.setState({ active: options[i] }, () => this.sendFilters())
                    }} checked={option.property === property} name="toggle" type="radio" />
                    <div className="toggle txt-s py3 toggle--active-white">{option.name}</div>
                </label>
            );
        }

        return (
            <div>
                <div ref={this.mapRef} className="absolute top right left bottom" />
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
