
import React, { Component } from 'react'

// import Card from 'react-bootstrap/Card'
// import Col from 'react-bootstrap/Col'
// import ListGroup from 'react-bootstrap/ListGroup'
// // import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'

// import GoogleServices from "../../../services/google.services"

import "./JobExperienceSection.css"

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


                    <article style={{ marginTop: 70 }}>
                        <div className="profile-info-box">
                            <h3>Professional <br /> Overview</h3>
                            <h5>{experienceOverview}</h5>
                        </div>

                        <div className="profile-info-box">
                            <h3>Last Relevant<br />  Experience</h3>
                            <h5>{role} at {company}</h5>
                            <p>From {startDate} to {endDate} </p>
                            <h6>{jobDescription}</h6>
                        </div>
                    </article>


                    : <h6>loading</h6>}
            </>

        )
    }
}

export default JobExperienceSection