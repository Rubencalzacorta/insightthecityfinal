import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const MapListItem = (props) => {

    return (

        <tr>
            <td>{moment(props.item.created_at).format("ll")}</td>
            <td>{props.item.googleKWords}</td>
            <td>{props.item.active.name}</td>
            <td> <Link className="map-table-item" to={`/maps/${props.item._id}`}>to Map</Link></td>
            <td> <button onClick={() => props.removeMap(props.item._id)} >Remove</button></td>
        </tr>

    )
}

export default MapListItem