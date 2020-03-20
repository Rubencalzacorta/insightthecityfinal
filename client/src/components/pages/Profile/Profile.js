import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import ProfileEditForm from "../../UI/Profile/ProfileEditForm"
import UserSummary from "../../UI/Profile/ProfileSummary"
import JobExperienceSection from "../../UI/Profile/JobExperienceSection"
import MapList from "../../UI/Profile/MapsList"
import ProjectList from "../../UI/Profile/ProjectList"

import "./Profile.css"

import UserServices from "../../../services/user.services"
import MapServices from "../../../services/maps.services"
import ProjectServices from "../../../services/project.services"

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
            showModal: false,
            showList: "maps"
        }
        this.UserServices = new UserServices()
        this.MapServices = new MapServices()
        this.ProjectServices = new ProjectServices()
    }

    componentDidMount = () => this.getUser()

    getUser = () => {

        this.UserServices.getUser(this.props.match.params.id)
            .then(theUser => this.setState({ ...this.state, user: theUser }))
            .catch(err => console.log(err))
    }

    removeMap = (id) => {
        this.MapServices.removeMap(id)
            .then(() => this.UserServices.removeMap(id))
            .then(() => this.getUser())
            .catch(err => console.log("peroblemas eliminando el mapa", err))
    }

    removeProject = (id) => {
        this.ProjectServices.removeProject(id)
            .then(() => this.UserServices.removeProject(id))
            .then(() => this.getUser())
            .catch(err => console.log("peroblemas eliminando el project", err))
    }

    showMaps = () => this.setState({ ...this.state, showList: "maps" })

    showProjects = () => this.setState({ ...this.state, showList: "projects" })

    closeModal = () => this.setState({ showModal: false })

    openModal = () => this.setState({ showModal: true })



    render() {

        return (

            <Container>

                <Row className="align-items-left">

                    <UserSummary userDetails={this.state.user} />

                    <Col md={9}>
                        <section className="profile-section">

                            <h1>Hi {this.state.user.name ? this.state.user.name : this.state.user.username}, Welcome to <br /> your profile</h1>
                            <button onClick={this.openModal} >Edit profile</button>

                            <JobExperienceSection userDetails={this.state.user} />

                            <div className="profile-toggle-box">

                                <button className={this.state.showList === "maps" ? "profile-toggle-button active" : "profile-toggle-button"} onClick={this.showMaps}>Maps</button>
                                <button className={this.state.showList === "projects" ? "profile-toggle-button active" : "profile-toggle-button"} onClick={this.showProjects}>Projects</button>

                            </div>

                            {this.state.showList === "maps" ?
                                <MapList list={this.state.user.maps} removeMap={this.removeMap} />
                                :
                                <ProjectList list={this.state.user.projects} removeProject={this.removeProject} />
                            }

                        </section>

                    </Col>

                    <Modal show={this.state.showModal} onHide={this.closeModal}>

                        <Modal.Body>
                            <h3>Edit Your profile</h3>
                            <hr></hr>
                            <ProfileEditForm closeModal={this.closeModal} loggedInUser={this.props.loggedInUser} getUser={this.getUser} />
                        </Modal.Body>

                    </Modal>


                </Row>

            </Container>
        )
    }
}

export default Profile