import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import AuthServices from '../../../../services/auth.services'

import "../login/login.css"


class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.AuthServices = new AuthServices()
    }



    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    postUser = () => {

        this.AuthServices.signup(this.state)

            .then(theLoggedNewUser => {
                this.setState({ username: '', password: '' })
                this.props.setTheUser(theLoggedNewUser)
                this.props.history.push('/')

            })
            .catch(err => console.log({ err }))
    }

    handleSubmit = e => {
        console.log(this.state)

        e.preventDefault()
        this.postUser()
    }

    render() {

        return (

            <Container style={{ height: 900 }}>
                <section className="login-section">
                    <article className="auth-box">
                        <h1>Signup</h1>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                            </Form.Group>

                            <Button variant="outline-info" type="submit">Signup</Button>
                        </Form>
                    </article>
                </section>
            </Container>

        )
    }
}

export default Signup