import React from 'react'

const ProjectInfoBox = (props) => {

    return (

        props ?
            <div className="project-info-box">
                <article>

                    <h2>{props.title}</h2>

                    <p>{props.content}</p>

                </article>
            </div>

            : "loading"

    )

}

export default ProjectInfoBox