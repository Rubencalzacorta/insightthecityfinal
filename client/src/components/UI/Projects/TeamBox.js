import React from 'react'
import Table from 'react-bootstrap/Table'

import { Link } from 'react-router-dom'
import ProjectServices from "../../../services/project.services"

const TeamBox = (props) => {

    // props.userDetails.maps && console.log(mapList)
    console.log(props)

    return (

        props.team != undefined ?

            <div className="project-team-box">
                <h1>Team</h1>

                {/* {props.team.forEach((elm, idx) => <p key={idx}>{elm}</p>)} */}

                {/* {props.team.forEach((elm, idx) => <p key={idx}>{elm}</p>)} */}
            </div>

            : "loading"

    )

}

export default TeamBox