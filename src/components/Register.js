import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import * as userService from "../services/userservice";

class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    errors: {}
  };
  schema = {
    username: Joi.string().required(),
    password: Joi.string()
      .required()
      .min(6),
    name: Joi.string()
      .required()
      .min(5)
  };

  doSubmit = async () => {
    try {
      const response = await userService.regist(this.state.data);
      localStorage.setItem("token", response.token);
      window.location = "/";
    } catch (e) {
      if (e.response && e.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = e.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
