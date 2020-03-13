import React from 'react'

const ProfileProjects = (props) => {

    props.list && console.log("TODO, Meter los elementos en la lista")


    return (

        props.list ?
            <div>
                <h1>Projects</h1>
            </div>
            : "loading"

    )

}

export default ProfileProjects