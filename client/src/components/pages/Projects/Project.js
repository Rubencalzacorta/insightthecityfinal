import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import UserSummary from "../../UI/Profile/ProfileSummary"
import JobExperienceSection from "../../UI/Profile/JobExperienceSection"
import MapList from "../../UI/Profile/MapsList"

import UserServices from "../../../services/user.services"
import ProjectServices from "../../../services/project.services"


class Project extends Component {

    constructor(props) {
        super(props)
        this.state = {
            project: {},
            showModal: false
        }
        this.ProjectServices = new ProjectServices()
    }

    componentDidMount = () => this.getProject()


    getProject = () => {
        this.ProjectServices.getProject(this.props.match.params.id)
            .then(theProject => this.setState({ ...this.state, project: theProject }))
            .catch(err => console.log(err))
    }






    closeModal = () => this.setState({ showModal: false })

    openModal = () => this.setState({ showModal: true })


    render() {

        return (

            <Container>

            </Container>
        )
    }
}

export default Project


    // < Row className = "align-items-left" >


    //     <UserSummary userDetails={this.state.user} />

    //     <Col md={9}>
    //         <h1>Hi {this.state.username}, Welcome to your profile</h1>
    //         <button onClick={this.openModal} >Edit profile</button>

    //         <JobExperienceSection userDetails={this.state.user} />

    //         <MapList list={this.state.user.maps} />

    //     </Col>




    //                 {/* {this.props.loggedInUser ? <ProfileEditForm closeModal={this.closeModal} loggedInUser={this.props.loggedInUser} /> : <h1>cargando</h1>} */ }


    //             </Row >

