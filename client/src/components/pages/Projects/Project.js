import React, { Component } from 'react'

import "./Project.css"

import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


import ProjectEditForm from "../../UI/Projects/ProjectEditForm"
import ProjectInfoBox from "../../UI/Projects/ProjectInfoBox"
import ProjectPictures from "./../../UI/Projects/ProjectPictures"
import ProjectMaps from "./../../UI/Projects/ProjectMaps"


import ProjectServices from "../../../services/project.services"


class Project extends Component {

    constructor(props) {
        super(props)
        this.state = {
            project: {},
            showModal: false,
            showTeamModal: false
        }
        this.ProjectServices = new ProjectServices()
    }


    componentDidMount = () => this.getProject()

    getProject = () => {
        this.ProjectServices.getProject(this.props.match.params.id)
            .then(theProject => this.setState({ ...this.state, project: theProject }))
            .catch(err => console.log(err))
    }

    closeModal = () => this.setState({ showModal: false })

    openModal = () => this.setState({ showModal: true })

    updateState = state => {
        this.setState({ ...this.state, project: { ...state } })
    }

    render() {

        const { name, proposal, opportunity } = this.state.project

        return (

            this.props ?

                <Container >

                    <section className="project-container">

                        <div className="project-head">
                            <h1> {name}</h1>
                            <button onClick={this.openModal} >Edit project</button>
                        </div>

                        <Row >

                            <div className="project-body">

                                <Col md={12}>
                                    <ProjectInfoBox title="Proposal" content={proposal} />
                                </Col>

                                <Col md={12}>
                                    <ProjectInfoBox title="Opportunity" content={opportunity} />
                                </Col>

                                <Col md={12}>
                                    <ProjectMaps updateState={this.updateState} project={this.state.project} loggedInUser={this.props.loggedInUser} getProject={this.getProject} />
                                </Col>

                                <Col md={12}>
                                    <ProjectPictures updateState={this.updateState} project={this.state.project} loggedInUser={this.props.loggedInUser} getProject={this.getProject} />
                                </Col>


                                <Modal show={this.state.showModal} onHide={this.closeTeamModal}>
                                    <Modal.Body>
                                        <h3>Edit your Project</h3>
                                        <hr></hr>
                                        <ProjectEditForm closeModal={this.closeModal} project={this.state.project} updateState={this.updateState} />
                                    </Modal.Body>
                                </Modal>

                            </div>

                        </Row>
                    </section>
                </Container>
                :
                "loading"
        )
    }
}

export default Project

