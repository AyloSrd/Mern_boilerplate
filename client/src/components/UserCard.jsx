import React, { Component } from 'react'

import { withUser } from "../components/Auth/withUser";
import {
  
    Card,
    CardBody,
    CardText,
    Col,
    
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
           

                    <Col md="6"  lg="6"  >
                        <Card className="card-user">
                          <CardBody>
                            <CardText />
                            <div className="author">
                            
                              <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img
                                  alt="..."
                                  className="avatar"
                                  
                                />
                                <h5 className="title">{this.props.context.user.email}</h5>
                              </a>
                              <p className="description">{this.props.context.user.lastName}</p>
                            </div>
                            <div className="card-description">
                            {this.props.context.user.description}
                            </div>
                          </CardBody>
                        
                        </Card>
                      </Col>
                
          
        );
      }
  };


export default withUser(UserCard)

