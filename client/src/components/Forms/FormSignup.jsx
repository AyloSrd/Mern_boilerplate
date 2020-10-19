import React, { Component } from "react";
import { withRouter , Link} from "react-router-dom";
import { UserContext } from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import NavMain from "../NavMain";


class FormSignup extends Component {
  static contextType = UserContext;

  state = {
    firstName:"",
    lastName:"",
    email: "",
    password: "",
  };


  handleChange = (event) => {
    const value =
      event.target.type === "file"
        ? event.target.files[0]
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
      <NavMain />
      <form  className="Form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
      <h2 className="title">Signup</h2>
      

{/* 
        <label className="label" htmlFor="username">
          Username
        </label> */}
        <div>
        <input
          className="input"
          type="text"
          name="firstName"
          id="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
         <input
          className="input"
          type="text"
          name="lastName"
          id="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        </div>
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
        <p>
          Already have an account ?{" "}
          <Link className="link" to="/signin">
            Signin
          </Link>
        </p>
      </form>
      </div>
    );
  }
}

export default withRouter(FormSignup);
