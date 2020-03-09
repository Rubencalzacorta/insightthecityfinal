import React from 'react'
import MapListItem from "./MapListItem"
import Table from 'react-bootstrap/Table'

import { Link } from 'react-router-dom'


import UserServices from "../../../services/user.services"
import MapServices from "../../../services/maps.services"



// const UserService = new UserServices()
const MapService = new MapServices()

const ProfileProjects = (props) => {


    // props.userDetails.maps && console.log(mapList)
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