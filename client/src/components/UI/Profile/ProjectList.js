import React from 'react'
import MapListItem from "./MapListItem"
import Table from 'react-bootstrap/Table'

import { Link } from 'react-router-dom'


import UserServices from "../../../services/user.services"
import MapServices from "../../../services/maps.services"



// const UserService = new UserServices()
const MapService = new MapServices()

const ProjectList = (props) => {

    return (

        props.list ?
            <div>

                <h2>Project list</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ceated</th>
                            <th>Name</th>
                            <th>Opportunity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.list.map((elm, idx) => <Link className="project-table-item" to={`/projects/${elm._id}`}> <MapListItem key={idx} item={elm} /></Link>)}
                    </tbody>
                </Table>
            </div>

            : "loading"

    )

}

export default ProjectList