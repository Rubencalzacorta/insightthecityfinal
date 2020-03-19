import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'



const ProjectListItem = (props) => {
    return (

        <tr>
            <td>{moment(props.item.created_at).format("ll")}</td>
            <td>{props.item.name}</td>
            <td>{props.item.opportunity ? props.item.opportunity.slice(0, 12) : "Not defined yet"}</td>
            <td><Link className="project-table-item" to={`/projects/${props.item._id}`}>To project</Link></td>
            <td> <button onClick={() => props.removeProject(props.item._id)} >Remove</button></td>
        </tr>

    )
}

export default ProjectListItem