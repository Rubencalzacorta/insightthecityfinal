import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


import UserServices from "../../../services/user.services"
import ProjectServices from "../../../services/project.services"

class ProfileEditForm extends Component {

    constructor(props) {
        super(props)
        this.UserServices = new UserServices()
        this.ProjectServices = new ProjectServices()
        this.state = {
            project: {
                name: "",
                creator: this.props.loggedInUser._id
            },
            showModal: true
        }
    }


    handleChange = e => {
        let { name, value } = e.target
        this.setState({ ...this.state, project: { ...this.state.project, [name]: value } })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.createProject()
    }

    createProject = () => {
        //creates a project and adds it to the user
        this.ProjectServices.createProject(this.state.project)
            .then(project => {
                console.log("adding the project")
                this.UserServices.addProject(project._id)
                    .then(user => user)
                    .then(user => this.ProjectServices.addTeamMember(project._id, user._id))
                    .then(() => this.finishAction(project._id))

            })
            .catch(err => console.log(err))
    }

    finishAction = (id) => {
        this.closeModal()
        this.props.history.push(`/projects/${id}`)
    }

    closeModal = () => this.setState({ ...this.state, showModal: false })

    render() {

        return (
            <>
                {this.state ?

                    <Modal show={this.state.showModal} onHide={this.closeModal}>
                        <Modal.Body>
                            <h3>Create a new project</h3>
                            <hr></hr>
                            <Form id="project-create-form" onSubmit={this.handleSubmit}>

                                <Form.Group>
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control type="text" name="name" onChange={this.handleChange} required />
                                </Form.Group>

                                <Button variant="dark" type="submit">Create Project</Button>

                            </Form>

                        </Modal.Body>
                    </Modal>

                    :
                    <h1>loading</h1>}

            </>
        )
    }
}

export default ProfileEditForm


