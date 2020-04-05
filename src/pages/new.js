import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewPage extends Component {
  state = {
    message: {
      writer: "",
      body: "",
      createdAt: undefined,
      updatedAt: undefined
    }
  };

  updateValue = e => {
    const { message } = this.state;

    this.setState({
      message: { ...message, [e.target.name]: e.target.value }
    });
  };

  handleSave = e => {
    e.preventDefault();

    const id = this.props.onSave(this.state.messages);
    this.props.history.replace(`/messages/${id}`);
  };

  render() {
    const { message } = this.state;
    return (
      <div className="message-form">
        <h1>New Message</h1>
        <form onSubmit={this.handleSave}>
          <div>
            <label />
            <input
              type="text"
              name="writer"
              value={message.writer}
              onChange={this.updateValue}
            />
          </div>
          <div>
            <textarea
              name="body"
              value={message.body}
              onChange={this.updateValue}
            />
          </div>
          <div>
            <button>Save</button>
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPage;
