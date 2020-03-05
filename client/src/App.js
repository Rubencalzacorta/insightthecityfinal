import React, { Component } from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom'
// , Redirect 


import AuthServices from "./services/auth.services"

import Home from "./components/pages/Home/home"
import Login from "./components/pages/auth/login/login"
import Signup from "./components/pages/auth/signup/signup"
import Profile from "./components/pages/profile/profile"
import Navigation from "./components/UI/NavBar/NavBar"
import MapPage from "./components/pages/Maps/MapPage"



class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: false
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
    this.AuthServices.loggedin()
      .then(theUser => {
        this.setState({ loggedInUser: theUser })
      })
      .catch(() => this.setState({ loggedInUser: false }))
  }


  render() {

    return (
      <>

        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />

        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
          <Route path="/signup" render={props => <Signup setTheUser={this.setTheUser} {...props} />} />
          <Route path="/profile/:id" render={props => this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} setTheUser={this.setTheUser} {...props} /> : <Redirect to="/login"></Redirect>} />
          <Route path="/maps/create" render={props => <MapPage setTheUser={this.setTheUser} {...props} />} />
          {/* <Route path="/maps/create" render={props => this.state.loggedInUser ? <Map loggedInUser={this.state.loggedInUser} setTheUser={this.setTheUser} {...props} /> : <Redirect to="/login"></Redirect>} /> */}
        </Switch>
      </>
    )
  }


}

export default App;
