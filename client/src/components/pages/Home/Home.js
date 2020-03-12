import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import "./Home.css"

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }



    render() {

        return (

            <>
                <section id="hero-home-section">

                    <article id="hero">
                        <header>
                            <h1>Insight <br />the<br /> City</h1>
                            <p>Understand the city from the inside, use the latest demografics from Madrid and pair it with Google results to understand what drives the city</p>
                        </header>
                        <div className="home-action">

                            <Link to="/signup"> <button className="home-buttons">Start exploring</button></Link>
                            <Link to="/login"><button className="home-buttons">Login and continue</button></Link>
                        </div>

                        <p className="more-info-scroll">Scroll down to know more</p>
                    </article>

                </section>

                <section id="details-home-section">

                    {/* <Container>
                        <Row>

                            <Col md={4}>
                                <div className="hom-info-box">
                                    <figure>
                                        <img src="#" alt="Map"></img>
                                    </figure>
                                    <article>
                                        <h6>Explore maps</h6>
                                        <p>Visualize with the latest technology on maps</p>
                                    </article>
                                </div>
                            </Col>



                        </Row>
                    </Container> */}



                </section>


            </>
        )
    }
}

export default Signup