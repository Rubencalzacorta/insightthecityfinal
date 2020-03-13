
import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'
import "./ProfileSummary.css"
// import GoogleServices from "../../../services/google.services"


class ProfileSummary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},

        }
    }


    render() {


        const { imageUrl, name, lastName, email, description, maps, projects, organizations } = this.props.userDetails

        return (

            <>

                {this.props.userDetails ?

                    <Col md={3} style={{ paddingRight: 0 }}>

                        <Card>
                            <Card.Img className="profile-pic" variant="top" src={imageUrl ? imageUrl : "http://getdrawings.com/free-icon/user-icon-67.png"} />
                            <Card.Body>
                                <Card.Title>{name ? name : ""} {lastName ? lastName : ""}</Card.Title>
                                <Card.Text>
                                    {description ? description : ""}
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Activity</Card.Title>
                                <Card.Text>
                                    maps: {maps ? maps.length : "0"} <br />
                                    projects: {projects ? projects.length : "0"} <br />
                                    organizations: {organizations ? organizations.length : "0"}
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Contact</Card.Title>
                                <Card.Text>
                                    {email}.
    </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>

                    : <h6>loading</h6>}
            </>

        )
    }
}

export default ProfileSummary