import React from 'react'



const MapListItem = (props) => {
    return (

        <tr>
            <td>{props.item.created_at}</td>
            <td>{props.item.name}</td>
            <td>{props.item.proposal.slice(0, 12)}</td>
        </tr>

    )
}

export default MapListItem