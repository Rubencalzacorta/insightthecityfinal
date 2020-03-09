import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import AuthServices from '../../../services/auth.services'

import { Link } from 'react-router-dom'

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.AuthServices = new AuthServices()
    }

    logout = () => {
        this.AuthServices.logout()
            .then(response => {
                this.props.setTheUser(false)
            })
            .catch(err => console.log(err))
    }




    render() {



        const greeting = this.props.loggedInUser ? <>Hola, {this.props.loggedInUser.username}</> : <>Hola, invitad@</>


        return (


            this.props.loggedInUser ?
                (
                    <Navbar bg="dark" expand="lg" variant="dark">
                        <Navbar.Brand href="#home">Insight dct</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as="div"> <Link to="/">Home</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to={`/profile/${this.props.loggedInUser._id}`}>Profile</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/maps/create"> Create Map </Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/projects/create"> Create Projects </Link></Nav.Link>

                                <Nav.Link onClick={this.logout}>Logout</Nav.Link>
                                <Nav.Link as="small">{greeting}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                )
                :
                (
                    <Navbar bg="dark" expand="lg" variant="dark">
                        <Navbar.Brand href="#home">Insight dct</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as="div"> <Link to="/">Home</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/signup">Signup</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/login">Login</Link></Nav.Link>
                                <Nav.Link as="small">{greeting}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                )
        )
    }
}

export default Navigation