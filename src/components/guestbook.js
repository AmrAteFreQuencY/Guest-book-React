import React, { Component } from "react";
import { Link } from "react-router-dom";

class GuestBook extends Component {
  renderMessages() {
    const messages = this.props.messages;
    return messages.map(n => (
      <div key={n._id}>
        <h2>
          <Link to={`/messages/${n._id}`}>{n.writer}</Link>
        </h2>
      </div>
    ));
  }
  render() {
    return <div>{this.renderMessages()}</div>;
  }
}

export default GuestBook;
