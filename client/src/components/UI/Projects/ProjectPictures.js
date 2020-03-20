import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import ProjectPictureItem from "./ProjectPictureItem"

import "./../../pages/Home/Home.css"

import FilesServices from "./../../../services/files.services"
import ProjectServices from "./../../../services/project.services"

class ProjectMaps extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            includeMap: "",
            removeMap: "",
            images: []
        }
        this.FilesServices = new FilesServices()
        this.ProjectServices = new ProjectServices()
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ ...this.state, [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.ProjectServices.addPictures(this.props.project._id, this.state.images)
            .then(() => {
                this.resetState()
                this.props.getProject()
            })
    }

    resetState = () => this.setState({
        showModal: false,
        includeMap: "",
        removeMap: ""
    })

    openModal = () => this.setState({ ...this.state, showModal: true })

    closeModal = () => this.setState({ ...this.state, showModal: false })



    //for multiple impage upload, include multiple in the form and use the for loop below. 
    handleFileUpload = e => {
        const uploadData = new FormData()
        for (let key in e.target.files) {
            console.log("key", key, "files", e.target.files)
            uploadData.append("images", e.target.files[key])
            console.log(uploadData)
        }

        this.FilesServices.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.secure_url)
                this.setState({ ...this.state, images: response.secure_url })

            })
            .catch(err => console.log(err))
    }

    removePicture = (url) => {
        console.log("se hizo click")
        this.ProjectServices.removePictures(this.props.project._id, url)
            .then(() => this.props.getProject())
            .catch(err => console.log("error borrando la imagen", err))

    }

    render() {

        return (

            <>
                {this.props.project.creator ?

                    <section className="project-images-section">
                        <article>
                            <h2>Images</h2>
                            <button className="home-buttons" onClick={this.openModal}>Add Images</button>
                        </article>

                        <div className="project-images-wrapper">
                            {this.props.project.images.map((elm, idx) => <ProjectPictureItem key={idx} removePicture={this.removePicture} item={elm} />)}
                        </div>


                        <Modal show={this.state.showModal} onHide={this.closeModal}>
                            <Modal.Body>
                                <h3>Select images to upload</h3>
                                <hr></hr>
                                <Form className="project-image-form" onSubmit={this.handleSubmit}>

                                    <Form.Group>
                                        <Form.Label>Images</Form.Label>
                                        <Form.Control type="file" multiple name="imageUrl" onChange={this.handleFileUpload} />
                                    </Form.Group>

                                    <Button style={{ marginRight: 10 }} variant="outline-info" type="submit">Add Images</Button>
                                    <Button variant="outline-info" onClick={this.closeModal} type="button">Cancel</Button>

                                </Form>

                            </Modal.Body>
                        </Modal>

                    </section>
                    : "loading"}
            </>
        )
    }
}

export default ProjectMaps

