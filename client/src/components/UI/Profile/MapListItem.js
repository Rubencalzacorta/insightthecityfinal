import React from 'react'


// onChange = () => console.log("LO CAMBIARON")

const MapListItem = (props) => {


    return (

        <tr>
            <td>{props.item.created_at}</td>
            <td>{props.item.googleKWords}</td>
            <td>{props.item.demografic}</td>

            <td> <button onClick={props.removeMap(props.item._id)}>Remove</button>
            </td>

        </tr>

    )
}

export default MapListItem