import React from 'react'
import { Link } from 'react-router-dom'




const MapListItem = (props) => {

    // removeMapnow = () => {
    //     props.removeMap(props.item._id)
    // }

    // onClick = { removeMapnow }

    return (

        <tr>
            <td>{props.item.created_at}</td>
            <td>{props.item.googleKWords}</td>
            <td> <Link className="map-table-item" to={`/maps/${props.item._id}`}>to Map</Link></td>
            <td> <button >Remove</button></td>
        </tr>

    )
}

export default MapListItem