import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import IndexPage from "./pages/index";
import ShowPage from "./pages/show";
import NewPage from "./pages/new";

import NavBar from "./components/navbar";
import Register from "./components/Register";
import LoginForm from "./components/loginForm";
import Logout from "./components/logOut";
import { saveMsgs } from "./services/msgService";
import { jwtDecode } from "jwt-decode";

class App extends Component {
  state = {
    messages: [
      {
        writer: "",
        body: ""
      }
    ]
  };

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (e) {}
  }

  doSubmit = async () => {
    await saveMsgs(this.state.messages);
    this.props.history.push("/messages");
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar user={this.state.user} />
          <div className="app-content">
            <Route
              exact
              path="/"
              component={props => (
                <IndexPage {...props} messages={this.state.messages} />
              )}
            />
            <Route
              exact
              path="/messages/:id"
              component={props => (
                <ShowPage
                  {...props}
                  note={this.state.messages[props.match.params.id]}
                />
              )}
            />
            <Route
              exact
              path="/new"
              component={props => (
                <NewPage {...props} onSave={this.handleSave} />
              )}
            />
            <Route exact path="/register" component={props => <Register />} />
            <Route exact path="/login" component={props => <LoginForm />} />
            <Route exact path="/logout" component={props => <Logout />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
