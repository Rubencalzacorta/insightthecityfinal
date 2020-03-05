import React from 'react'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

import { Link } from 'react-router-dom'

const JobExperienceCard = ({ props }) => {
    return (

        <Form.Group>
            <Form.Label>Work experience</Form.Label>
            <Form.Control type="text" name="company" value={props.company} onChange={props.handleChange} />
            <Form.Control type="date" name="startDate" value={props.startDate} onChange={props.handleChange} />
            <Form.Control type="date" name="endDate" value={props.endDate} onChange={props.handleChange} />
            <Form.Control type="text" name="description" value={props.description} onChange={props.handleChange} />
        </Form.Group>


    )
}

export default JobExperienceCard