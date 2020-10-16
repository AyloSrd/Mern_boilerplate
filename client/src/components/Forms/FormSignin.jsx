import React, { Component } from "react";

import { UserContext } from "../Auth/UserContext";
import { withRouter } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import "../../styles/Form.css";

class FormSignin extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;

    // You can test more if you have to handle different sorts of inputs.
    const value =
      event.target.type === "file"
        ? event.target.files[0]
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    return (
      <form  className="Form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <h2 className="title">Signin</h2>

<label className="label" htmlFor="email">
  Email
</label>
<input
  className="input"
  type="email"
  name="email"
  id="email"
  value={this.state.email}
  onChange={this.handleChange}
/>

<label className="label" htmlFor="password">
  Password
</label>
<input
  className="input"
  type="password"
  name="password"
  id="password"
  value={this.state.password}
  onChange={this.handleChange}
/>

<button className="btn">Submit</button>
      </form>
    );
  }
}

export default withRouter(FormSignin);
