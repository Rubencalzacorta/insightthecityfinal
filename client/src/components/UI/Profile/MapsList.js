import React from 'react'
import MapListItem from "./MapListItem"
import Table from 'react-bootstrap/Table'

import { Link } from 'react-router-dom'


import UserServices from "../../../services/user.services"
import MapServices from "../../../services/maps.services"



// const UserService = new UserServices()
const MapService = new MapServices()

const MapsTable = (props) => {


    // props.userDetails.maps && console.log(mapList)
    props.list && console.log("TODO, Meter los elementos en la lista")


    return (

        props.list ?
            <div>

                <h2>Map list</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ceated</th>
                            <th>Demografics</th>
                            <th>keywords</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.list.map((elm, idx) => <Link className="map-table-item" to={`/maps/${elm._id}`}> <MapListItem key={idx} item={elm} /></Link>)}
                    </tbody>
                </Table>
            </div>

            : "loading"

    )

}

export default MapsTable