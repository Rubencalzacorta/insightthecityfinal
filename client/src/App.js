import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom'

import AuthServices from "./services/auth.services"

import Home from "./components/pages/Home/Home"
import Login from "./components/pages/auth/login/login"
import Signup from "./components/pages/auth/signup/signup"
import Profile from "./components/pages/Profile/Profile"
import Navigation from "./components/UI/NavBar/NavBar"
import MapPage from "./components/pages/Maps/MapPage"
import MapPageId from "./components/pages/Maps/MapPageId"
import NewProjectForm from "./components/UI/Projects/NewProjectForm"
import Project from "./components/pages/Projects/Project"



class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: null
    }
    this.AuthServices = new AuthServices()
  }

  // componentDidUpdate = (prevProps, prevState) => console.log("El estado de App se ha actualizado:", this.state)
  componentDidMount = () => this.fetchUser()

  //this allows for the session to stay logged
  setTheUser = user => {
    console.log(user)
    this.setState({ loggedInUser: user })
  }

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.AuthServices.loggedin()
        .then(theUser => {
          this.setState({ loggedInUser: theUser })
        })
        .catch(() => this.setState({ loggedInUser: false }))
    }
  }

  nullRedirect = (state, props) => {

    if (state != null) {

      return state ? <Profile loggedInUser={this.state.loggedInUser} setTheUser={this.setTheUser} {...props} /> : <Redirect to="/login"></Redirect>

    } else {

      return "Loading"
    }

  }


  render() {
    return (
      <>

        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />

        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
          <Route path="/signup" render={props => <Signup setTheUser={this.setTheUser} {...props} />} />
          <Route path="/profile/:id" render={props => this.nullRedirect(this.state.loggedInUser, props)} />

          <Route path="/maps/create" render={props => this.state.loggedInUser ? <MapPage loggedInUser={this.state.loggedInUser} {...props} /> : "loading"} />
          <Route path="/maps/:id" render={props => this.state.loggedInUser ? <MapPageId loggedInUser={this.state.loggedInUser} {...props} /> : "loading"} />
          <Route path="/projects/create" render={props => this.state.loggedInUser ? <NewProjectForm loggedInUser={this.state.loggedInUser} {...props} /> : <Redirect to="/login"></Redirect>} />
          <Route path="/projects/:id" render={props => this.state.loggedInUser ? <Project loggedInUser={this.state.loggedInUser} {...props} /> : <Redirect to="/login"></Redirect>} />

        </Switch>
      </>
    )
  }


}

export default App;
