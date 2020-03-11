import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import AuthServices from "../../../services/auth.services"
import FilesServices from "../../../services/files.services"
import UserServices from "../../../services/user.services"
import ProjectServices from "../../../services/project.services"


class ProjectEditForm extends Component {

    constructor(props) {
        super(props)
        this.UserServices = new UserServices()
        this.AuthServices = new AuthServices()
        this.FilesServices = new FilesServices()
        this.ProjectServices = new ProjectServices()

        this.state = { ...this.props.project }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ ...this.state, [name]: value })
    }


    updateProject = () => {
        this.ProjectServices.updateProject(this.state)
            .then(updatedProject => {
                this.props.updateState(updatedProject)

            })
            .catch(err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.updateProject()
        this.finishAction()

    }


    finishAction = () => {
        this.props.closeModal()
    }


    render() {

        const { name, proposal, opportunity, } = this.state



        return (

            <>

                {this.state ?
                    <Form id="project-edit-form" onSubmit={this.handleSubmit}>

                        <Form.Group>
                            <Form.Label>name</Form.Label>
                            <Form.Control type="text" name="name" value={name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Proposal</Form.Label>
                            <Form.Control type="text" name="proposal" value={proposal} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Opportunity</Form.Label>
                            <Form.Control type="text" name="opportunity" value={opportunity} onChange={this.handleChange} />
                        </Form.Group>

                        <Button variant="dark" type="submit">Update Project</Button>
                        <Button variant="light" type="button">Cancel</Button>
                    </Form>
                    :
                    <h1>loading</h1>}

            </>
        )
    }
}

export default ProjectEditForm



