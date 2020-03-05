import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import AuthServices from "../../../services/auth.services"
import FilesServices from "../../../services/files.services"
import UserServices from "../../../services/user.services"

// import JobExperienceCard from "./JobExperience"


class ProfileEditForm extends Component {

    constructor(props) {
        super(props)
        this.UserServices = new UserServices()
        this.AuthServices = new AuthServices()
        this.FilesServices = new FilesServices()

        this.state = this.props.loggedInUser
        console.log(this.state)
    }


    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    finishAction = () => {
        this.props.closeModal()
    }

    postUser = () => {
        this.UserServices.postUser(this.state)
            .then(() => this.finishAction())
            .catch(err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postUser()

    }

    addExperience = () => {
        let workExperienceCopy = [...this.state.workExperience]
        let newWorkExperience = {
            company: "",
            role: "",
            startDate: "",
            endDate: "",
            description: ""
        }
        workExperienceCopy.push(newWorkExperience)
        this.setState({
            workExperience: workExperienceCopy
        })

    }

    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imageUrl", e.target.files[0])
        this.FilesServices.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.secure_url)
                this.setState({ imageUrl: response.secure_url })
            })
            .catch(err => console.log(err))
    }

    render() {

        console.log(this.state)


        return (

            <>

                {this.state ?
                    <Form id="profile-edit-form" onSubmit={this.handleSubmit}>

                        <Form.Group>
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" name="imageUrl" onChange={this.handleFileUpload} />
                            {/* <Form.Control type="text" name="imageUrl" value={this.state.coaster.imageUrl} onChange={this.handleChange} /> */}
                        </Form.Group>


                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Short Description of yourself</Form.Label>
                            <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                        </Form.Group>




                        <Form.Group>
                            <Form.Label>Work experience</Form.Label>

                            <Form.Group>
                                <Form.Label>Give us a desciption of your job experience</Form.Label>
                                <Form.Control type="text" name="professionalExperience" value={this.state.professionalExperience} onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Text className="text-muted">Company</Form.Text>
                            <Form.Control type="text" name="company" value={this.state.company} onChange={this.handleChange} />
                            <Form.Text className="text-muted">Role</Form.Text>
                            <Form.Control type="text" name="role" value={this.state.role} onChange={this.handleChange} />
                            <Form.Text className="text-muted">Start date</Form.Text>
                            <Form.Control type="date" name="startDate" value={this.state.startDate} onChange={this.handleChange} />
                            <Form.Text className="text-muted">End date</Form.Text>
                            <Form.Control type="date" name="endDate" value={this.state.endDate} onChange={this.handleChange} />
                            <Form.Text className="text-muted">Description</Form.Text>
                            <Form.Control type="text" name="jobDescription" value={this.state.jobDescription} onChange={this.handleChange} />

                            <hr />
                        </Form.Group>




                        <Button variant="dark" type="submit">Update profile</Button>
                    </Form>
                    :
                    <h1>loading</h1>}

            </>
        )
    }
}

export default ProfileEditForm











// {
//     this.state.workExperience.length > 0 && this.state.workExperience.map((elm, idx) =>

        // <Form.Group>
        //     <Form.Label>Work experience</Form.Label>
        //     <Form.Text className="text-muted">Company</Form.Text>
        //     <Form.Control type="text" name="company" value={elm.company} onChange={this.handleChange} />
        //     <Form.Text className="text-muted">Role</Form.Text>
        //     <Form.Control type="text" name="role" value={elm.role} onChange={this.handleChange} />
        //     <Form.Text className="text-muted">Start date</Form.Text>
        //     <Form.Control type="date" name="startDate" value={elm.startDate} onChange={this.handleChange} />
        //     <Form.Text className="text-muted">End date</Form.Text>
        //     <Form.Control type="date" name="endDate" value={elm.endDate} onChange={this.handleChange} />
        //     <Form.Text className="text-muted">Description</Form.Text>
        //     <Form.Control type="text" name="jobDescription" value={elm.jobDescription} onChange={this.handleChange} />

        //     <hr />
        // </Form.Group>

//     )
// }

// <Button variant="dark" type="button" onClick={this.addExperience}>Add a Job experience</Button>

