import React, { Component } from "react"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import AuthServices from "../../../../services/auth.services"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.AuthServices = new AuthServices()
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    postUser = () => {
        this.AuthServices.login(this.state)
            .then(theLoggedUser => {
                this.setState({ username: '', password: '' })
                this.props.setTheUser(theLoggedUser)
                this.props.history.push('/')
            })
            .catch(err => console.log("error en post user de login", err))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postUser()
    }


    render() {
        return (
            <Container>

                <h1>Log In</h1>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="dark" type="submit">Log in</Button>
                </Form>
            </Container>

        )
    }



}

export default Login