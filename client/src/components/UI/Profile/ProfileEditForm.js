import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import AuthServices from "../../../services/auth.services"
import FilesServices from "../../../services/files.services"
import UserServices from "../../../services/user.services"

class ProfileEditForm extends Component {

    constructor(props) {
        super(props)
        this.UserServices = new UserServices()
        this.AuthServices = new AuthServices()
        this.FilesServices = new FilesServices()

        this.state = { user: this.props.loggedInUser }
    }


    handleChange = e => {
        let { name, value } = e.target
        this.setState({ ...this.state, user: { ...this.state.user, [name]: value } })
    }

    finishAction = () => {
        this.props.getUser()
        this.props.closeModal()

    }

    postUser = () => {
        this.UserServices.postUser(this.state.user)
            .then(() => this.finishAction())
            .catch(err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postUser()

    }

    handleClose = () => {
        this.props.closeModal()
    }

    handleFileUpload = e => {
        const uploadData = new FormData()
        for (let key in e.target.files) {
            console.log("key", key, "files", e.target.files)
            uploadData.append("images", e.target.files[key])
            console.log(uploadData)
        }

        this.FilesServices.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.secure_url[0])
                this.setState({ ...this.state, user: { ...this.state.user, imageUrl: response.secure_url[0] } })
            })
            .catch(err => console.log(err))
    }


    render() {

        const { name, lastName, username, email, description, experienceOverview, company, role, startDate, endDate, jobDescription } = this.state.user


        return (

            <>

                {this.state ?
                    <Form id="profile-edit-form" onSubmit={this.handleSubmit}>

                        <Form.Group>
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" name="imageUrl" onChange={this.handleFileUpload} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" value={username} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={name} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lastName" value={lastName} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email" value={email} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Short Description of yourself</Form.Label>
                            <Form.Control as="textarea" type="textarea" name="description" value={description} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Work experience</Form.Label>

                            <Form.Group>
                                <Form.Label>Give us an overview of your background</Form.Label>
                                <Form.Control as="textarea" type="text" name="experienceOverview" value={experienceOverview} onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Text className="text-muted">Company</Form.Text>
                            <Form.Control type="text" name="company" value={company} onChange={this.handleChange} />
                            <Form.Text className="text-muted">Role</Form.Text>
                            <Form.Control type="text" name="role" value={role} onChange={this.handleChange} />
                            <Form.Text className="text-muted">Start date</Form.Text>
                            <Form.Control type="date" name="startDate" value={startDate} onChange={this.handleChange} />
                            <Form.Text className="text-muted">End date</Form.Text>
                            <Form.Control type="date" name="endDate" value={endDate} onChange={this.handleChange} />
                            <Form.Text className="text-muted">Description</Form.Text>
                            <Form.Control as="textarea" type="text" name="jobDescription" value={jobDescription} onChange={this.handleChange} />

                            <hr />
                        </Form.Group>

                        <Button style={{ marginRight: 10 }} variant="outline-info" type="submit">Update profile</Button>
                        <Button variant="outline-info" type="button" onClick={this.handleClose}>Cancel</Button>
                    </Form>
                    :
                    <h1>loading</h1>}

            </>
        )
    }
}

export default ProfileEditForm
