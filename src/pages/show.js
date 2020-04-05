import React, { Component } from "react";
import { getMsgs } from "./../services/msgService";

class ShowPage extends Component {
   componentDidMount() {
    const { data } = await getMsgs();
    const msgs = [{ _id: "", writer: "" }, ...data];
    this.setState({ msgs: getMsgs(), msgs });
  }
  render() {
    const { message } = this.props;
    return (
      <div>
        <h1>{message.writer}</h1>
        <div>{message.body}</div>
        <button>Reply</button>
      </div>
    );
  }
}

export default ShowPage;
