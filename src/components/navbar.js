import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav>
      {!user && (
        <React.Fragment>
          <h1>
            <Link to="/register">Register</Link>
          </h1>
          <h1>
            <Link to="/login">Login</Link>
          </h1>{" "}
        </React.Fragment>
      )}
      {user && (
        <React.Fragment>
          <h1>
            <Link to="/logout">Logout</Link>
          </h1>
          <h1>
            <Link to="/">{user.name}</Link>
          </h1>{" "}
        </React.Fragment>
      )}
      <h1>
        <Link to="/">Guest Book</Link>
      </h1>

      <h1>
        <Link to="/new">New Note</Link>
      </h1>
      <h1>
        <Link to="/logout">Logout</Link>
      </h1>
    </nav>
  );
};

export default NavBar;
