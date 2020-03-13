import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


import ProjectEditForm from "../../UI/Projects/ProjectEditForm"
import ProjectInfoBox from "../../UI/Projects/ProjectInfoBox"
import TeamMemberSummary from "../../UI/Projects/TeamMemberSummary"

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

    // closeTeamModal = () => this.setState({ showModal: false })

    // openTeamModal = () => this.setState({ showModal: true })

    updateState = state => {
        console.log("ser recibio el update state")
        this.setState({ ...this.state, project: { ...state } })
    }

    render() {

        // console.log(this.state)
        const { name, proposal, opportunity, team } = this.state.project

        return (

            this.props ?

                <Container>
                    <h1> {name}</h1>
                    <button onClick={this.openModal} >Edit project</button>

                    <Col>
                        <Row>
                            <ProjectInfoBox title="Proposal" content={proposal} />
                        </Row>

                        <Row>
                            <ProjectInfoBox title="Opportunity" content={opportunity} />
                        </Row>

                        <Row>

                            <div className="project-team-box">
                                <h1>Team</h1>

                                {/* {team ? <p>Existe</p> : "loading"} */}

                                {team ? team.map((elm, idx) => <TeamMemberSummary key={idx} userDetails={elm} />) : "loading"}
                            </div>
                        </Row>



                        <Modal show={this.state.showModal} onHide={this.closeTeamModal}>
                            <Modal.Body>
                                <h3>Edit your Project</h3>
                                <hr></hr>
                                <ProjectEditForm closeModal={this.closeModal} project={this.state.project} updateState={this.updateState} />
                            </Modal.Body>
                        </Modal>

                    </Col>

                </Container>
                :
                "loading"
        )
    }
}

export default Project

