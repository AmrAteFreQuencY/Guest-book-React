import React, { Component } from "react";
import GuestBook from "../components/guestbook";

class IndexPage extends Component {
  render() {
    return (
      <div>
        <h1>Messages</h1>
        <GuestBook notes={this.props.messages} />
      </div>
    );
  }
}

export default IndexPage;
