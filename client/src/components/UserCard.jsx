import React, { Component } from 'react'

import { withUser } from "../components/Auth/withUser";
import {
  
    Card,
    CardBody,
    CardText,
    Col,
    Row,
    CardFooter,
    Button,
    CardImg
    
  } from "reactstrap";

class UserCard extends Component{

    
 

  state = {
    firstName:"",
    lastName:"",
    email: "",
    password: "",
    role:""
  };

       render(){ 
        return (

          <Col md="6">
          <Card className="card-user">
            <CardBody>
              <CardText />
              <div className="author">
                <div className="block block-one" />
                <div className="block block-two" />
                <div className="block block-three" />
                <div className="block block-four" />
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img
                    alt="..."
                    className="avatar"
                    src="./assets/angular.png"
                  />
                  <h5 className="title">{this.props.context.user.role}</h5>
                </a>
                <p className="description">{this.props.context.user.firstName}</p>
              </div>
              <div className="card-description">
                Do not be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves
                Kanye I love Rick Owens’ bed design but the back is...
                {this.props.context.user.description}
              </div>
            </CardBody>
            <CardFooter>
              <div className="button-container">
              <h5 className="title">{this.props.context.user.email}</h5>
              </div>
            </CardFooter>
            <Button className="btn-fill" color="primary" type="submit"> <a href="./Profile">edit your Profile</a></Button>
          </Card>
        </Col>
     
        
          
        );
      }
  };


export default withUser(UserCard)

