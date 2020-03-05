import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'

import ProfileEditForm from "./ProfileEditForm/ProfileEditForm"

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
            .then(theUser => this.setState(this.state.user = theUser))
            .catch(err => console.log(err))
    }


    closeModal = () => this.setState({ showModal: false })

    openModal = () => this.setState({ showModal: true })


    render() {

        return (

            <Container>


                <h1>Hi {this.state.username}, Welcome to your profile</h1>
                <button onClick={this.openModal} >Edit profile</button>


                <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Body>
                        <h3>Edit Your profile</h3>
                        <hr></hr>
                        <ProfileEditForm closeModal={this.closeModal} loggedInUser={this.props.loggedInUser} />
                    </Modal.Body>
                </Modal>




                {/* {this.props.loggedInUser ? <ProfileEditForm closeModal={this.closeModal} loggedInUser={this.props.loggedInUser} /> : <h1>cargando</h1>} */}
            </Container>
        )
    }
}

export default Profile