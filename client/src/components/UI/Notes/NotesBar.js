
import React, { Component } from 'react'


// import mapboxgl from 'mapbox-gl';


// import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import GoogleServices from "../../../services/google.services"
import NotesServices from "../../../services/notes.services"
import MapsServices from "../../../services/maps.services"

import SingleNote from "./SingleNote"



class notesBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            creator: "",
            text: "",

        }
        this.GoogleServices = new GoogleServices()
        this.NotesServices = new NotesServices()
        this.MapsServices = new MapsServices()

    }

    sendFilters = () => this.props.postFilters(this.state)  // REVISAR ESTO

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ creator: this.props.loggedInUser._id, [name]: value })
    }

    handleSubmit = () => {

        this.NotesServices.postNote(this.state)
            .then(newNote => this.MapsServices.addNotes({ mapId: this.props.state._id, noteId: newNote._id }))
            .then(updatedMap => this.props.postFilters(updatedMap))

        this.resetNote()

    }

    resetNote = () => document.querySelector("#note-box").value = ""


    render() {

        console.log(this.props.state)

        return (

            <>
                {this.props.state ?
                    <Col md={3}>

                        <h1> Notes</h1>

                        <Form id="note-form" onSubmit={this.handleSubmit}>

                            <Form.Group>
                                <Form.Label>Add Note</Form.Label>
                                <Form.Control id="note-box" type="text" name="text" onChange={this.handleChange} onClick={this.submitNote} placeholder="write a note" required />
                            </Form.Group>
                            <Button variant="dark" type="button" onClick={this.handleSubmit}>Make note</Button>


                            <div className="notes-container">
                                {this.props.state.notes.map((elm, idx) => <SingleNote key={idx} eachNote={elm} />)}
                            </div>

                        </Form>

                    </Col>

                    : "Save the map for enabling comments."
                }
            </>
        )
    }
}

export default notesBar