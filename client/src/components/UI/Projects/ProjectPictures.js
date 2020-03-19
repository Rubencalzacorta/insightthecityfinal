import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import "./../../pages/Home/Home.css"

import FilesServices from "./../../../services/files.services"

class ProjectMaps extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            includeMap: "",
            removeMap: ""
        }
        this.FilesServices = new FilesServices()
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ ...this.state, [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.ProjectServices.addMap(this.props.project._id, this.state.includeMap)
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

    removeImage = (url) => {
        this.props.getProject()
    }

    openModal = () => this.setState({ ...this.state, showModal: true })

    closeModal = () => this.setState({ ...this.state, showModal: false })


    // handleFileUpload = e => {

    //     console.log([...e.target.files])

    //     const uploadData = new FormData()

    //     const filesList = [...e.target.files]

    //     filesList.forEach((elm, idx) => uploadData.append("imageUrl", elm))
    //     this.FilesServices.handleUpload(uploadData)
    //         .then(response => {
    //             console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.secure_url)
    //             // this.setState({ user: { ...this.state.user, imageUrl: response.secure_url } })
    //         })
    //         .catch(err => console.log("error subiendo la foto", err))
    // }

    handleFileUpload = e => {
        const uploadData = new FormData()
        for (let key in e.target.files) {
            uploadData.append("imageUrl", e.target.files[key])
        }
        console.log(uploadData)
        // this.FilesServices.handleUpload(uploadData)
        //     .then(response => {
        //         console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.secure_url)
        //     })
        //     .catch(err => console.log(err))
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

