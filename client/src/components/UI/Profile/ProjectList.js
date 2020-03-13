import React from 'react'
import MapListItem from "./MapListItem"
import Table from 'react-bootstrap/Table'


import ProjectListItem from "./ProjectListItem"

import UserServices from "../../../services/user.services"
import MapServices from "../../../services/maps.services"



// const UserService = new UserServices()
const MapService = new MapServices()

const ProjectList = (props) => {

    return (

        props.list ?
            <div>


                <Table hover>
                    <thead>
                        <tr>
                            <th>Ceated</th>
                            <th>Name</th>
                            <th>Opportunity</th>
                            <th>To Project</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.list.map((elm, idx) => <ProjectListItem key={idx} item={elm} />)}
                    </tbody>
                </Table>
            </div>

            : "loading"

    )

}

export default ProjectList