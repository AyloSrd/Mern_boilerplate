import React, { Component } from "react";

import { UserContext } from "../Auth/UserContext";
import { withRouter } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
// import "../../styles/Form.css";

import {
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  Col,
} from "reactstrap";


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
        this.props.history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    return (

      <div  className="content  d-flex justify-content-center align-items-center mb-3">
 <Col xs="4 text-center" >
      <Card className="card-user">
      <CardBody className="card">
     
      <form  className="Form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
      <FormGroup>

        <h2 className="title">Signin</h2>

            {/* <label >
              Email
            </label> */}
            <Label for="exampleEmail" className="label" htmlFor="email">Email address</Label>
            <Input
              className="input"
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            </FormGroup>
            <FormGroup>
            {/* <label >
              Password
            </label> */}
            <Label for="examplePassword" className="label" htmlFor="password">Password</Label>
            <Input
              className="input"
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
           </FormGroup>
                <Button className="btn" color="primary" type="submit">Submit</Button>

      </form>
     
   </CardBody>
</Card>

</Col>
  </div>    
    
    );
  }
}

export default withRouter(FormSignin);




