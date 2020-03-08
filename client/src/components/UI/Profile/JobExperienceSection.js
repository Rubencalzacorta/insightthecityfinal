
import React, { Component } from 'react'

// import Card from 'react-bootstrap/Card'
// import Col from 'react-bootstrap/Col'
// import ListGroup from 'react-bootstrap/ListGroup'
// // import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'

// import GoogleServices from "../../../services/google.services"


class JobExperienceSection extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},

        }
    }

    render() {

        const { company, role, experienceOverview, startDate, endDate, jobDescription } = this.props.userDetails

        return (

            <>

                {this.props.userDetails ?


                    <article>
                        <h3>Professional Overview</h3>
                        <h6>{experienceOverview}</h6>

                        <h3>Last Relevant Experience</h3>
                        <h5>{role} at {company}</h5>
                        <p>From {startDate} to {endDate} </p>
                        <h5>{jobDescription}</h5>

                    </article>


                    : <h6>loading</h6>}
            </>

        )
    }
}

export default JobExperienceSection