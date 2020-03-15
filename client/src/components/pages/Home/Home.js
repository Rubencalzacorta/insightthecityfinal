import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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

                    </article>

                </section>

            </>
        )
    }
}

export default Signup