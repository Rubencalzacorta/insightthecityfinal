
import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
// import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'

import GoogleServices from "../../../services/google.services"


class ProfileSummary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},

        }
    }





    render() {
        console.log(this.props)

        const { ImageUrl, name, lastName, email, description, maps, projects, organizations } = this.props.userDetails

        return (

            <>

                {/* {this.props.userDetails ?

                    <Col md={3}>

                        <Card>
                            <Card.Img variant="top" src={imageUrl} />
                            <Card.Body>
                                <Card.Title>{name} {lastName}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Activity</Card.Title>
                                <Card.Text>
                                    maps: {maps.length}
                                    projects: {projects.length}
                                    organizations: {organizations.length}
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
    </Card.Text>
                            </Card.Body>



                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    : <h6>loading</h6>} */}
            </>

        )
    }
}

export default ProfileSummary