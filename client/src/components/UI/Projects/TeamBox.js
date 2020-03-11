import React from 'react'
import Table from 'react-bootstrap/Table'

import { Link } from 'react-router-dom'


const ProjectInfoBox = (props) => {


    // props.userDetails.maps && console.log(mapList)

    return (

        props ?
            <div className="project-team-box">
                <article>

                    <h2>{props.title}</h2>

                    <p>{props.conentent}</p>

                </article>
            </div>

            : "loading"

    )

}

export default ProjectInfoBox