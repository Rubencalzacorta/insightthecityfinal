import React from 'react'
import { Link } from 'react-router-dom'



const ProjectListItem = (props) => {
    return (

        <tr>
            <td>{props.item.created_at}</td>
            <td>{props.item.name}</td>
            <td>{props.item.opportunity ? props.item.opportunity.slice(0, 12) : "Not defined yet"}</td>
            <td><Link className="project-table-item" to={`/projects/${props.item._id}`}>To project</Link></td>
            <td> <button >Remove</button></td>
        </tr>

    )
}

export default ProjectListItem