import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import ProfileEditForm from "../../UI/Profile/ProfileEditForm"
import UserSummary from "../../UI/Profile/ProfileSummary"
import JobExperienceSection from "../../UI/Profile/JobExperienceSection"
import MapList from "../../UI/Profile/MapsList"

import UserServices from "../../../services/user.services"


class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
            showModal: false
        }
        this.UserServices = new UserServices()
    }

    componentDidMount = () => this.getUser()

    getUser = () => {

        this.UserServices.getUser(this.props.match.params.id)
            .then(theUser => this.setState({ ...this.state, user: theUser }))
            .catch(err => console.log(err))
    }


    closeModal = () => this.setState({ showModal: false })

    openModal = () => this.setState({ showModal: true })


    render() {

        return (

            <Container>
                <Row className="align-items-left">


                    <UserSummary userDetails={this.state.user} />

                    <Col md={9}>
                        <h1>Hi {this.state.username}, Welcome to your profile</h1>
                        <button onClick={this.openModal} >Edit profile</button>

                        <JobExperienceSection userDetails={this.state.user} />

                        <MapList list={this.state.user.maps} />




                    </Col>


                    <Modal show={this.state.showModal} onHide={this.closeModal}>
                        <Modal.Body>
                            <h3>Edit Your profile</h3>
                            <hr></hr>
                            <ProfileEditForm closeModal={this.closeModal} loggedInUser={this.props.loggedInUser} />
                        </Modal.Body>
                    </Modal>






                    {/* {this.props.loggedInUser ? <ProfileEditForm closeModal={this.closeModal} loggedInUser={this.props.loggedInUser} /> : <h1>cargando</h1>} */}


                </Row>

            </Container>
        )
    }
}

export default Profile