import React from 'react'



const MapListItem = (props) => {

    console.log(props)

    return (

        <tr>
            <td>{props.item.created_at}</td>
            <td>{props.item.googleKWords}</td>
            <td>{props.item.demografic}</td>
        </tr>

    )
}

export default MapListItem