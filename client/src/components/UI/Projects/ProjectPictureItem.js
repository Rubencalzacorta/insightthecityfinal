import React from 'react'

const ProjectPictureItem = (props) => {

    return (
        <>
            <figure className="project-image-fig"><img src={props.item} alt={`${props.id}`} />
                <button onClick={() => props.removePicture(props.item)}>Remove img</button>
            </figure>
        </>
    )
}

export default ProjectPictureItem