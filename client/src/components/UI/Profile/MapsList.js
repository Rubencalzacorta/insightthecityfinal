import React from 'react'
import MapListItem from "./MapListItem"
import Table from 'react-bootstrap/Table'

const MapsTable = (props) => {


    return (

        props.list ?
            <div>

                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>Ceated</th>
                            <th>Keywords</th>
                            <th>Go to Map</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.list.map((elm, idx) => <MapListItem key={idx} removeMap={props.removeMap} item={elm} />)}
                    </tbody>
                </Table>
            </div>

            : "loading"

    )

}

export default MapsTable