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

        this.state = { user: this.props.loggedInUser }
    }


    handleChange = e => {
        let { name, value } = e.target
        this.setState({ ...this.state, user: { ...this.state.user, [name]: value } })
    }

    finishAction = () => {
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



    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imageUrl", e.target.files[0])
        this.FilesServices.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.secure_url)
                this.setState({ ...this.state, imageUrl: response.secure_url })
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
                            <Form.Control type="text" name="description" value={description} onChange={this.handleChange} />
                        </Form.Group>




                        <Form.Group>
                            <Form.Label>Work experience</Form.Label>

                            <Form.Group>
                                <Form.Label>Give us an overview of your background</Form.Label>
                                <Form.Control type="text" name="experienceOverview" value={experienceOverview} onChange={this.handleChange} />
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
                            <Form.Control type="text" name="jobDescription" value={jobDescription} onChange={this.handleChange} />

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



    // addExperience = () => {
    //     let workExperienceCopy = [...this.state.workExperience]
    //     let newWorkExperience = {
    //         company: "",
    //         role: "",
    //         startDate: "",
    //         endDate: "",
    //         description: ""
    //     }
    //     workExperienceCopy.push(newWorkExperience)
    //     this.setState({
    //         workExperience: workExperienceCopy
    //     })

    // }







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

