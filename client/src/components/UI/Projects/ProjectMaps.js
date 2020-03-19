import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import MapList from "./../Profile/MapsList"

import ProjectServices from "./../../../services/project.services"


class ProjectMaps extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showAddModal: false,
            showRemoveModal: false,

            includeMap: "",
            removeMap: ""
        }
        this.ProjectServices = new ProjectServices()
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ ...this.state, [name]: value })
    }

    handleAddSubmit = e => {
        e.preventDefault()
        this.ProjectServices.addMap(this.props.project._id, this.state.includeMap)
            .then(() => {
                this.resetState()
                this.props.getProject()
            })
    }


    handleRemoveSubmit = e => {
        e.preventDefault()
        this.ProjectServices.removeMap(this.props.project._id, this.state.removeMap)
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

    removeMap = (id) => {
        this.ProjectServices.removeMap(this.props.project._id, id)
        this.props.getProject()
    }

    openAddModal = () => this.setState({ ...this.state, showAddModal: true })

    closeAddModal = () => this.setState({ ...this.state, showAddModal: false })

    openRemoveModal = () => this.setState({ ...this.state, showRemoveModal: true })

    closeRemoveModal = () => this.setState({ ...this.state, showRemoveModal: false })


    render() {

        return (

            <>
                {this.props.project.creator ?

                    <section className="project-maps-section">
                        <article>
                            <h2>Relevant Maps</h2>
                            <button style={{ marginRight: 10 }} className="home-buttons" onClick={this.openAddModal}>Add Map</button>
                            <button className="home-buttons" onClick={this.openRemoveModal}>Remove Map</button>
                        </article>

                        <div>
                            <MapList list={this.props.project.maps} removeMap={this.removeMap} />
                        </div>


                        <Modal show={this.state.showAddModal} onHide={this.closeAddModal}>
                            <Modal.Body>
                                <h3>Select a map</h3>
                                <hr></hr>
                                <Form className="project-map-form" onSubmit={this.handleAddSubmit}>

                                    <Form.Group>
                                        <Form.Control as="select" name="includeMap" onChange={this.handleChange}>
                                            {this.props.project.creator.maps.map((elm, idx) => <option key={idx} value={elm}>Map Number {idx + 1}</option>)}
                                        </Form.Control>
                                    </Form.Group>

                                    <Button style={{ marginRight: 10 }} variant="outline-info" type="submit">Add Map</Button>
                                    <Button variant="outline-info" type="button" onClick={this.closeAddModal} type="button">Cancel</Button>

                                </Form>

                            </Modal.Body>
                        </Modal>


                        <Modal show={this.state.showRemoveModal} onHide={this.closeRemoveModal}>
                            <Modal.Body>
                                <h3>Select a map to</h3>
                                <hr></hr>
                                <Form className="project-map-form" onSubmit={this.handleRemoveSubmit}>

                                    <Form.Group>
                                        <Form.Control as="select" name="removeMap" onChange={this.handleChange}>
                                            {this.props.project.maps.map((elm, idx) => <option key={idx} value={elm}> Map number {idx + 1}</option>)}
                                        </Form.Control>
                                    </Form.Group>

                                    <Button style={{ marginRight: 10 }} variant="outline-info" type="submit">Remove Map</Button>
                                    <Button variant="outline-info" type="button" onClick={this.closeRemoveModal} type="button">Cancel</Button>

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

